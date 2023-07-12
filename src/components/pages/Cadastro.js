import MainPage from "../MainPage";
import CadastroTema from "../CadastroTema"
import WppBotao from '../WppBotao';

function Cadastro (){
    return (
    <div className="PageCadastro">
        <MainPage />
        <div className="tema">
            <h1 className="text-greeny justify-center text-7xl mb-12">Cadastro</h1>
        </div>
        <CadastroTema />
        <WppBotao />
        
    </div>
    )
}

export default Cadastro