export const setCurrenciesList = () => {
  const selectDiv = document.querySelector('.wrap-checkbox');
  const input = document.querySelectorAll('.checkbox')
  selectDiv?.addEventListener('submit', (e)=> {
    let inputList = [...input];
    let list = inputList.filter(e => e.checked).map(e => e.name);
    console.log(list);
    localStorage.setItem('listCurrency', JSON.stringify(list));
    e.preventDefault();
  });
};
