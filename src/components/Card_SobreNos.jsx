import React from 'react';

const Card = ({ title, imagePath, description }) => {
  return (
    <div>
      <img src={imagePath} className="mx-auto mb-4 object-cover" alt='imagem de médico' />
    
    </div>
  );
};

export default Card;
