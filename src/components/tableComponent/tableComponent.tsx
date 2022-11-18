import './style.css';
import { Props } from '../../types/props';

export const TableComponent = (props: Props) => {
  return (
    <table className='table-warp'>
      <tr className='table-header-row'>
        <th className='table-header'>{'Moeda'}</th>
        <th className='table-header'>{'variação'}</th>
        <th className='table-header'>{'Cotação'}</th>
      </tr>
      <tr className='table-row'>
        <td className='table-data'>Dolar</td>
        <td className='table-data'>0.43%</td>
        <td className='table-data'>R$ 5.543</td>
      </tr>
      <tr className='table-row'>
        <td className='table-data'>Dolar</td>
        <td className='table-data'>0.43%</td>
        <td className='table-data'>R$ 5.543</td>
      </tr>
     <tr className='table-row'>
        <td className='table-data'>Dolar</td>
        <td className='table-data'>0.43%</td>
        <td className='table-data'>R$ 5.543</td>
      </tr>
     <tr className='table-row'>
        <td className='table-data'>Dolar</td>
        <td className='table-data'>0.43%</td>
        <td className='table-data'>R$ 5.543</td>
      </tr>
      <tr className='table-row'>
        <td className='table-data'>Dolar comercia</td>
        <td className='table-data'>0.43%</td>
        <td className='table-data'>R$ 5.543</td>
      </tr>
    </table>
  )
}
