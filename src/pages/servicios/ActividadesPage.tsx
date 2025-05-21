import React from 'react';
import { Button, Carousel } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Sun } from 'lucide-react';

const ActividadesPage = () => {
  const activityImages = [
    {
      url: "https://images.unsplash.com/photo-1533321942807-08e4006c2b42",
      caption: "Outdoor Fun"
    },
    {
      url: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902",
      caption: "Nature Activities"
    },
    {
      url: "https://images.unsplash.com/photo-1510779154993-09e7a4f3f908",
      caption: "Adventure Time"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <div className="h-[60vh] relative">
        <Carousel className="h-full">
          {activityImages.map((image, index) => (
            <div key={index} className="relative h-full">
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"/>
              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="text-2xl font-bold">{image.caption}</h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 -mt-20 relative z-10">
          <h1 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
            Outdoor Activities
          </h1>

          <p className="text-lg text-gray-600 mb-8 text-center">
            Adventure and learning come together in our outdoor activities program,
            where children discover nature while having fun and staying active.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: "Beach Activities",
                items: ["Swimming lessons", "Beach games", "Sand castles"]
              },
              {
                title: "Nature Exploration",
                items: ["Bird watching", "Plant identification", "Nature trails"]
              },
              {
                title: "Sports",
                items: ["Team games", "Yoga for kids", "Beach volleyball"]
              },
              {
                title: "Adventure",
                items: ["Treasure hunts", "Obstacle courses", "Mini Olympics"]
              }
            ].map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-800">
                  <Sun className="inline-block mr-2 h-5 w-5" />
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/">
              <Button gradientDuoTone="greenToBlue" size="xl" className="font-semibold">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActividadesPage;
