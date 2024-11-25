import { Validator } from "node-input-validator"
import { Transporter, createTransport } from "nodemailer"
import { CommonResponceType } from "../types/common"


const host = process.env.MAIL_HOST ?? ""
const user = process.env.MAIL_USER ?? ""
const pass = process.env.MAIL_PASS ?? ""

export const StatusCode = {
	SUCCESS: 200,
	VALIDATION_ERROR: 422,
	SERVER_ERROR: 500,
	DUPLICATE_KEY_ERROR: 409,
	BAD_REQUEST: 400,
	AUTH_ERROR: 401,
	NOT_FOUND_ERROR: 404,
	LOGOUT: 419
};


export const MailSender = async (email: string, title: string, body: string): Promise<boolean> => {
	try {
		const configOptions = {
			host: host,
			port: 465,
			secure: true,
			auth: {
				user: user,
				pass: pass
			}
		}
		const transporter: Transporter = createTransport(configOptions)
		await transporter.sendMail({
			from: "RhythmChat ORG.",
			to: `${email}`,
			subject: `${title}`,
			html: `${body}`
		})
		return true
	} catch (error) {
		console.log("Error in Mail Send: ", error)
		return false
	}
}

export const InputValidator = async (input: object, rules: object): Promise<CommonResponceType> => {
	try {
		const v = new Validator(input, rules)

		const match = await v.check()
		if (!match) {
			const error = (Object.values(v.errors)[0] as any).message
			return {
				status: true,
				message: error
			}
		} else {
			return {
				status: true,
				message: "Success"
			}
		}
	} catch (error) {
		return {
			status: false,
			message: "Invalid Data!"
		}
	}
}