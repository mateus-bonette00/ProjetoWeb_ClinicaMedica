import React from "react";

function MainPage() {
  return (
    <section className="bg-imagemHome flex flex-row w-screen h-screen justify-center">
      <div className="mt-52">
        <h1 className="text-white font-bold text-6xl w-[531px]">
          TRANSFORME SUA SAÚDE!
        </h1>
        <button className="bg-greeny w-[300px] h-[70px] rounded-full mt-4 hover:bg-black text-white text-2xl">
          AGENDE AGORA
        </button>
      </div>
      <div>
        <h2 className="text-white w-[670px] text-4xl mt-52 ml-20">
          Com nossa equipe especializada e técnicas comprovadas,
          ajudamos você superar todos os seus problemas!
        </h2>
      </div>
    </section>
  );
}

export default MainPage;
