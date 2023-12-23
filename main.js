let form = document.getElementById("form");
let input = document.getElementById("input");
let tasks = document.getElementById("tasks");
const plus = document.getElementById("plus");
let msg = document.getElementById("msg");

plus.addEventListener("click", (e) => {
    e.preventDefault();
    formValidation();
});

data = {};
let acceptData = () => {
    createpost();
};

let createpost = () => {
    tasks.innerHTML += `
    <form>
        <p>
        <input type="checkbox" id="chackTasks">
        <label for="checkTasks">
            ${input.value}
            <i onClick="deleteTask(this)" class="fas fa-trash-alt"></i>
        </label>
        </p>
    </form>
    `;
    input.value = "";
}


let formValidation = () => {
    if (input.value === ""){
        console.log("failure");
        msg.innerHTML = "Task cannot be empty";
    } else{
        console.log("success");
        msg.innerHTML = "";
        acceptData();
    }
};

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
};
