import React from "react";
import { ArrowRight, Award, BookOpen, Users } from "lucide-react";

const ExperiencePage = () => {
  return (
    <section className='py-20 bg-gray-50 min-h-screen pt-32'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>Teaching Experience</h1>
          <p className='text-xl text-gray-600'>Extensive expertise across academic instruction and mentoring</p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12'>
          <div className='space-y-8'>
            <div className='bg-white rounded-2xl p-8 shadow-lg'>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>Teaching Highlights</h2>
              <div className='space-y-4'>
                {[
                  "Design and delivery of undergraduate and graduate courses",
                  "Curriculum development and academic quality assurance",
                  "Student mentoring and research supervision",
                  "Workshop facilitation and guest lectures",
                  "Assessment design and learning outcomes planning",
                  "Academic advising and career guidance",
                ].map((qualification, index) => (
                  <div key={index} className='flex items-start space-x-3'>
                    <ArrowRight className='w-5 h-5 text-blue-600 mt-1 flex-shrink-0' />
                    <p className='text-gray-700'>{qualification}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='space-y-8'>
            <div className='bg-white rounded-2xl p-8 shadow-lg'>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>Professional Development</h3>
              <div className='space-y-6'>
                {[
                  { title: "Teaching Methodologies", year: "2023", type: "Faculty Development" },
                  { title: "Outcome-Based Education", year: "2023", type: "Academic Workshop" },
                  { title: "Research Mentorship", year: "2022", type: "Professional Training" },
                  { title: "Educational Leadership", year: "2021", type: "Leadership Program" },
                ].map((training, index) => (
                  <div key={index} className='border-l-4 border-blue-600 pl-4'>
                    <h4 className='font-semibold text-gray-900'>{training.title}</h4>
                    <p className='text-sm text-gray-600'>
                      {training.type} • {training.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
