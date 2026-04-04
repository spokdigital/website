"use client";
import React, { useEffect, useRef, useState } from "react";
import { X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";

interface SliderFormProps {
  isFormOpen: boolean;
  setIsFormOpen: (isFormOpen: boolean) => void;
}

import { useLenis } from "lenis/react";

const SliderForm: React.FC<SliderFormProps> = ({
  isFormOpen,
  setIsFormOpen,
}) => {
  const lenis = useLenis();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Helper to avoid repeating the null check
    const nav = document.getElementsByClassName("HeadNavigation")[0] as
      | HTMLElement
      | undefined;

    if (isFormOpen) {
      document.body.style.overflow = "hidden";
      if (nav) nav.style.zIndex = "9999";
      lenis?.stop();
    } else {
      document.body.style.overflow = "auto";
      if (nav) nav.style.zIndex = "99999";
      lenis?.start();
    }

    return () => {
      document.body.style.overflow = "auto";
      // Re-query inside cleanup — the ref from above may be stale on unmount
      const navOnCleanup = document.getElementsByClassName(
        "HeadNavigation",
      )[0] as HTMLElement | undefined;
      if (navOnCleanup) navOnCleanup.style.zIndex = "initial";
    };
  }, [isFormOpen]);

  const form = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (form.current && !form.current.contains(event.target as Node)) {
        setIsFormOpen(false);
      }
    };

    if (isFormOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFormOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.fullName) {
      newErrors.fullName = "Full Name is required";
      isValid = false;
    }

    if (!formData.phone) {
      newErrors.phone = "Contact Number is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
      isValid = false;
    }

    if (!formData.message) {
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

      try {
        const resp = await fetch("/api/email", {
          method: "POST",
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            message: formData.message,
            contact: formData.phone,
            createdAt: new Date(),
            subject: formData.message,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        alert("Message sent successfully!");
        setFormData({
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
    <>
      <AnimatePresence mode="wait">
        {isFormOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: [0.19, 1, 0.22, 1], duration: 0.7 }}
            className="fixed z-[999999999999]  flex px-2 justify-center lg:justify-end items-center top-0 left-0 w-screen h-screen bg-slate-50/30"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ ease: [0.19, 1, 0.22, 1], duration: 0.7 }}
              className="w-[500px] p-6 bg-white shadow-xl rounded-xl"
              ref={form}
            >
              <div className="flex justify-end text-slate-950">
                <button
                  className="flex px-4 py-2 transition-colors duration-300 hover:bg-red-300 rounded-full items-center gap-2"
                  onClick={() => setIsFormOpen(false)}
                >
                  Close <X />
                </button>
              </div>

              <h2 className="text-4xl font-Synonym font-[500] ">
                Have a Question?
              </h2>
              <p className="font-SplineSans font-[300] mt-1 text-slate-800">
                Contact us today to see how we can help you find the right
                solution for your financial needs.
              </p>

              <form
                className="grid grid-cols-1 gap-4 mt-5"
                onSubmit={handleSubmit}
              >
                <div className="w-full">
                  <label>Full Name</label>
                  <input
                    name="fullName"
                    placeholder="Enter your full name"
                    className="w-full font-[500] placeholder:text-slate-600 font-Grostek bg-slate-300 rounded-xl px-5 py-3"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">{errors.fullName}</p>
                  )}
                </div>
                <div className="w-full">
                  <label>Contact Number</label>
                  <input
                    name="phone"
                    placeholder="Enter Contact number"
                    className="w-full font-[500] placeholder:text-slate-600 font-Grostek bg-slate-300 rounded-xl px-5 py-3"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>
                <div className="w-full">
                  <label>Email</label>
                  <input
                    name="email"
                    placeholder="Enter your email"
                    className="w-full font-[500] placeholder:text-slate-600 font-Grostek bg-slate-300 rounded-xl px-5 py-3"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div className="w-full">
                  <label>What service would you like help with?</label>
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    className="w-full resize-none h-32 font-[500] placeholder:text-slate-600 font-Grostek bg-slate-300 rounded-xl px-5 py-3"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>
                <div className="w-full flex justify-start">
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#2196F3] text-slate-50 rounded-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default SliderForm;
