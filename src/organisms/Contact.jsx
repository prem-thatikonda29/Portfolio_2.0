import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_qgii1p8",
        "template_fp5i0n7",
        {
          from_name: formData.name,
          to_name: "Prem Thatikonda",
          from_email: formData.email,
          to_email: "2023.tprem@isu.ac.in",
          message: formData.message,
        },
        "Gg0_CZUDlyA0zFRAd"
      )
      .then(
        () => {
          alert("Thank you! I'll get to you ASAP.");

          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          alert("Something went wrong!");
        }
      );
  };

  return (
    <section className="w-full h-[90vh] px-4 sm:px-8 md:px-horizontal py-vertical bg-background-light dark:bg-background flex flex-col">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bowlby text-heading dark:text-heading-light mb-bottom">
        Got something to talk about?
      </h1>

      <div className="w-full">
        <form
          ref={formRef}
          className="flex flex-col w-full gap-8 bg-background-light dark:bg-background text-background dark:text-background-light"
          onSubmit={handleSubmit}
        >
          <div className="w-full">
            <label className="block text-2xl sm:text-3xl md:text-4xl font-gemunu mb-2">
              Name :
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Joshua Wright"
              className="w-full border-b border-gray-500 outline-none text-gray-400 text-lg sm:text-xl md:text-2xl mt-2 p-4 font-gemunu"
            />
          </div>

          <div className="w-full">
            <label className="block text-2xl sm:text-3xl md:text-4xl font-gemunu mb-2">
              Email :
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="joshua08@gmail.com"
              className="w-full border-b border-gray-500 outline-none text-gray-400 text-lg sm:text-xl md:text-2xl mt-2 p-4 font-gemunu"
            />
          </div>

          <div className="w-full">
            <label className="block text-2xl sm:text-3xl md:text-4xl font-gemunu mb-2">
              Leave a message :
            </label>
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-b border-gray-500 outline-none text-gray-400 text-lg sm:text-xl md:text-2xl mt-2 p-4 font-gemunu"
              placeholder="Type your message here..."
            />
          </div>

          <button
            type="submit"
            className="self-start bg-background-light dark:bg-background border-2 text-black dark:text-white px-6 py-3 text-lg sm:text-xl md:text-2xl font-gemunu cursor-pointer mt-4"
            onClick={handleSubmit}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
