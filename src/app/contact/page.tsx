"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, BookOpen, AlertCircle, CheckCircle } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    legalMatter: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

  interface SubmitResult {
    success: boolean;
    [key: string]: any;
  }

  interface SubmitEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = async (e: SubmitEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const form = new FormData();
      form.append("access_key", "c72b2fdd-d59b-4efd-a783-30fdc9e3ccc3");
      form.append("name", `${formData.firstName} ${formData.lastName}`);
      form.append("email", formData.email);
      form.append("phone", formData.phone);
      form.append("legal_matter", formData.legalMatter);
      form.append("message", formData.message);
      form.append("subject", `New Teaching Inquiry from ${formData.firstName} ${formData.lastName}`);

      const response: Response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result: SubmitResult = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          legalMatter: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='py-16 sm:py-20 bg-gray-50 min-h-screen pt-32'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12 sm:mb-16'>
          <h1 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4'>Get In Touch</h1>
          <p className='text-lg sm:text-xl text-gray-600'>Ready to discuss learning goals? Let's connect.</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12'>
          {/* Left side */}
          <div className='space-y-10 sm:space-y-8'>
            <div className='bg-white rounded-2xl p-6 sm:p-8 shadow-lg'>
              <h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6'>Contact Information</h2>
              <div className='space-y-6'>
                <div className='flex items-start space-x-4 cursor-pointer'>
                  <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Mail className='w-6 h-6 text-blue-600' />
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900'>Email</p>
                    <a href='mailto:awatarneupane@gmail.com' className='text-gray-600 hover:underline'>
                      awatarneupane@gmail.com
                    </a>
                  </div>
                </div>

                <div className='flex items-start space-x-4 cursor-pointer'>
                  <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Phone className='w-6 h-6 text-green-600' />
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900'>Phone</p>
                    <a href='tel:+9779851024392' className='text-gray-600 hover:underline'>
                      +977-98510-24392
                    </a>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <MapPin className='w-6 h-6 text-purple-600' />
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900'>Home Address</p>
                    <p className='text-gray-600'>
                      Sitapaila, Padma Colony Phase I
                      <br />
                      House No. C-20, Kathmandu
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <MapPin className='w-6 h-6 text-indigo-600' />
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900'>Office Address</p>
                    <p className='text-gray-600'>
                      Nepal Jaycees Building, Second Floor
                      <br />
                      Thapathali, Kathmandu
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-6 sm:p-8'>
              <h3 className='text-lg sm:text-xl font-bold mb-4 sm:mb-6'>Teaching Focus Areas</h3>
              <div className='grid grid-cols-1 xs:grid-cols-2 gap-4'>
                {[
                  "Curriculum Design",
                  "Research Methods",
                  "Academic Writing",
                  "Exam Preparation",
                  "Career Guidance",
                  "Professional Development",
                  "Learning Strategy",
                  "Mentorship",
                ].map((area, index) => (
                  <div key={index} className='flex items-center space-x-2'>
                    <BookOpen className='w-4 h-4' />
                    <span className='text-sm'>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side: form */}
          <div className='bg-white rounded-2xl p-6 sm:p-8 shadow-lg'>
            <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6'>Send a Message</h3>

            {submitStatus === "success" && (
              <div className='mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3'>
                <CheckCircle className='w-5 h-5 text-green-600 mt-0.5 flex-shrink-0' />
                <div>
                  <p className='text-green-800 font-semibold'>Message sent successfully!</p>
                  <p className='text-green-700 text-sm'>We'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className='mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3'>
                <AlertCircle className='w-5 h-5 text-red-600 mt-0.5 flex-shrink-0' />
                <div>
                  <p className='text-red-800 font-semibold'>Failed to send message</p>
                  <p className='text-red-700 text-sm'>Please try again or contact us directly.</p>
                </div>
              </div>
            )}

            <form className='space-y-5 sm:space-y-6' onSubmit={handleSubmit}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6'>
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>First Name *</label>
                  <input
                    type='text'
                    name='firstName'
                    value={formData.firstName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                    required
                    className='w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                    placeholder='Your First Name'
                  />
                </div>
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>Last Name *</label>
                  <input
                    type='text'
                    name='lastName'
                    value={formData.lastName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                    required
                    className='w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                    placeholder='Your Last Name'
                  />
                </div>
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Email *</label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  required
                  className='w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                  placeholder='yourname@example.com'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Phone</label>
                <input
                  type='tel'
                  name='phone'
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  className='w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                  placeholder='+977-9XXXXXXXXX'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Teaching Focus *</label>
                <select
                  name='legalMatter'
                  value={formData.legalMatter}
                  onChange={(e) => setFormData((prev) => ({ ...prev, legalMatter: e.target.value }))}
                  required
                  className='w-full px-4 text-black py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                >
                  <option value=''>Select a focus area</option>
                  {[
                    "Curriculum Design",
                    "Research Methods",
                    "Academic Writing",
                    "Exam Preparation",
                    "Career Guidance",
                    "Professional Development",
                    "Learning Strategy",
                    "Mentorship",
                    "Other",
                  ].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Message *</label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  required
                  rows={4}
                  className='w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none'
                  placeholder='Please describe your learning goals or inquiry...'
                />
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className={`w-full px-6 cursor-pointer py-3 sm:px-8 sm:py-4 rounded-lg font-semibold shadow-lg transition-all duration-200 text-white ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl transform hover:scale-105"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
