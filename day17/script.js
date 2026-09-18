// fetch("https://catfact.ninja/fact")
// .then((res)=>{
// return res.json();
// })
// .then((data)=>{
// console.log(data.fact);
// });

// async function fetchData(url) {
//     const res = await fetch(url);
//     const data = await res.json();
//     return data
    
// }
// const button = document.querySelector("#button")
// const h4 = document.querySelector("#h4")

// button.addEventListener("click",async()=>{
//     const data = await fetchData ("https://catfact.ninja/fact");
//     h4.innerText = data.fact
// })
// const button = document.querySelector("#button")
// const



// async function main(){
//     const response = await fetch ("https://dummyjson.com/todos");
//     const data = await response.json();
//     const todoArr = data?.todos;

//     todoArr.forEach((element)=>{
//         const idElem = document.createElement("span");
//         idElem.innerText="ID:"+element?.id;

//         const useridElem = document.createElement("span");
//         useridElem.innerText="userid:"+element?.userId;

//         const todosElem = document.createElement("h3");
//         todosElem.innerText="Todo:"+element?.todo;

//         const compeleteelem = document.createElement("span")
//         compeleteelem.innerText="completed:"+ element?.completed;

//         const hr = document.createElement("hr")

// const container = document.createElement("div");
// container.insertAdjacentElement("afterend",idElem);
// container.insertAdjacentElement("beforeend",idElem);
// container.insertAdjacentElement("beforeend",useridElem);
// container.insertAdjacentElement("beforeend",todosElem);
// container.insertAdjacentElement("beforeend",compeleteelem);
// container.insertAdjacentElement("beforeend",hr);


// document.querySelector("body").insertAdjacentElement("beforeend",container)


//     });
// }

// main()

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>E COMMERCE




// const button = document.querySelector("button");
// const img = document.createElement("img");
// document.querySelector("body").insertAdjacentElement("beforeend",img);


// button.addEventListener("click",()=>{
// fetchimg();
// });

// async function fetchimg() {
//     button.innerText = "loading...";

//     const response = await fetch("https://dog.ceo/api/breeds/image/random");
//     const data = await response.json();
//     button.innerText = "get new image";

//     img.setAttribute("src",data?.message);
//     img.style.width = "500px"
    
// }

let counter = 0

async function main() {
  const response = await fetch("https://dummyjson.com/carts");
  const data = await response.json();

  data.carts.forEach((cart) => {
    const productArr = cart.products;

    productArr.forEach((product) => {

      counter++;

      const img = document.createElement("img");
      img.setAttribute("src", product?.thumbnail);
      img.style.width = "100px";

      const titleElem = document.createElement("h2");
      titleElem.innerText = product?.title;

      const pricePara = document.createElement("span");
      pricePara.innerText = product?.price;

      const container = document.createElement("div");
      container.classList.add("product-container")
      container.insertAdjacentElement("beforeend", img);
      container.insertAdjacentElement("beforeend", titleElem);
      container.insertAdjacentElement("beforeend", pricePara);

      document.querySelector("body").insertAdjacentElement("beforeend", container)
    });
  });

  console.log(counter)
}

main();