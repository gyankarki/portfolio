"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <section className='py-16 sm:py-20 bg-gray-50 min-h-screen pt-32'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12 sm:mb-16'>
          <h1 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4'>Get In Touch</h1>
          <p className='text-lg sm:text-xl text-gray-600'>Ready to discuss learning goals? Let's connect.</p>
        </div>

        <div className='mx-auto max-w-3xl'>
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
                    karkigyanbahadur777@gmail.com
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
                    +977-9846129140
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
                    Akala, Sundarbazar Municipality 8, Lamjung
                 
                  </p>
                </div>
              </div>
              <div className='flex items-start space-x-4'>
                <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <MapPin className='w-6 h-6 text-purple-600' />
                </div>
                <div>
                  <p className='font-semibold text-gray-900'>Work Address</p>
                  <p className='text-gray-600'>
                    Akala, Sundarbazar Municipality 8, Lamjung
                 
                  </p>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
