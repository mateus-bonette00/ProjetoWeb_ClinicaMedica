import LoginTema from "../LoginTema";
import MainPage from "../MainPage";
import WppBotao from '../WppBotao';


function Login(){

    return(
        <div className="PageLogin">
            <MainPage />
            <LoginTema />
            <WppBotao />
        </div>
    )

}

export default Login;