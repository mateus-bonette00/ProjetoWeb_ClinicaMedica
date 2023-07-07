import LocalMap from "../LocalMap";
import MainPage from "../MainPage";
import Carousel from "../Carousel";
import SobreNosSection from "../SobreNosSection";
import medicoImage from '../img/medico.jpg'

const cards = [
  {
    title: "DR. GILBERTO AZEVEDO",
    imagePath: medicoImage,
    description: "ENDÓCRINO"
  },
  {
    title: "DR. GILBERTO AZEVEDO",
    imagePath: medicoImage,
    description: "ENDÓCRINO"
  },
  {
    title: "DR. GILBERTO AZEVEDO",
    imagePath: medicoImage,
    description: "ENDÓCRINO"
  },
  
  // Outros cards...
];

function Home() {
  return (
    <div>
      <MainPage />
      <SobreNosSection />
      <Carousel cards={cards} />
      <LocalMap />
    </div>
  );
}

export default Home;
