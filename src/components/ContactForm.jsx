import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Detect dark mode from Redux

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/submit-form", formData);

      if (response.data.result === "Success") {
        alert("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          whatsapp: "",
          message: "",
        });
      } else {
        alert("Error occurred: " + response.data.message);
      }

      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => formDataToSend.append(key, formData[key]));

      await fetch(
        "https://script.google.com/macros/s/AKfycbylvFOFuirZllkakNOYDgu4HxiZo7m9Stt7z8w6q9ymEF0Xr1rec6a74CDB58tS0gxANw/exec",
        {
          method: "POST",
          body: formDataToSend,
        }
      );
    } catch (error) {
      console.error("Error encountered:", error);
      alert("An error occurred while sending the message. Please try again.");
    }
  };

  return (
    <div
      className={`${
        isDarkMode
          ? "bg-gradient-to-r from-black to-gray-900 text-white border border-gray-950"
          : "bg-gradient-to-b from-gray-100 to-gray-300 shadow-md"
      } w-full mx-auto mt-10 p-5 rounded-xl shadow-lg`}
    >
   <h2
  className={`text-center text-3xl font-semibold mb-6 ${
    isDarkMode ? 'text-blue-500' : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'
  }`}
>
  Contact Me
</h2>
      <form onSubmit={handleSubmit}>
        {/* First Name and Last Name */}
        <div className="mb-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2">
            <label
              htmlFor="firstName"
              className={`block text-lg font-medium ${
                isDarkMode ? "text-white" : "text-gray-700"
              }`}
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your first name"
              required
            />
          </div>

          <div className="w-full md:w-1/2">
            <label
              htmlFor="lastName"
              className={`block text-lg font-medium ${
                isDarkMode ? "text-white" : "text-gray-700"
              }`}
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>

        {/* Email and WhatsApp */}
        <div className="mb-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2">
            <label
              htmlFor="email"
              className={`block text-lg font-medium ${
                isDarkMode ? "text-white" : "text-gray-700"
              }`}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="w-full md:w-1/2">
            <label
              htmlFor="whatsapp"
              className={`block text-lg font-medium ${
                isDarkMode ? "text-white" : "text-gray-700"
              }`}
            >
              WhatsApp Number
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your WhatsApp number"
              required
            />
          </div>
        </div>

        {/* Message */}
        <div className="mb-4">
          <label
            htmlFor="message"
            className={`block text-lg font-medium ${
              isDarkMode ? "text-white" : "text-gray-700"
            }`}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Write your message"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
        <button
  type="submit"
  className={`w-full py-3 px-4 font-semibold rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 ${
    isDarkMode
      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 focus:ring-blue-500'
      : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 focus:ring-purple-500'
  } text-white`}
>
  Submit
</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
