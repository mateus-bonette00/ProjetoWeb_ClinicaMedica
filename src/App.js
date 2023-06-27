
// import ButtonSchedule from "./components/ButtonSchedule";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Contato from './components/pages/Contato'
import Cadastro from './components/pages/Cadastro'
import Login from './components/pages/Login'
import SobreNos from './components/pages/SobreNos'

import Layout from './components/containers/Layout'
import Navbar from './components/containers/Navbar'
import Footer from './components/containers/Footer'



function App() {
  return (
    <Router>
    <div>
      <Navbar />
      
      <Layout customClass= 'teste'>
        <Routes>
            
            <Route path='/' element={<Home />} />
            <Route path='/sobrenos' element={<SobreNos/>} />
            <Route path='/contato' element={<Contato />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
            
        </Routes>
      
        
      </Layout>
      
      <Footer />
    </div>
    
  </Router>
   
   
   
   
    // <div className="App">
    //   <header className="App-header"></header>
    //   <body className="flex">
    //     <ButtonSchedule/>
    //   </body>
    // </div>
  );
}

export default App;
