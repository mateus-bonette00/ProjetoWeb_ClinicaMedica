import ContatoTema from "../ContatoTema";
import MainPageContato from "../MainPage_Contato";
import WppBotao from '../WppBotao';

function Contato (){
    return (
        <div className="PageContato mb-12">
          <MainPageContato />
<<<<<<< HEAD
          <div className="tema">
            <h1 className="text-greeny justify-center text-7xl mb-5 mt-20">Contato</h1>
            <h2 className="textoContato">Estamos sempre disponíveis para responder quaisquer dúvidas ou sugestões!</h2>

          </div>
=======
          <h1 className="mt-10">Contato</h1>
          <h2>Estamos sempre disponíveis para responder quaisquer dúvidas ou sugestões!</h2>
>>>>>>> 52a006f53752fdcb7350af0c1bc1d733e15a0b2b
          <ContatoTema />
          <WppBotao />
        
        </div>
      );
    }


export default Contato