import React from 'react';

const ServiceCard = ({ title, description, imageUrl, isReversed }) => (
  <div className={`flex flex-col lg:flex-row ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
    <div className="w-full lg:w-1/2 h-64 lg:h-96">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="w-full lg:w-1/2 bg-white dark:bg-black p-6 flex flex-col justify-center">
      <h2 className="text-4xl font-extrabold text-blue-300 dark:text-blue-300 mb-4 text-center">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300 text-sm text-center">{description}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="w-full">
      <ServiceCard
        title="TRANSPORT POUR LES PARTICULIERS"
        description="Pour profiter d'un transport pour les particuliers à Lyon et ses alentours, n'hesitez pas à contacter ELITE LYON TAXI, nous serions ravi de vous accueillir parmi nous."
        imageUrl="/taxi1.jpg"
        isReversed={false}
      />
      <ServiceCard
        title="TRANSPORT POUR LES PROFESSIONNELS"
        description="Choissisez le confort d'un taxi lors de vos deplacements professionnels."
        imageUrl="/taxi2.jpg"
        isReversed={true}
      />
      <ServiceCard
        title="TRANSPORT SCOLAIRE DOMICILE ÉCOLE"
        description="Notre chauffeur professionnel conduit vos enfants en toutes securités à leurs activités lorsque vous n'êtes pas disponible."
        imageUrl="/taxi3.jpg"
        isReversed={false}
      />
      <ServiceCard
        title="TRANSFERT VERS AÉROPORTS - GARES"
        description="Le taxi est une solution simple, confortable et pratique, qui vous permet de répondre à tous vos besoins de déplacements, qu'ils soient privés ou professionnels, en vous garantissant un service personnalisé et efficace."
        imageUrl="/taxi4.jpg"
        isReversed={true}
      />
    </div>
  );
};

export default Services;