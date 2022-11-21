import './App.css'
import {FooterComponent} from './components/footerComponent/footerComponent'
import {HeaderComponent} from './components/headerComponent/headerComponent'
import {SectionContentComponent} from './components/sectionContentComponent/sectionContentComponent'

function App() {

  return(
    <>
      <HeaderComponent name={'The exchange rate today'}/>
      <SectionContentComponent/>
      <FooterComponent name={'created by: Paulo Ortega'}/>
    </>
  )

}

export default App
