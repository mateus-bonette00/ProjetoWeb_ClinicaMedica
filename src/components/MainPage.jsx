import React from "react";

function MainPage() {
  return (
    <section className="bg-imagemHome flex flex-col w-screen h-screen lg:flex-row">
      <div className="flex flex-col justify-center mt-64 lg:mt-0 lg:ml-32">
        <h1 className="text-white font-bold text-2xl text-center lg:text-7xl lg:w-[550px] lg:text-left lg:mb-12 lg:mt-10">
          TRANSFORME SUA SAÚDE!
        </h1>
        <a href="https://api.whatsapp.com/send?phone=5535998183459">
          <button className="bg-greeny w-[300px] h-[70px] rounded-full mt-4 hover:bg-black text-white text-2xl ml-10 lg:ml-0 lg:mt-0">
            AGENDE AGORA
          </button>
        </a>
      </div>
      <div>
        <h2 className="text-white w-[300px] text-2xl mt-10 text-left ml-10 lg:mt-52 lg:text-4xl lg:w-[450px] lg:ml-36">
          Com nossa equipe especializada e técnicas comprovadas,
          ajudamos você a superar todos os seus problemas!
        </h2>
      </div>
    </section>
  );
}

export default MainPage;

