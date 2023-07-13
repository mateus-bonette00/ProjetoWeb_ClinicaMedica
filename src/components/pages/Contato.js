import ContatoTema from "../ContatoTema";
import MainPageContato from "../MainPage_Contato";
import WppBotao from '../WppBotao';

function Contato (){
    return (
        <div className="PageContato">
          <MainPageContato />
          <div className="tema">
            <h1 className="text-greeny justify-center text-7xl mb-12 mt-20">Contato</h1>
            <h2 className="textoContato">Estamos sempre disponíveis para responder quaisquer dúvidas ou sugestões!</h2>
          </div>
          <ContatoTema />
          <WppBotao />
        
        </div>
      );
    }


export default Contato