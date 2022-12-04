import {getQuote} from "../useCase/getQuote";
import { convertCurrencyList } from "../useCase/convertCurrencyList";
import { getExchange } from "../subscribers/getExchange";
import { formatName } from "../utils/formatName";

export const quotationController = async () => {
  const currencyCode: string[] = JSON.parse(localStorage.getItem('listCurrency'));
  console.log(currencyCode)

  let nameList = convertCurrencyList(currencyCode);
  const quotations = await getExchange(currencyCode);
  return await getQuote(nameList, quotations, formatName);
}
