"use client"
import Image from 'next/image';
import React, { useState } from 'react'
const Ques3 = () => {
   const [images, setImages] = useState<string[]>([]);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const imageUrls = Array.from(files).map((file) => URL.createObjectURL(file));
      setImages((prevImages) => [...prevImages, ...imageUrls]);
    }
  };
  return (
      <div className='border border-dashed border-indigo-600 max-w-[500px] rounded-xl p-5'>
         <input
        type="file"
      accept="image/*"
     multiple
        onChange={handleImageChange}
        className="border p-2"
          />
       <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={100}
            height={100}
            alt={`Uploaded Preview ${index + 1}`}
            className="w-full h-24 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  )
}
export default Ques3