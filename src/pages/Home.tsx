import React, { useState } from 'react';
import { Button, Navbar, Carousel, Card, TextInput, Textarea, Footer } from 'flowbite-react';
import { Palmtree as PalmTree, Compass, Palette, UtensilsCrossed, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <Navbar fluid className="fixed w-full z-50 bg-white/95 border-b">
        <Navbar.Brand href="/">
          <PalmTree className="text-primary-600 h-8 w-8 mr-2" />
          <span className="self-center text-xl font-semibold whitespace-nowrap">Nosara Day Camp</span>
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setIsMenuOpen(!isMenuOpen)} />
        <Navbar.Collapse className={isMenuOpen ? 'show' : ''}>
          <Navbar.Link onClick={() => scrollToSection('inicio')}>Home</Navbar.Link>
          <Navbar.Link onClick={() => scrollToSection('servicios')}>Services</Navbar.Link>
          <Navbar.Link onClick={() => scrollToSection('reservas')}>Reserves</Navbar.Link>
          <Navbar.Link onClick={() => scrollToSection('equipo')}>Team</Navbar.Link>
          <Navbar.Link onClick={() => scrollToSection('galeria')}>Gallery</Navbar.Link>
          <Navbar.Link onClick={() => scrollToSection('contacto')}>Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      {/* Hero Section */}
      <section id="inicio" className="pt-16">
        <div className="relative h-screen flex items-center justify-center text-white"
             style={{
               backgroundImage: 'url("https://images.unsplash.com/photo-1499002238440-d264edd596ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
             }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">¡Welcome to Nosara Day Camp!</h1>
            <p className="text-xl md:text-2xl mb-8">Aventure, nature and fun for kinds.</p>
            <Button size="xl" color="success" className="animate-bounce">
              Reserver now 
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-600 font-medium">Our Services</span>
            <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg">Discover all the amazing activities and experiences we offer</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Compass className="h-12 w-12 text-primary-600" />,
                title: "Outdoor activities",
                description: "Explore nature with exciting and educational activities.",
                link: "/servicios/actividades",
                color: "from-blue-500 to-green-500"
              },
              {
                icon: <Palette className="h-12 w-12 text-primary-600" />,
                title: "Art workshops",
                description: "Develop your creativity with natural and materials.",
                link: "/servicios/arte",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <PalmTree className="h-12 w-12 text-primary-600" />,
                title: "Guided tours",
                description: "Discover the secrets of the rainforest with expert guides.",
                link: "/servicios/excursiones",
                color: "from-green-500 to-teal-500"
              },
              {
                icon: <UtensilsCrossed className="h-12 w-12 text-primary-600" />,
                title: "Healthy lunches",
                description: "Enjoy nutritious meals prepared with local ingredients.",
                link: "/servicios/almuerzos",
                color: "from-orange-500 to-yellow-500"
              }
            ].map((service, index) => (
              <Link key={index} to={service.link}>
                <Card className="transform transition-all hover:scale-105 cursor-pointer group h-full">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="mt-auto">
                      <span className={`inline-flex items-center px-4 py-2 rounded-full text-white bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                        View Details →
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What to Pack Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-600 font-medium">Be Prepared</span>
            <h2 className="text-4xl font-bold mb-4">What to Pack for Camp</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg">Everything your child needs for a fun and safe day at camp</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Beach Essentials",
                icon: "🏖️",
                items: [
                  { emoji: "🏊‍♂️", text: "Bathing suits" },
                  { emoji: "🧖‍♂️", text: "Towels" }
                ],
                color: "bg-blue-50 border-blue-200"
              },
              {
                title: "Protection",
                icon: "🛡️",
                items: [
                  { emoji: "☀️", text: "Sunscreen" },
                  { emoji: "🦟", text: "Bug spray" },
                  { emoji: "🧢", text: "Hat" }
                ],
                color: "bg-green-50 border-green-200"
              },
              {
                title: "Footwear",
                icon: "👟",
                items: [
                  { emoji: "👡", text: "Water shoes or Crocs" }
                ],
                color: "bg-orange-50 border-orange-200"
              }
            ].map((category, idx) => (
              <div key={idx} className={`rounded-2xl ${category.color} border p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl`}>
                <div className="text-4xl mb-6 text-center">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
                <ul className="space-y-4">
                  {category.items.map((item, index) => (
                    <li key={index} className="flex items-center bg-white/50 rounded-lg p-3 transition-all hover:bg-white">
                      <span className="text-2xl mr-3">{item.emoji}</span>
                      <span className="text-gray-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-medium">Memories</span>
            <h2 className="text-4xl font-bold mb-4">Our Gallery</h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full mb-6"></div>
          </div>
          
          {/* Carrusel Principal */}
          <div className="mb-12">
            <Carousel className="h-96 rounded-xl overflow-hidden">
              {[
                {
                  url: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902',
                  caption: 'Kids Having Fun at Camp'
                },
                {
                  url: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0',
                  caption: 'Beach Activities'
                },
                {
                  url: 'https://images.unsplash.com/photo-1486278073230-b3ec6b6c3e9f',
                  caption: 'Nature Discovery'
                },
                {
                  url: 'https://images.unsplash.com/photo-1488684430052-f2d92fb178c2',
                  caption: 'Art & Creativity'
                }
              ].map((item, index) => (
                <div key={index} className="relative h-full">
                  <img
                    src={`${item.url}?auto=format&fit=crop&w=1600&q=80`}
                    alt={item.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-6 left-6 text-white text-2xl font-bold">
                    {item.caption}
                  </h3>
                </div>
              ))}
            </Carousel>
          </div>

          {/* Cuadrícula de Imágenes */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                url: 'https://images.unsplash.com/photo-1488684430052-f2d92fb178c2',
                caption: 'Arte y Manualidades'
              },
              {
                url: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902',
                caption: 'Actividades al Aire Libre'
              },
              {
                url: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0',
                caption: 'Diversión en la Playa'
              },
              {
                url: 'https://images.unsplash.com/photo-1486278073230-b3ec6b6c3e9f',
                caption: 'Exploración Natural'
              },
              {
                url: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527',
                caption: 'Juegos Grupales'
              },
              {
                url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368',
                caption: 'Aventuras'
              },
              {
                url: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054',
                caption: 'Naturaleza'
              },
              {
                url: 'https://images.unsplash.com/photo-1472898965229-f9b06b9c9bbe',
                caption: 'Diversión'
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              >
                <img 
                  src={`${item.url}?auto=format&fit=crop&w=600&q=80`}
                  alt={item.caption} 
                  className="w-full h-full object-cover transform transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors">
                  <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-4 left-4 font-semibold">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section id="equipo" className="py-20 bg-gradient-to-br from-rose-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-rose-600 font-medium">Meet Us</span>
            <h2 className="text-4xl font-bold mb-4">Our Team</h2>
            <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg">Meet our amazing staff who make the magic happen</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Cinthya Rosales',
                role: 'Camp Director',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
                description: 'With over 10 years of experience in child education and outdoor activities.',
                specialties: ['Child Development', 'Program Planning', 'Safety & First Aid']
              },
              {
                name: 'Matias Serrano',
                role: 'Adventure Guide',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
                description: 'Expert in outdoor activities and nature conservation.',
                specialties: ['Hiking', 'Marine Biology', 'Environmental Education']
              },
              {
                name: 'Ines Rosales',
                role: 'Art Instructor',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
                description: 'Creative artist specialized in teaching children various art techniques.',
                specialties: ['Painting', 'Crafts', 'Sustainable Art']
              },
              {
                name: 'Wilberth Serrano',
                role: 'Safety Coordinator',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
                description: 'Ensures all activities meet safety standards and protocols.',
                specialties: ['First Aid', 'Risk Management', 'Emergency Response']
              },
              {
                name: 'Emily Rosales',
                role: 'Kids Activity Coordinator',
                image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce',
                description: 'Specializes in creating engaging activities for children of all ages.',
                specialties: ['Group Activities', 'Child Psychology', 'Educational Games']
              },
              {
                name: 'Laura Rosales',
                role: 'Wellness Instructor',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
                description: 'Focuses on children\'s health and well-being through various activities.',
                specialties: ['Nutrition', 'Yoga for Kids', 'Mindfulness']
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="relative h-64">
                  <img
                    src={`${member.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <p className="text-rose-200">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-700">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span 
                          key={idx}
                          className="bg-rose-100 text-rose-800 text-sm px-3 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Reservation Form */}
      <section id="reservas" className="py-20 bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-teal-600 font-medium">Join Us</span>
            <h2 className="text-4xl font-bold mb-4">Book Your Adventure</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600">Start your journey with us today</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <TextInput
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <TextInput
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Date</label>
                  <TextInput
                    type="date"
                    required
                    className="w-full rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Number of Children</label>
                  <TextInput
                    type="number"
                    placeholder="1"
                    min="1"
                    required
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Activities of Interest</label>
                <Textarea
                  placeholder="Tell us what activities interest you..."
                  required
                  rows={3}
                  className="w-full rounded-xl"
                />
              </div>
              <Button gradientDuoTone="greenToBlue" className="w-full rounded-xl py-3">
                Reserve Now
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section id="recomendaciones" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-medium">Feedback</span>
            <h2 className="text-4xl font-bold mb-4">Share Your Experience</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300">
            <form className="space-y-8">
              <div className="text-center">
                <p className="text-gray-600 mb-6">How was your experience?</p>
                <div className="flex justify-center gap-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="text-4xl transform hover:scale-125 transition-transform duration-200 focus:outline-none"
                    >
                      {star <= 3 ? "⭐" : "⭐"}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <Textarea
                  className="w-full rounded-xl"
                  placeholder="Tell us about your experience..."
                  required
                  rows={4}
                />
              </div>

              <Button gradientDuoTone="purpleToBlue" className="w-full rounded-xl py-3">
                Send Feedback
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer container className="bg-gray-900">
        <div className="container mx-auto">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="space-y-4 mb-8">
              <Footer.Brand
                href="/"
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Nosara Day Camp Logo"
                name="Nosara Day Camp"
              />
              <div className="text-gray-400">
                <p>Playa Nosara, Guanacaste</p>
                <p>Costa Rica</p>
                <p>Tel: +506 2222-3333</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="Síguenos" />
                <Footer.LinkGroup col>
                  <div className="flex gap-4">
                    <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                    <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                    <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                  </div>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <Footer.Copyright
            href="#"
            by="Nosara Day Camp™"
            year={2024}
          />
        </div>
      </Footer>
    </div>
  );
};

export default Home;