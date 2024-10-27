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
        title={<span className="text-2xl font-bold tracking-tight">TRANSPORT POUR LES PARTICULIERS</span>}
        description={
          <p className="font-normal tracking-wide">
            Pour profiter d'un transport pour les particuliers à Lyon et ses alentours, n'hesitez pas à contacter ELITE LYON TAXI, nous serions ravi de vous accueillir parmi nous.
          </p>
        }
        imageUrl="/taxi1.jpg"
        isReversed={false}
      />
      <ServiceCard
        title={<span className="text-2xl font-bold tracking-tight">TRANSPORT POUR LES PROFESSIONNELS</span>}
        description={
          <p className="font-normal tracking-wide">
            Choissisez le confort d'un taxi lors de vos deplacements professionnels.
          </p>
        }
        imageUrl="/taxi2.jpg"
        isReversed={true}
      />
      <ServiceCard
        title={<span className="text-2xl font-bold tracking-tight">TRANSPORT SCOLAIRE DOMICILE ÉCOLE</span>}
        description={
          <p className="font-normal tracking-wide">
            Notre chauffeur professionnel conduit vos enfants en toutes securités à leurs activités lorsque vous n'êtes pas disponible.
          </p>
        }
        imageUrl="/taxi3.jpg"
        isReversed={false}
      />
      <ServiceCard
        title={<span className="text-2xl font-bold tracking-tight">TRANSFERT VERS AÉROPORTS - GARES</span>}
        description={
          <p className="font-normal tracking-wide">
            Le taxi est une solution simple, confortable et pratique, qui vous permet de répondre à tous vos besoins de déplacements, qu'ils soient privés ou professionnels, en vous garantissant un service personnalisé et efficace.
          </p>
        }
        imageUrl="/taxi4.jpg"
        isReversed={true}
      />
    </div>
  );
};

export default Services;