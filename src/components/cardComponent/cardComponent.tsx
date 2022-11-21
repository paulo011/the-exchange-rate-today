import './style.css';
import { Props } from '../../types/props';

export const CardComponent = (props: Props) => {
  return (
    <div className='card-wrap'>
      <div className='card-header'>
        <p>{props.name}</p>
      </div>
      <div className='fild-content'>
        <div className='price-content'>
          <p className='price-title'>Buy</p>
          <p className='price'>R$:{props.bid}</p>
          <p className='price-title'>Sell</p>
          <p className='price'>R$:{props.ask}</p>
        </div>
        <div className='variation'>
          <p>{props.pctChange}</p>
          <p className='percentage'>%</p>
        </div>
      </div>
   </div>
 )
}
