import React from "react";
import { Element } from "react-scroll";
import { useTheme } from "./ModeContext";
import { useState } from "react";
import { forwardRef } from "react";
const Contact = forwardRef((props, ref) => {
    const contact = props.Contact
    console.log(contact)
  const { theme } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      message,
    };
    console.log(formData);
  };
  return (
    <div
      ref={ref}
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } w-full z-10 min-h-screen `}
    >
      <Element ref={contact} name="Contact">

        <div className="pt-20 ml-4">
          <h2 className="text-yellow-500 text-6xl mb-8 ml-[16rem]">Contact</h2>
          {/* Contact Container */}
          <div data-name="Contact-container" className="">
            <form
              onSubmit={handleSubmit}
              className={`${
                theme === "dark" ? "bg-black text-white" : "bg-white text-black"
              } flex flex-col w-[70rem] h-auto ml-auto gap-3 `}
              action="submit"
            >
              <label htmlFor="name-input">Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                name=""
                id="name-input"
                className={`${
                  theme === "dark"
                    ? "border border-[#2c2c2c] bg-black"
                    : "border border-[#dcdcdc]"
                } w-[35rem] rounded-md min-h-[2rem] `}
              />
              <label htmlFor="email-input" className="mt-5">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name=""
                id="email-input"
                className={`${
                  theme === "dark"
                    ? "border border-[#2c2c2c] bg-black"
                    : "border border-[#dcdcdc]"
                } w-[35rem] rounded-md min-h-[2rem] `}
              />
              <label htmlFor="message-input" className="mt-5">
                Message
              </label>
              <textarea
                id="message-input"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${
                  theme === "dark"
                    ? "border border-[#2c2c2c] bg-black"
                    : "border border-[#dcdcdc]"
                } w-[35rem] rounded-md min-h-[8rem] p-1`}
              >
                Message
              </textarea>
              <button
                type="submit"
                className="mt-5 mr-auto bg-yellow-500 rounded-md font-bold p-2 text-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Element>
    </div>
  );
});

export default Contact;
