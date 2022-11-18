import {ButtonComponent} from '../buttonComponent/buttonComponent';
import {CardComponent} from '../cardComponent/cardComponent';
import {TableComponent} from '../tableComponent/tableComponent';
import './style.css';

export const SectionContentComponent = () => {

  return(
    <section className='section-content-component'>
      <div className='content'>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      </div>
      <p className='fild-text-section'>Choose which coins you want to see</p>
      <ButtonComponent name='Select'/>
    </section>
  )
}
