import React from "react";
import { GraduationCap } from "lucide-react";

const EducationPage = () => {
  return (
    <section className='py-20 bg-white min-h-screen pt-32'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>Education</h1>
          <p className='text-xl text-gray-600'>Academic foundations that shape teaching practice</p>
        </div>

        <div className='max-w-4xl mx-auto'>
          <div className='space-y-8'>
            {[
              {
                degree: "Ph.D. in Education",
                specialization: "Curriculum Studies",
                university: "Tribhuvan University",
                year: "2019",
                level: "Doctoral",
              },
              {
                degree: "M.Ed.",
                specialization: "Educational Leadership",
                university: "Tribhuvan University",
                year: "1999",
                level: "Masters",
              },
              {
                degree: "MA",
                specialization: "Political Science",
                university: "Tribhuvan University",
                year: "2000",
                level: "Masters",
              },
              {
                degree: "B.Ed.",
                specialization: "Education Studies",
                university: "Tribhuvan University",
                year: "1996",
                level: "Bachelor",
              },
            ].map((education, index) => (
              <div key={index} className='bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow'>
                <div className='flex items-start justify-between'>
                  <div className='flex items-start space-x-4'>
                    <div className='w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0'>
                      <GraduationCap className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='text-xl font-bold text-gray-900'>{education.degree}</h3>
                      <p className='text-blue-600 font-semibold'>{education.specialization}</p>
                      <p className='text-gray-600'>{education.university}</p>
                    </div>
                  </div>
                  <div className='text-right'>
                    <div className='inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium'>
                      {education.year}
                    </div>
                    <p className='text-gray-500 text-sm mt-1'>{education.level}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationPage;
