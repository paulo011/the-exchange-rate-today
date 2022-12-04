import {useState} from "react"
import {Props} from "../../types/props";
import './style.css';

export const SelectCurrencies = (props: Props) =>  {
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked(!checked);

  return (
      <label htmlFor={props.code}>
        <input 
          type="checkbox" 
          checked={checked} 
          onChange={handleChange}
          value={checked === true ? 1 : 0}
          name={props.code}
          id={props.code}
          className='checkbox'
        />
        {props.name}
      </label>
  )
}
