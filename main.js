async function getProductAxios() {
  const response = await axios.get(`https://dummyjson.com/products`);
  const product = response.data.products;
  console.log(product);
  const result = product
    .map(function (ele) {
      return ` 
          <img src= ${ele.thumbnail} /> 
          <h2>${ele.title}</h2>
          <span>${ele.price} $ </span>
          <a href="details.html?id=${ele.id}">Show More</a>
          `;
    })
    .join("");

  document.querySelector(".product").innerHTML = result;
}
getProductAxios();
