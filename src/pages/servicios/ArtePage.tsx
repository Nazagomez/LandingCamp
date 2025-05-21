import React from 'react';
import { Button, Carousel } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Palette } from 'lucide-react';

const ArtePage = () => {
  const artImages = [
    {
      url: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b",
      caption: "Art Workshop"
    },
    {
      url: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2",
      caption: "Creative Time"
    },
    {
      url: "https://images.unsplash.com/photo-1499892477393-f675706cbe6e",
      caption: "Painting Sessions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="h-[60vh] relative">
        <Carousel className="h-full">
          {artImages.map((image, index) => (
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
          <h1 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Creative Art Activities
          </h1>

          <p className="text-lg text-gray-600 mb-8 text-center">
            Art activities are creative experiences that allow children to explore their imagination and 
            express their feelings through different forms of art. These activities can include drawing, painting, crafting with various materials, sculpting with clay, and creating collages.

            They help develop fine motor skills, encourage self-expression, and build confidence. 
            Art activities also teach children to observe details, make decisions, and appreciate the beauty in their surroundings. Each session is designed to be fun, relaxing, and educational—allowing kids to create freely in a supportive and inspiring environment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: "Wood Crafts",
                items: ["Sustainable materials", "Basic woodworking", "Creative designs"]
              },
              {
                title: "Culinary Arts",
                items: ["Healthy cooking", "Local ingredients", "Fun recipes"]
              },
              {
                title: "Painting & Drawing",
                items: ["Different techniques", "Color theory", "Free expression"]
              },
              {
                title: "Mixed Media",
                items: ["Collage making", "Natural materials", "Recycled art"]
              }
            ].map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-purple-800">
                  <Palette className="inline-block mr-2 h-5 w-5" />
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
              <Button gradientDuoTone="purpleToPink" size="xl" className="font-semibold">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtePage;
