import React from 'react';
import { Button, Carousel } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Utensils } from 'lucide-react';

const AlmuerzosPage = () => {
  const foodImages = [
    {
      url: "https://images.unsplash.com/photo-1490818387583-1baba5e638af",
      caption: "Healthy Meals"
    },
    {
      url: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
      caption: "Fresh Ingredients"
    },
    {
      url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      caption: "Delicious Food"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      <div className="h-[60vh] relative">
        <Carousel className="h-full">
          {foodImages.map((image, index) => (
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
          <h1 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-600">
            Healthy & Delicious Meals
          </h1>

          <p className="text-lg text-gray-600 mb-8 text-center">
            Nutritious and delicious meals prepared with local ingredients, 
            designed to fuel your children's adventures while teaching them 
            about healthy eating habits.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: "Fresh Fruits",
                items: ["Local tropical fruits", "Natural smoothies", "Fruit salads"]
              },
              {
                title: "Main Courses",
                items: ["Balanced meals", "Local recipes", "Vegetarian options"]
              },
              {
                title: "Healthy Snacks",
                items: ["Energy bars", "Fresh vegetables", "Natural drinks"]
              },
              {
                title: "Special Diets",
                items: ["Gluten-free options", "Allergen-free meals", "Vegan choices"]
              }
            ].map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-orange-800">
                  <Utensils className="inline-block mr-2 h-5 w-5" />
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
              <Button gradientDuoTone="greenToYellow" size="xl" className="font-semibold">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlmuerzosPage;
