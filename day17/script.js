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



async function main(){
    const response = await fetch ("https://dummyjson.com/todos");
    const data = await response.json();
    const todoArr = data?.todos;

    todoArr.forEach((element)=>{
        const idElem = document.createElement("span");
        idElem.innerText="ID:"+element?.id;

        const useridElem = document.createElement("span");
        useridElem.innerText="userid:"+element?.userid;

        const todosElem = document.createElement("h3");
        todosElem.innerText="Todo:"+element?.todo;

        const compeleteelem = document.createElement("span")
        compeleteelem.innerText="completed:"+ element?.completed;

        const hr = document

const container = document.createElement("div");
container.insertAdjacentElement("beforeend",idElem);
container.insertAdjacentElement("beforeend",useridElem);
container.insertAdjacentElement("beforeend",todosElem);
container.insertAdjacentElement("beforeend",compeleteelem);

document.querySelector("body").insertAdjacentElement("beforeend",container)


    });
}

main()