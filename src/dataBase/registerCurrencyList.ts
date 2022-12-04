let cache:string[] = [];

export const registerCurrencyList = (value: string) => {
  cache.push(value);
  localStorage.setItem("listCurrency", JSON.stringify(cache));
};
