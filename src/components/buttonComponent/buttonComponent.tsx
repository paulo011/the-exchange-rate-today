import './styles.css';
import { Props } from '../../types/props';

export const ButtonComponent = (props: Props) => {
  return (
    <button type='submit' className='button-component'>{props.name}</button>
  )
}
