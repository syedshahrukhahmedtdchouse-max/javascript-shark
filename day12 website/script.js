const inputbox = document.querySelector("#input-box");
const taskbtn = document.querySelector("#taskbtn");
const taskcontainer = document.querySelector("#task-container");

taskbtn.addEventListener("click", () => {
  const div = document.createElement("div"); 

  const newinput = document.createElement("input");
  newinput.value=inputbox.value

  const Edit = document.createElement("button");
  Edit.innerText = "edit";

  const Delete = document.createElement("button");
  Delete.innerText = "delete";

  div.insertAdjacentElement("afterbegin", Delete);
  div.insertAdjacentElement("afterbegin", Edit);
  div.insertAdjacentElement("afterbegin", newinput);
  
  taskcontainer.insertAdjacentElement("beforeend",div)
  inputbox.value=""
});
