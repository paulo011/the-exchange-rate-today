import {useEffect, useState} from 'react';
import {Currency} from '../../types/currency';
import {CardComponent} from '../cardComponent/cardComponent';
import {quotationController} from '../../controllers/quotationController';
import {SelectCurrencies} from '../selectCurrencies/selectCurrencies';
import {listCurrencySelect} from '../../utils/listCurrencySelect';
import {setCurrenciesList} from '../../useCase/setCurrenciesList';
import './style.css';

export const SectionContentComponent = () => {
  const [condition, setCondition] = useState<boolean>(true);
  let [currency, setCurrency] = useState<Currency[]>([]);

  const contentSection = {
    card(currency: Currency[]){
      return( currency.map(element => {
        return <CardComponent 
          key={element.name} 
          name={element.name} 
          bid={element.bid} 
          ask={element.ask} 
          pctChange={element.pct}
          />
        })
      )
    },

    options() {
      return (
        <form className="wrap-checkbox">
        {listCurrencySelect.map(element => 
          <SelectCurrencies
            key={element.code}
            name={element.name}
            code={element.code}
            />
          )}
          <input
            onClick={() => setCurrenciesList()}
            className='button-component button-select' 
            type="submit" 
            value="Select"
          />
        </form>
      )
    }
  };

  useEffect(()=> {
    quotationController().then((element)=> setCurrency(element))
  }, [condition]);


  return(
    <section className='section-content-component'>
      <div className='content'>
        <>
          {
            condition === true 
              ? contentSection.card(currency)
              : contentSection.options()
          }
        </>
     </div>
      <p
      className='fild-text-section'>
        {
          condition === true 
            ? 'Choose which coins you want to see' 
            : 'The maximum number of choices is 6'
        }
      </p>
      <button 
        onClick={()=> {setCondition((condition) => !condition)}}
        type='submit'
        className='button-component button-main'>
        {condition === true ? 'Select':'Back'}
      </button>
    </section>
  );
};
