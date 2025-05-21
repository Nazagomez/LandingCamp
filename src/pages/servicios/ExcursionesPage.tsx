import React from 'react';
import { Button, Carousel } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const ExcursionesPage = () => {
  const excursionImages = [
    {
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
      caption: "Banana Boat Adventures"
    },
    {
      url: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b",
      caption: "Farm Visits"
    },
    {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368",
      caption: "Waterfall Exploration"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Hero Section with Carousel */}
      <div className="h-[60vh] relative">
        <Carousel className="h-full">
          {excursionImages.map((image, index) => (
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

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 -mt-20 relative z-10">
          <h1 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
            Amazing Excursions
          </h1>

          <p className="text-lg text-gray-600 mb-8 text-center">
            Discover the wonders of Nosara through our carefully curated excursions.
            Each adventure is designed to create unforgettable memories while learning
            about nature and local culture.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: "Ocean Adventures",
                items: ["Banana boat and tubing in the ocean", "Visit pink sand island"]
              },
              {
                title: "Mountain Experiences",
                items: ["Poza day (Up in the mountain)", "Slow tubing at the river"]
              },
              {
                title: "Nature Discovery",
                items: ["Visit the bat cave", "Different waterfalls in town"]
              },
              {
                title: "Local Culture",
                items: ["Visit farms (3 diferents farms in town)", "Ostional arribadas"]
              }
            ].map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-800">
                  <MapPin className="inline-block mr-2 h-5 w-5" />
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

export default ExcursionesPage;
