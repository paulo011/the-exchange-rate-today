import './App.css'
import {FooterComponent} from './components/footerComponent/footerComponent'
import {HeaderComponent} from './components/headerComponent/headerComponent'

function App() {
  return(
    <>
      <HeaderComponent name={'The exchange rate today'}/>
      <FooterComponent name={'created by: Paulo Ortega'}/>
    </>
  )

}

export default App
