export const getExchange = async (currencyCode: string[]) => {
  const url = `http://economia.awesomeapi.com.br/json/last/${currencyCode}`;
  const response = await(await fetch(url)).json();
  return response;
};
