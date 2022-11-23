export const convertCurrencyList = (currencyCode: string[]): string[] => {

  const newCurrencyList = currencyCode.map((element => {
    const newElement = (element.split("-")).join('');
    return newElement;
  }));

  return newCurrencyList;
};
