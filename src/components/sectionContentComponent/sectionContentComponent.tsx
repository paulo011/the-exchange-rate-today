import {useEffect, useState} from 'react';
import {getQuote} from '../../useCase/getQuote';
import {Currency} from '../../types/currency';
import {ButtonComponent} from '../buttonComponent/buttonComponent';
import {CardComponent} from '../cardComponent/cardComponent';
import './style.css';

export const SectionContentComponent = () => {
  let [currency, setCurrency] = useState<Currency[]>([]);

  useEffect(()=>{
    getQuote().then((element)=> setCurrency(element))
  }),[]

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
