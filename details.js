async function getDetails() {
  const ulrParams = new URLSearchParams(window.location.search);
  const id = ulrParams.get("id");
  console.log(id);

  const response = await axios.get(`https://dummyjson.com/products/${id}`);
  const product = response.data;
  const { title, brand, category, thumbnail, price, description } = product;

  document.querySelector(".title").textContent = title;
  document.querySelector(".brand").textContent = brand;
  document.querySelector(".description").textContent = description;
  document.querySelector(".category").textContent = category;
  document.querySelector("img").src = thumbnail;
  document.querySelector(".price").textContent = `${price} $`;
}

getDetails();
