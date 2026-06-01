"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";

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
];

type FormFields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<FormFields>;

const initialForm: FormFields = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};
  if (!fields.firstName.trim()) errors.firstName = "First name is required";
  if (!fields.lastName.trim()) errors.lastName = "Last name is required";
  if (!fields.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Enter a valid email";
  }
  if (!fields.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^\+?[0-9\s\-]{7,15}$/.test(fields.phone)) {
    errors.phone = "Enter a valid phone number";
  }
  if (!fields.message.trim()) errors.message = "Message is required";
  return errors;
}

const ContactPage = () => {
  const [form, setForm] = useState<FormFields>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  }

  const isFormFilled =
    form.firstName.trim() !== "" &&
    form.lastName.trim() !== "" &&
    form.email.trim() !== "" &&
    form.phone.trim() !== "" &&
    form.message.trim() !== "";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setForm(initialForm);
    }, 1500);
  }

  return (
    <section className="py-2 md:pb-4">
      <div className="container mx-auto">

        <div className="flex flex-col lg:flex-row gap-[30px]">

          {/* form */}
          <div className="lg:w-[54%] order-2 lg:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-5 sm:p-10 bg-[#27272c] rounded-xl">
              <h3>Let's work together</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                  <Input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" />
                  {errors.firstName && <span className="text-red-400 text-xs">{errors.firstName}</span>}
                </div>
                <div className="flex flex-col gap-1">
                  <Input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" />
                  {errors.lastName && <span className="text-red-400 text-xs">{errors.lastName}</span>}
                </div>
                <div className="flex flex-col gap-1">
                  <Input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
                  {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
                </div>
                <div className="flex flex-col gap-1">
                  <Input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" />
                  {errors.phone && <span className="text-red-400 text-xs">{errors.phone}</span>}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="h-[150px]"
                  placeholder="Type your message here."
                />
                {errors.message && <span className="text-red-400 text-xs">{errors.message}</span>}
              </div>

              <Button
                className={`max-w-40 transition-all duration-300 ${!isFormFilled ? "opacity-50 blur-[0.5px] cursor-not-allowed" : ""}`}
                size="md"
                disabled={loading || !isFormFilled}
              >
                {loading
                  ? <><FiLoader className="animate-spin mr-2" />Sending...</>
                  : "Send Message"
                }
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none">
            <ul className="flex flex-col gap-10">
              {
                info.map((item, index) => {
                  return <li key={index} className="flex items-center gap-6">
                    <div className="w-[32px] h-[32px] sm:w-[52px] sm:h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[18px] sm:text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="sm:text-xl text-base break-all">{item.desc}</h3>
                    </div>
                  </li>;
                })
              }
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactPage;
