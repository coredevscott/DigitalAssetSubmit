import React from 'react'
export default function Gallery() {
    const images = [
        require("../assets/m1.jpg"),
        require("../assets/m2.jpg"),
        require("../assets/m3.jpg"),
        require("../assets/m4.jpg"),
        require("../assets/m5.png"),
        require("../assets/m6.jpg"),
    ]
    return (
      <div>
            <h1 class="title-font text-center sm:text-4xl text-3xl mb-4 font-medium text-[#F9B624]"> 
                INTERNAL MEMES
        </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 px-10">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Gallery Image ${index + 1}`}
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    ))}
                </div>
        </div>
    );
}
