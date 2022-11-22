import {getQuote} from "../useCase/getQuote";
import { convertCurrencyList } from "../useCase/convertCurrencyList";
import { getExchange } from "../subscribers/getExchange";
import { formatName } from "../utils/formatName";

  const currencyCode = ['USD-BRL','EUR-BRL','GBP-BRL','CAD-BRL','JPY-BRL','CNY-BRL'];
  let nameList = convertCurrencyList(currencyCode);
  let quotations = await  getExchange(currencyCode);

export const quotationController = async () => {
  return await getQuote(nameList, quotations, formatName)
}