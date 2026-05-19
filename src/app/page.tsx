import React from "react";
import { Award } from "lucide-react";

const HomePage = () => {
  return (
    <section className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 flex items-center'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-8'>
            <div className='space-y-4'>
              <div className='inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium'>
                <Award className='w-4 h-4 mr-2' />
                Head Teacher
              </div>
              <h1 className='text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'>
                Mr.{" "}
                <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Gyan Bahadur Karki</span>
              </h1>
              <p className='text-xl text-gray-600 leading-relaxed'>Teacher • Lecturer • Educator</p>
            </div>

            <p className='text-lg text-gray-700 leading-relaxed max-w-xl'>
              Dedicated to student-centered teaching, curriculum development, and academic mentoring with over two decades of
              classroom experience.
            </p>

            <div className='flex items-center space-x-8 pt-4'>
              <div className='text-center'>
                <div className='text-2xl font-bold text-gray-900'>25+</div>
                <div className='text-sm text-gray-600'>Years Experience</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-gray-900'>8000+</div>
                <div className='text-sm text-gray-600'>Students Mentored</div>
              </div>
            </div>
          </div>

          <div className='lg:pl-12'>
            <div className='relative'>
              <div className='w-full h-[600px] rounded-2xl shadow-2xl overflow-hidden'>
                <img src='/home.jpg' alt='Professional teacher' className='w-full h-full object-cover object-top' />
              </div>
              <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl'></div>
              <div className='absolute bottom-6 left-6 text-white'>
                <p className='text-lg font-semibold'>Professional Excellence</p>
                <p className='text-sm opacity-90'>Inspiring lifelong learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
