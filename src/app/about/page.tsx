import React from "react";
import { Calendar, Globe, MapPin, Star, GraduationCap, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <section className='py-20 bg-white min-h-screen pt-32'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>About Mr. Gyan Bahadur Karki</h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            A dedicated educator focused on impactful teaching, curriculum development, and academic excellence.
          </p>
        </div>

        <div className='grid lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2 space-y-8'>
            <div className='bg-gray-50 rounded-2xl p-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>Personal Information</h2>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='space-y-4'>
                  <div className='flex items-center space-x-3'>
                    <Calendar className='w-5 h-5 text-blue-600' />
                    <div>
                      <p className='font-semibold text-gray-900'>Date of Birth</p>
                      <p className='text-gray-600'>August 07, 1973</p>
                    </div>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <Globe className='w-5 h-5 text-blue-600' />
                    <div>
                      <p className='font-semibold text-gray-900'>Nationality</p>
                      <p className='text-gray-600'>Nepali</p>
                    </div>
                  </div>
                </div>
                <div className='space-y-4'>
                  <div className='flex items-start space-x-3'>
                    <MapPin className='w-5 h-5 text-blue-600 mt-1' />
                    <div>
                      <p className='font-semibold text-gray-900'>Address</p>
                      <p className='text-gray-600 text-sm'>
                        Akala, Sundarbazar Municipality Ward No. 8, Lamjung
                       
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8'>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>Professional Achievements</h3>
              <div className='grid md:grid-cols-2 gap-4'>
                {[
                  "Chairperson, Academic Quality Committee (2079-2082)",
                  "Coordinator, Curriculum Review Committee (2079-2081)",
                  "Life Member, Nepal Education Council",
                  "Editor in Chief, Education & Research Journal",
                ].map((achievement, index) => (
                  <div key={index} className='flex items-start space-x-3'>
                    <Star className='w-5 h-5 text-blue-600 mt-1 flex-shrink-0' />
                    <p className='text-gray-700'>{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='space-y-8'>
            <div className='bg-gray-900 text-white rounded-2xl p-8'>
              <h3 className='text-xl font-bold mb-6'>Current Occupations</h3>
              <div className='space-y-4'>
                <div className='flex items-start space-x-3'>
                  <GraduationCap className='w-5 h-5 text-blue-400 mt-1' />
                  <div>
                    <p className='font-semibold'>Teacher</p>
                    <p className='text-gray-300 text-sm'>Bharati Sadan Secondary School</p>
                  </div>
                </div>
                <div className='flex items-start space-x-3'>
                  <GraduationCap className='w-5 h-5 text-blue-400 mt-1' />
                  <div>
                    <p className='font-semibold'>Lecturer</p>
                    <p className='text-gray-300 text-sm'>Bhakti Adarsha Multiple Campus</p>
                  </div>
                </div>
               
              </div>
            </div>

            <div className='bg-green-50 rounded-2xl p-8'>
              <h3 className='text-xl font-bold text-gray-900 mb-6'>Languages</h3>
              <div className='space-y-4'>
                <div>
                  <p className='font-semibold text-gray-900'>English</p>
                  <p className='text-gray-600 text-sm'>Good Speaking, Excellent Reading, Good Writing</p>
                </div>
                <div>
                  <p className='font-semibold text-gray-900'>Nepali</p>
                  <p className='text-gray-600 text-sm'>Native</p>
                </div>
                <div>
                  <p className='font-semibold text-gray-900'>Hindi</p>
                  <p className='text-gray-600 text-sm'>Good Speaking, Excellent Reading, Good Writing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
