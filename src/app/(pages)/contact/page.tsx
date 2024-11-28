"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    desc: "+91 9832804146"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    desc: "ramkrishnamaity4146@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    desc: "Saltlake, Kolkata, West Bengal, India"
  }
]

const ContactPage = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto">

        <div className="flex flex-col lg:flex-row gap-[30px]">

          {/* form */}
          <div className="lg:w-[54%] order-2 lg:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3>Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae eum necessitatibus doloremque obcaecati praesentium labore?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstName" placeholder="First Name" />
                <Input type="lastName" placeholder="Last Name" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone Number" />
              </div>

              <Textarea
                className="h-[150px]"
                placeholder="Type your message here."
              />

              <Button className="max-w-40" size="md">
                Send Message
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
            <ul className="flex flex-col gap-10">
              {
                info.map((item, index)=> {
                  return <li key={index} className="flex items-center gap-6">
                    <div className="w-[32px] h-[32px] sm:w-[52px] sm:h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[18px] sm:text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="sm:text-xl text-base break-all">{item.desc}</h3>
                    </div>
                  </li>
                })
              }
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactPage