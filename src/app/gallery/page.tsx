import React from "react";
import { Image } from "lucide-react";
import galleryImages from "@/data/gallery_images.json";

const GalleryPage = () => {
  return (
    <section className='py-20 bg-gray-50 min-h-screen pt-32'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>Gallery</h1>
          <p className='text-xl text-gray-600'>Professional moments and achievements</p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className='group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300'
            >
              <div className='w-full h-96 overflow-hidden'>
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                />
              </div>

              <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>
          ))}
        </div>

        <div className='mt-16 text-center'>
          <div className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full'>
            <Image className='w-5 h-5 mr-2' />
            <span className='font-semibold'>Professional moments captured</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;