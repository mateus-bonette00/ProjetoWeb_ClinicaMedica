import React, { useState } from "react";
import Card from "./Card";

const Carousel = ({ cards }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleNext = () => {
    setCurrentCard((currentCard + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentCard((currentCard - 1 + cards.length) % cards.length);
  };

  return (
    <div className="bg-greeny">
      <div>
        <h1 className="mt-8 flex justify-center items-center text-white text-7xl pt-10">NOSSOS MÉDICOS</h1>
      </div>
      <div className="flex flex-row justify-center items-center bg-greeny w-screen h-[500px]">
        <button
          className="prev-button text-white text-7xl"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <div className="flex space-x-4">
          {cards
            .slice(currentCard, currentCard + 3)
            .map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                imagePath={card.imagePath}
              />
            ))}
        </div>
        <button
          className="prev-button text-white text-7xl"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
