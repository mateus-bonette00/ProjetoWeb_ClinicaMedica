import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body className="flex">
        <section className="flex flex-row flex-wrap">
          <div>
            <h1>TRANSFORME SUA SAÚDE!</h1>
            <h1>TRANSFORME SEU NODA!</h1>

            <button className="w-48 h-12 bg-green-500 border-solid rounded-full">
              AGENDE AGORA
            </button>
          </div>
          <div>
            <p className="w-1/3 text-left">
              Com nossa equipe especializada e técnicas comprovadas,
              ajudamos você superar todos os seus problemas!
            </p>
          </div>
        </section>
      </body>
    </div>
  );
}

export default App;
