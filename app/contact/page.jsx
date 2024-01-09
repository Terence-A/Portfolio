"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormDatat] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [textError, setTextError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError("");
    setEmailError("");
    setTextError("");
    if (formData.name === "") {
      setNameError("Name cannot be empty, please enter your name!");
      return;
    } else if (formData.email === "") {
      setEmailError("Email cannot be empty, please enter a valid email!");
      return;
    } else if (formData.message === "") {
      setTextError("Message area cannot be empty, please enter some text!");
      return;
    }
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDatat({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-wrap justify-around items-center px-20">
      <section className="flex-col w-1/3 ">
        <h2 className="text-white p-4">Lets Connect</h2>
        <p className="text-gray-400 p-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
          corporis totam eum neque saepe minus, magni similique asperiores quo
          tempore, quas autem et. Qui aut quod, harum provident tempora ullam.
        </p>
      </section>
      <section className="flex justify-center ">
        <form onSubmit={handleSubmit} className="flex-col ">
          <label className=" text-white" htmlFor="name">
            Name:
          </label>

          <input
            className="bg-gray-900 border rounded-md border-gray-400 text-gray-400 mb-6 w-full p-2"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
          />

          <label className=" text-white" htmlFor="email">
            Email:
          </label>

          <input
            className="bg-gray-900 border rounded-md border-gray-400 text-gray-400 mb-6 w-full p-2"
            type="email"
            id="email"
            name="email"
            value={FormData.email}
            onChange={handleChange}
            placeholder="example@email.com"
          />
          <p></p>

          <label className="text-white " htmlFor="message">
            Message:
          </label>

          <textarea
            className="bg-gray-900 border rounded-md border-gray-400 text-gray-400 mb-6 w-full p-2"
            name="message"
            id="message"
            value={formData.message}
            cols="70"
            rows="10"
            onChange={handleChange}
            placeholder="Your message..."
          />
          <p className="text-red-500 mb-6 text-center">{nameError}</p>
          <p className="text-red-500 mb-6 text-center">{textError}</p>
          <p className="text-red-500 mb-6 text-center">{emailError}</p>

          <button
            className="text-white bg-blue-800 text-2xl py-2 w-full rounded-md hover:opacity-90"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
