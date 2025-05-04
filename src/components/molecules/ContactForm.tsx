"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiCheckCircle, BiLoader } from "react-icons/bi";
import { SOCIAL_LINKS } from "@/utils/constants";
import Image from "next/image";
import { FaX } from "react-icons/fa6";
import toast from "react-hot-toast";

interface ContactFormProps {
  handleClose: () => void;
}

const ContactForm = ({ handleClose }: ContactFormProps) => {
  const [form, setForm] = useState({ email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const errorToast = () => {
    toast.error(
      <div>
        <p className="font-semibold">Something went wrong!</p>
        <p className="text-sm mt-1">
          Try again later or contact me via{" "}
          <a
            href="mailto:deepeshjainofficial@gmail.com"
            className="underline text-backgroundBlue"
          >
            email
          </a>
          {", "}
          <a
            href="https://linkedin.com/in/deepeshjain-dj"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-backgroundBlue"
          >
            LinkedIn
          </a>
          {", or "}
          <a
            href="https://wa.me/918120183005"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-backgroundBlue"
          >
            Whatsapp
          </a>
          .
        </p>
      </div>,
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
        setForm({ email: "", message: "" });
        toast.success("Message sent successfully! I'll get back to you soon.", {
          duration: 5000,
        });
        handleClose();
      } else {
        errorToast();
      }
    } catch (e) {
      console.log(e);
      errorToast();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={handleClose}
    >
      <div
        className="relative px-6 py-12 bg-neutral-900/60 w-full max-w-xl border border-neutral-700 rounded-2xl backdrop-blur shadow-lg h-fit m-auto"
        onClick={(e) => e.stopPropagation()} // prevent outside click
      >
        <div
          className="absolute top-10 right-10 cursor-pointer text-neutral-400 hover:text-white"
          onClick={handleClose}
        >
          <FaX />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <Image
            src="/dj-logo.png"
            alt="logo"
            width={64}
            height={64}
            className="m-auto mb-6"
          />
          <h1 className="text-4xl font-bold text-white">Let’s Connect</h1>
          <p className="mt-4 text-neutral-300 text-lg">
            Got a project or idea? Drop me a message below.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center gap-5 text-neutral-300 mb-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {SOCIAL_LINKS.map(({ href, icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3 }}
              className="transition-colors duration-300 hover:text-primaryYellow text-2xl"
              title={label}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>

        <div className="mx-auto h-px w-[50%] bg-gradient-to-r from-white/50 via-white/90 to-white/50 mb-6" />

        <p className="text-neutral-400 text-center mb-4">Send a message</p>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div>
            <label className="block text-sm font-medium text-neutral-200 mb-1">
              Your Email
            </label>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-neutral-700 bg-neutral-800 p-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primaryYellow transition-all"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-200 mb-1">
              Message
            </label>
            <textarea
              required
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-neutral-700 bg-neutral-800 p-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primaryYellow transition-all"
              placeholder="Say something..."
            />
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
            disabled={isSubmitting}
            className="w-full bg-primary/90 hover:bg-primary disabled:bg-neutral-700 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all"
          >
            {isSubmitting ? (
              <>
                <BiLoader className="animate-spin" size={20} />
                Sending...
              </>
            ) : isSuccess ? (
              <>
                <BiCheckCircle size={20} />
                Sent!
              </>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactForm;
