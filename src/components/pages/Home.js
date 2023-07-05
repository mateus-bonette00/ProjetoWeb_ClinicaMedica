import LocalMap from "../LocalMap"
import MainPage from "../MainPage"
import SobreNosSection from "../SobreNosSection"

function Home (){
    return (
        <div>
            <MainPage/>
            <SobreNosSection/>
            <LocalMap/>
        </div>
            
    )
}

export default Home