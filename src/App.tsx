import React, { useState } from 'react';
import { Button, Navbar, Carousel, Card, TextInput, Textarea, Footer } from 'flowbite-react';
import { Palmtree as PalmTree, Compass, Palette, UtensilsCrossed, Facebook, Instagram, Twitter } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <Navbar.Link href="#home">Home</Navbar.Link>
          <Navbar.Link href="#services">Services</Navbar.Link>
          <Navbar.Link href="#reserves">Reserves</Navbar.Link>
          <Navbar.Link href="#team">Team</Navbar.Link>
          <Navbar.Link href="#galery">Galery</Navbar.Link>
          <Navbar.Link href="#contact">Contact</Navbar.Link>
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
            <p className="text-xl md:text-2xl mb-8">Aventur, nature and fun for kinds.</p>
            <Button size="xl" color="success" className="animate-bounce">
              Reserver now 
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="transform transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <Compass className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Actividades al aire libre</h3>
                <p>Explora la naturaleza con actividades emocionantes y educativas.</p>
              </div>
            </Card>
            <Card className="transform transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <Palette className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Talleres de arte</h3>
                <p>Desarrolla tu creatividad con materiales naturales y sostenibles.</p>
              </div>
            </Card>
            <Card className="transform transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <PalmTree className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Excursiones guiadas</h3>
                <p>Descubre los secretos de la selva tropical con guías expertos.</p>
              </div>
            </Card>
            <Card className="transform transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <UtensilsCrossed className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Almuerzos saludables</h3>
                <p>Disfruta de comidas nutritivas preparadas con ingredientes locales.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Galería</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              // 'https://images.unsplash.com/photo-1596178067639-0360a0305cf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              // 'https://images.unsplash.com/photo-1596178065352-0d118a8edc91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              // 'https://images.unsplash.com/photo-1596178067862-6a4eac7a2c4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              // 'https://images.unsplash.com/photo-1596178066333-52a1b0dd3b6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            ].map((url, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg transform transition-transform hover:scale-105">
                <img src={url} alt={`Gallery image ${index + 1}`} className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section id="reservas" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">Reservas</h2>
          <form className="space-y-6">
            <div>
              <TextInput
                type="text"
                placeholder="Nombre completo"
                required
              />
            </div>
            <div>
              <TextInput
                type="email"
                placeholder="Correo electrónico"
                required
              />
            </div>
            <div>
              <TextInput
                type="date"
                required
              />
            </div>
            <div>
              <TextInput
                type="number"
                placeholder="Número de personas"
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Actividades de interés"
                required
                rows={4}
              />
            </div>
            <Button type="submit" color="success" className="w-full">
              Enviar reserva
            </Button>
          </form>
        </div>
      </section>

      {/* Staff Section */}
      <section id="equipo" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nuestro Equipo</h2>
          <Carousel>
            {[
              {
                name: 'María González',
                role: 'Directora del Campamento',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                name: 'Carlos Rodríguez',
                role: 'Guía de Aventuras',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                name: 'Ana Martínez',
                role: 'Instructora de Arte',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              }
            ].map((member, index) => (
              <div key={index} className="flex h-full items-center justify-center p-4">
                <Card className="w-full max-w-sm">
                  <div className="flex flex-col items-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mb-4"
                    />
                    <h5 className="text-xl font-bold">{member.name}</h5>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </Card>
              </div>
            ))}
          </Carousel>
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
}

export default App;