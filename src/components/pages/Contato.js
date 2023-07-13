import ContatoTema from "../ContatoTema";
import MainPageContato from "../MainPage_Contato";
import WppBotao from '../WppBotao';

function Contato (){
    return (
        <div className="PageContato">
          <MainPageContato />
          <h1>Contato</h1>
          <h2>Estamos sempre disponíveis para responder quaisquer dúvidas ou sugestões!</h2>
          <ContatoTema />
          <WppBotao />
        
        </div>
      );
    }


export default Contato