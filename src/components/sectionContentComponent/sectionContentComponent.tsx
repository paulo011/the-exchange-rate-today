import {useEffect, useState} from 'react';
import {Currency} from '../../types/currency';
import {ButtonComponent} from '../buttonComponent/buttonComponent';
import {CardComponent} from '../cardComponent/cardComponent';
import './style.css';
import {quotationController} from '../../controllers/quotationController';

export const SectionContentComponent = () => {
  let [currency, setCurrency] = useState<Currency[]>([]);

  useEffect(()=>{
    quotationController().then((element)=> setCurrency(element))
  }),[currency]

  return(
    <section className='section-content-component'>
      <div className='content'>
        <>
         {currency.map(element => {
          return <CardComponent key={element.name} name={element.name} bid={element.bid} ask={element.ask} pctChange={element.pct}  />
          })}
        </>
     </div>
      <p className='fild-text-section'>Choose which coins you want to see</p>
      <ButtonComponent name='Select'/>
    </section>
  )
}
