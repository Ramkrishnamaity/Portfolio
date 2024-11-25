import { CommonModelType } from "@/lib/types/common"
import { ProfileModelType } from "@/lib/types/model/Profile"
import mongoose, { Document, Schema } from "mongoose"

const ProfileSchema = new Schema<ProfileModelType<CommonModelType & Document["_id"]>>({
	mailId: {
		type: String,
		required: true,
		unique: true
	},
	name: {
		type: String,
	},
	phoneNo: {
		type: String,
	},
	address: {
		type: String,
	},
	image: {
		type: String,
	},
	about: {
		type: String,
	},
	yearOfExpr: {
		type: String,
	},
	resume: {
		type: String,
	},
	language: {
		type: [String]
	},
	nationality: {
		type: String,
	},
	socialLinks: {
		type: [
			{
				name: String,
				url: String
			}
		]
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	},
	isDeleted: {
		type: Boolean,
		default: false
	}
})


const ProfileModel = mongoose.models.Profile || mongoose.model<ProfileModelType<CommonModelType & Document["_id"]>>("Profile", ProfileSchema)

export default ProfileModel
