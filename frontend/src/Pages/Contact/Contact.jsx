import PropTypes from "prop-types";
import { Element } from "react-scroll";
import About from "../About/About";
import { useTheme } from "../../components/ModeContext";
import { useState } from "react";
import { forwardRef } from "react";
const Contact = forwardRef((props, ref) => {
  const contact = props.contact;
  console.log(contact);
  const { theme } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  Contact.propTypes = {
    contact: PropTypes.object.isRequired,
  };
  Contact.displayName = "Contact";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      message,
    };

    // API call to the server
    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Message sent successfully");

        setName("");
        setEmail("");
        setMessage("");
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  return (
    <div
      ref={ref}
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } z-10  w-full pb-[3rem] `}
    >
      <About />

      <Element ref={contact} name="Contact">
        <div className="px-4 ">
          <h2 className="mb-8 text-center text-4xl text-yellow-500 md:text-6xl">
            Contact
          </h2>
          {/* Contact Container */}
          <div data-name="Contact-container" className="flex justify-center">
            <form
              onSubmit={handleSubmit}
              className={`${
                theme === "dark" ? "bg-black text-white" : "bg-white text-black"
              } flex w-full max-w-2xl flex-col gap-3`}
              action="submit"
            >
              <label htmlFor="name-input">Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                value={name}
                id="name-input"
                className={`${
                  theme === "dark"
                    ? "border border-[#2c2c2c] bg-black"
                    : "border border-[#dcdcdc]"
                } min-h-[2rem] w-full rounded-md `}
              />
              <label htmlFor="email-input" className="mt-5">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                value={email}
                id="email-input"
                className={`${
                  theme === "dark"
                    ? "border border-[#2c2c2c] bg-black"
                    : "border border-[#dcdcdc]"
                } min-h-[2rem] w-full rounded-md `}
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
                } min-h-[8rem] w-full rounded-md p-1`}
              >
                Message
              </textarea>
              <button
                type="submit"
                className="text-md mt-5 rounded-md bg-yellow-500 p-2 font-bold"
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
