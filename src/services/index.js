const fetchProducts = async function () {
  const fetchApi = await fetch('https://myjson.dit.upm.es/api/bins/4q02');

  const products = await fetchApi.json();

  return products;
};

export default fetchProducts;
