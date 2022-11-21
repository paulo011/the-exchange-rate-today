import {getExchange} from "../subscribers/getExchange";
import {Currency} from "../types/currency";
import {convertCurrencyList} from "./convertCurrencyList";
import { formatName } from "../utils/formatName";

const currencyCode = ['USD-BRL','EUR-BRL','GBP-BRL','CAD-BRL','JPY-BRL','CNY-BRL'];
let nameList = convertCurrencyList(currencyCode);
let quotations = getExchange(currencyCode);

export const getQuote = async () => {
  let currencyList: Currency[] = [];
  nameList.map(element => {
    quotations.then(data => {
      let currency: Currency = {
        name: formatName(data[element].name),
        bid: data[element].bid,
        ask: data[element].ask,
        pct: data[element].pctChange,
      };
      currencyList.push(currency);
    });
  });
  return currencyList;
};
