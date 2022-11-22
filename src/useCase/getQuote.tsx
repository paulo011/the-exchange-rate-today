import { Currency } from "../types/currency";

export const getQuote = async (nameList: string[], quotations: any, formatName: any) => {
  let currencyList: Currency[] = [];
  nameList.map(element => {
     let currency: Currency = {
        name: formatName(quotations[element].name),
        bid: quotations[element].bid,
        ask: quotations[element].ask,
        pct: quotations[element].pctChange,
      };
      currencyList.push(currency);
  });
  return currencyList;
};
