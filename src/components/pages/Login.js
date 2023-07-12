import LoginTema from "../LoginTema";
import MainPage from "../MainPage";
import WppBotao from '../WppBotao';


function Login(){

    return(
        <div className="PageLogin">
            <MainPage />
            <div className="tema">
                <h1 className="text-greeny justify-center text-7xl mb-12">Log in</h1>
            </div>
            <LoginTema />
            <WppBotao />
        </div>
    )

}

export default Login;