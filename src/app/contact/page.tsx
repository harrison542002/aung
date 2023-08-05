"use client";
import SpacingLayout from "@/components/SpacingLayout";
import React, { useState } from "react";
import { variant } from "../../util/animateVariants";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { FaLocationArrow } from "react-icons/fa";
import { VscLoading } from "react-icons/vsc";
import clsx from "clsx";
import TypedHeading from "@/components/typeheading";

type Props = {};

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.length <= 0) {
      setNameError(true);
    }
    if (email.length <= 0) {
      setEmailError(true);
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailError(true);
    }
    if (message.length <= 0) {
      setMessageError(true);
    }
    if (
      name.length > 0 &&
      email.length > 0 &&
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) &&
      message.length > 0
    ) {
      setDisable(() => true);
      setLoading(() => true);
      //Post messages
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      })
        .then((res) => {
          setLoading(() => false);
          setSubmitted(() => true);
          document.getElementById("contact-form")!.scrollTop += 10;
        })
        .catch((error) => {
          setLoading(() => false);
          setDisable(() => false);
        });
    }
  };

  return (
    <form
      className="my-5 space-y-5 border p-5 bg-white rounded-md shadow-lg"
      onSubmit={(e) => onFormSubmit(e)}
      id="contact-form"
    >
      {submitted === true ? (
        <>
          <div className="flex py-16 justify-center items-center">
            <p className="text-center text-xl font-bold">
              Thank You For Submission {name} !
            </p>
          </div>
        </>
      ) : (
        <>
          <input
            type="text"
            className={clsx(
              `border w-full h-14 focus:outline-none px-2 rounded-md shadow-sm ${
                nameError ? "border-red-600" : ""
              }`
            )}
            placeholder="Your Name"
            onChange={(e) => {
              setName(() => {
                if (e.target.value.length <= 0) {
                  setNameError(true);
                } else {
                  setNameError(false);
                }
                return e.target.value;
              });
            }}
          />
          <input
            type="email"
            className={clsx(
              `border w-full h-14 focus:outline-none px-2 rounded-md shadow-sm ${
                emailError ? "border-red-600" : ""
              }`
            )}
            placeholder="Your Email Address"
            onChange={(e) => {
              setEmail(() => {
                if (e.target.value.length <= 0) {
                  setEmailError(true);
                } else {
                  setEmailError(false);
                }
                return e.target.value;
              });
            }}
          />
          <textarea
            className={clsx(
              `border w-full focus:outline-none px-2 py-3 rounded-md shadow-sm ${
                messageError ? "border-red-600" : ""
              }`
            )}
            rows={4}
            placeholder="Leave Message Here"
            onChange={(e) => {
              setMessage(() => {
                if (e.target.value.length <= 0) {
                  setMessageError(true);
                } else {
                  setMessageError(false);
                }
                return e.target.value;
              });
            }}
          ></textarea>
          <button
            type="submit"
            disabled={disable}
            className="hover:bg-cyan-500 transition-all duration-500 bg-cyan-400 w-full lg:p-5 p-3 rounded-md shadow-md text-lg font-semibold flex justify-center items-center"
          >
            {loading ? <VscLoading className="animate-spin" /> : "Send"}
          </button>
        </>
      )}
    </form>
  );
};

const Contact = (props: Props) => {
  return (
    <SpacingLayout>
      <div className="py-10">
        <TypedHeading heading="Let's Keep In Touch" />
        <motion.div
          transition={{ duration: 0.5, delay: 0.03 }}
          variants={variant}
          initial={"initialState"}
          animate={"animateState"}
          className="lg:grid-cols-2 md:grid-cols-2 grid"
        >
          <div className="py-5">
            <h2 className="text-cyan-500 font-bold">Contact Information</h2>
            <div className="py-5 space-y-5">
              <div className="flex items-center">
                <div className="text-xl flex items-center bg-black p-2 text-white rounded-md mr-3 shadow-md">
                  <FiMail />
                </div>
                <p className="h-full flex flex-col justify-center py-1 text-base lg:text-lg ">
                  aungthiha12345mdy@gmail.com
                </p>
              </div>
              <div className="flex items-center">
                <div className="lg:text-xl md:text-lg text-base flex items-center bg-black p-2 text-white rounded-md mr-3 shadow-md">
                  <FaLocationArrow />
                </div>
                <p className="h-full flex flex-col justify-center py-1 lg:text-lg text-base">
                  Mandalay, Myanmar
                </p>
              </div>
            </div>
          </div>
          <div className="lg:py-5 md:py-5">
            <motion.h2
              transition={{ duration: 0.5, delay: 0.03 }}
              variants={variant}
              initial={"initialState"}
              animate={"animateState"}
              className="text-cyan-500 font-bold"
            >
              Reach Out To Me
            </motion.h2>
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </SpacingLayout>
  );
};

export default Contact;
