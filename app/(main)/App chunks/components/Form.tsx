"use client";
import React, { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fullName: "", // Added fullName
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      updatedData.fullName =
        `${updatedData.firstName} ${updatedData.lastName}`.trim();
      return updatedData;
    });
    setErrors({ ...errors, [name]: "" }); // Clear error when user types
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate First Name
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
      isValid = false;
    }

    // Validate Last Name
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
      isValid = false;
    }

    // Validate Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
      isValid = false;
    }

    // Validate Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      isValid = false;
    }

    // Validate Message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      const templateParams = {
        from_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };

      try {
        await emailjs.send(
          "service_k34vn0n", // Replace with your EmailJS service ID
          "template_0ao3rbn", // Replace with your EmailJS template ID
          templateParams,
          "dwtj2-cJpAOHH2pwy" // Replace with your EmailJS public key
        );

        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
      } catch (error) {
        console.error("FAILED...", error);
        alert("Failed to send the message, please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="w-full font-Satoshi bg-red-100 py-24 font-bold mb-[0px]">
      <div className="container">
        <motion.article className="flex justify-center lg:justify-start items-center text-black gap-3">
          {["Give", "Us", "a", "Sign"].map((text, index) => (
            <motion.h1
              key={index}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-6xl leading-[100%] font-Grostek font-[600] tracking-tight"
            >
              {text}
            </motion.h1>
          ))}
        </motion.article>
        <div className="grid bg-red-200 rounded-lg p-1 lg:p-5 grid-cols-1 lg:grid-cols-2 mt-14 gap-10">
          <div>
            <img
              src={
                "https://www.zohowebstatic.com/sites/zweb/images/desk/zd_t_banner_1x.png"
              }
              alt="Form Banner"
            />
          </div>

          <div className="w-full mt-5 rounded-lg bg-red-100">
            <div className="w-full p-5 lg:p-6">
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col items-center justify-start gap-5"
              >
                <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-5">
                  <div className="w-full">
                    <label>First Name</label>
                    <input
                      name="firstName"
                      placeholder="Enter First name"
                      className="w-full placeholder:text-gray-500 bg-slate-50 px-4 py-3 border border-slate-300 rounded-md"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm">{errors.firstName}</p>
                    )}
                  </div>
                  <div className="w-full">
                    <label>Last Name</label>
                    <input
                      name="lastName"
                      placeholder="Enter Last name"
                      className="w-full placeholder:text-gray-500 bg-slate-50 px-4 py-3 border border-slate-300 rounded-md"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-5">
                  <div className="w-full">
                    <label>Email</label>
                    <input
                      name="email"
                      placeholder="Enter Email"
                      className="w-full placeholder:text-gray-500 bg-slate-50 px-4 py-3 border border-slate-300 rounded-md"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                  <div className="w-full">
                    <label>Phone</label>
                    <input
                      name="phone"
                      placeholder="Enter Phone"
                      className="w-full placeholder:text-gray-500 bg-slate-50 px-4 py-3 border border-slate-300 rounded-md"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">{errors.phone}</p>
                    )}
                  </div>
                </div>
                <div className="w-full">
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="Enter Message"
                    className="w-full h-40 px-4 placeholder:text-gray-500 py-3 resize-none bg-slate-50 border border-slate-300 rounded-md"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>

                <div className="mt-5 flex justify-start w-full">
                  <Button
                    type="submit"
                    className="bg-red-300 active:shadow-none hover:bg-re-200 text-red-950"
                    loading={isSubmitting}
                    loadingText="Submitting"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
