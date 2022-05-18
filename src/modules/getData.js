const getData = () => {
  return fetch(
    'https://o-zone-nd-default-rtdb.europe-west1.firebasedatabase.app/goods.json'
  ).then((response) => response.json());
};

export default getData;
