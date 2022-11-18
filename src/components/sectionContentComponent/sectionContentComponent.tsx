import {ButtonComponent} from '../buttonComponent/buttonComponent';
import {TableComponent} from '../tableComponent/tableComponent';
import './style.css';

export const SectionContentComponent = () => {

  return(
    <section className='section-content-component'>
      <TableComponent/>
      <p>Choose which coins you want to see</p>
      <ButtonComponent name='Select'/>
    </section>
  )
}
