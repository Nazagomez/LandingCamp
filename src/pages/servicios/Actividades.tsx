import React from 'react';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Actividades = () => {
  return (
    <div className="min-h-screen p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Outdoor activities</h1>
        <img 
          src="https://images.unsplash.com/photo-1541580621-39f717ce77cd" 
          alt="Actividades al aire libre" 
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
Our outdoor activities are designed to help children connect with nature while having fun and learning. 
           In a safe and supervised environment, campers take part in games, explorations, and workshops that 
           stimulate their curiosity, creativity, and physical skills.       </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Actividades incluidas:</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Senderismo guiado</li>
            <li>Observación de aves</li>
            <li>Juegos de orientación</li>
            <li>Actividades deportivas</li>
          </ul>
          <Link to="/">
            <Button color="success">Volver al inicio</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Actividades;
