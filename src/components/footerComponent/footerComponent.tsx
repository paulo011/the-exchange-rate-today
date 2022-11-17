import './styles.css';
import { Props } from '../../types/props';

export const FooterComponent = (props: Props) => {
  return (
    <footer>{props.name}</footer>
  )
}
