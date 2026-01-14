import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="py-40 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl text-dark font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-dark/80">
            Have questions? Our team is here to help you with any inquiries
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="w-full md:w-1/2 shadow p-12">
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor=""
                  className="block text-dark/80 mb-2 font-semibold"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-6 py-2 border rounded border-dark/20 outline-none
                  placeholder:text-sm
                  placeholder:text-dark/50
                  "
                  placeholder="Enter First Name"
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block text-dark/80 mb-2 font-semibold"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-6 py-2 border rounded border-dark/20 outline-none
                  placeholder:text-sm
                  placeholder:text-dark/50
                  "
                  placeholder="Enter Last Name"
                />
              </div>
            </div>

            <div className="mb-4 grid grid-cols-1">
              <div>
                <label
                  htmlFor=""
                  className="block text-dark/80 mb-2 font-semibold"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-6 py-2 border rounded border-dark/20 outline-none
                  placeholder:text-sm
                  placeholder:text-dark/50
                  "
                  placeholder="Enter Email Address"
                />
              </div>
            </div>

            <div className="mb-4 grid grid-cols-1">
              <div>
                <label
                  htmlFor=""
                  className="block text-dark/80 mb-2 font-semibold"
                >
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-6 py-2 border rounded border-dark/20 outline-none
                  placeholder:text-sm
                  placeholder:text-dark/50
                  "
                  placeholder="Enter Subjects"
                />
              </div>
            </div>

            <div className="mb-4 grid grid-cols-1">
              <div>
                <label
                  htmlFor=""
                  className="block text-dark/80 mb-2 font-semibold"
                >
                  Message
                </label>
                <textarea
                  type="textarea"
                  className="w-full h-40 px-6 border rounded border-dark/20 outline-none
                  placeholder:text-sm
                  placeholder:text-dark/50
                  "
                  placeholder="Enter Message"
                />
              </div>
            </div>

            <button className="w-full bg-primary text-center text-white font-semibold rounded cursor-pointer py-3">
              Send Message
            </button>
          </div>

          <div className="w-full md:w-1/2">
            <div className="mb-6 shadow p-12">
              <h3 className="text-3xl text-dark font-bold">
                Contat Information
              </h3>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center">
                  <FaLocationDot className="text-xl text-primary cursor-pointer" />
                </div>
                <div className="flex flex-col gap2">
                  <h1 className="text-xl font-bold text-dark">Address</h1>
                  <p className="text-dark/80">
                    123 Cloud Street, San Francisco, CA 94103
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center">
                  <FaPhone className="text-xl text-primary cursor-pointer" />
                </div>
                <div className="flex flex-col gap2">
                  <h1 className="text-xl font-bold text-dark">Phone</h1>
                  <p className="text-dark/80">+02-972203</p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-xl text-primary cursor-pointer" />
                </div>
                <div className="flex flex-col gap2">
                  <h1 className="text-xl font-bold text-dark">Email</h1>
                  <p className="text-dark/80">elithosting@support.com</p>
                </div>
              </div>
            </div>

            <div className="shadow px-12 pt-12 py-4">
              <h3 className="text-xl text-dark font-bold mb-6">
                Support Hours
              </h3>

              <ul>
                <li className="flex items-center justify-between">
                  <span className="text-dark/80">Monday - Friday</span>
                  <span className="text-dark font-bold">24/7</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-dark/80">Satureday</span>
                  <span className="text-dark font-bold">24/7</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-dark/80">Sunday</span>
                  <span className="text-dark font-bold">24/7</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
