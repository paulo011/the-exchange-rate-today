import './style.css';
import { Props } from '../../types/props';

export const HeaderComponent = (props: Props) => {
  return (
    <div className='HeaderComponentWarp'>
      <header>
        <h1 className="HeaderComponent">
        {props.name}
        </h1>
      </header>
    </div>
  );
};
