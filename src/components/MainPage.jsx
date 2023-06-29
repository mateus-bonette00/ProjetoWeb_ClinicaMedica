import React from "react";

function MainPage() {
  return (
    <section className="bg-slate-600 flex flex-row w-screen h-96 justify-center">
      <div className=" mt-40 ml-36">
        <h1 className="text-white font-bold text-3xl">TRANSFORME <br></br>SUA SAÚDE!</h1>
        <button className="bg-greeny w-60 h-12 rounded-full mt-4 hover:bg-black text-white">
          AGENDE AGORA
        </button>
      </div>
      <div className="">
        <h2 className="text-white mt-40 ml-44 text-xl ">
          Com nossa equipe especializada e técnicas comprovadas,<br></br>
          ajudamos você superar todos os seus problemas!
        </h2>
      </div>
    </section>
  );
}

export default MainPage;
