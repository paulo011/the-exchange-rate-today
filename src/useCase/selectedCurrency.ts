export const selectedCurrency = () => {
  
  let selectedCurrencies: string[] = [];
  const checkbox = document.querySelector('.checkbox')
  checkbox?.addEventListener('click', (event) => selectedCurrencies.push(event))
  console.log(selectedCurrencies)
}
