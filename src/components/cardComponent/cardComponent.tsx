import './style.css';
import { Props } from '../../types/props';

export const CardComponent = (props: Props) => {
  return (
    <div className='card-wrap'>
      <div className='card-header'>
        <p>Dólar Comercial</p>
      </div>
      <div className='fild-content'>
        <div className='price-content'>
          <p className='price-title'>Buy</p>
          <p className='price'>R$:75.343.342</p>
          <p className='price-title'>Sell</p>
          <p className='price'>R$:75.343.342</p>
        </div>
        <div className='variation'>
          <p>+0.43</p>
          <p className='percentage'>%</p>
        </div>
      </div>
   </div>
 )
}
