
//getting the elements from the local storage
let taskList = JSON.parse(localStorage.getItem("tasks")) || []; //all the inserted tasks are stored in this array

//affichage des élements de localstorage sur l'ecran par default
taskList.forEach(element => {

    let textTaskValue = document.createTextNode(element);

    // creation of a new Span with the class="task"
    let spanTask = document.createElement("span");
    spanTask.setAttribute("class", "task");

    //insertion of the text object to the Span
    spanTask.appendChild(textTaskValue);

    // creation of a checkbox
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");

    checkBox.addEventListener("change", function (e) {
        checkBox.parentElement.querySelector("span").classList.toggle("taskErase");
    });  

    //creation of a closing button
    let closingButton = document.createElement("button");
    closingButton.setAttribute("class", "delete-btn");
    closingButton.innerText="X";

    //we create a new "li", then insert there all the needed elements
    let line = document.createElement("li");
    line.appendChild(checkBox);
    line.appendChild(spanTask);
    line.appendChild(closingButton);

    //task insertion
    
    document.getElementById("task-list").appendChild(line);
    
});



let removed = document.getElementsByClassName("delete-btn"); //retourn "HTML collection", qui n'est pas un tableau classique, cependant il a besoint d'un traitement spécifique :


for (let i = 0; i < removed.length; i++) {
    removed[i].addEventListener('click', function(e) {
    e.currentTarget.parentNode.remove();
    console.log(i, removed.length);
    taskList.splice(i, 1);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    console.log(taskList, localStorage);
    });
}; //ok disons locale storage gardes toutes les elements le problem est bien l'impossibilité de supprimer le dernier objet de tableau



//we create an event for adding a task
let task = document.getElementById("add-task-button");



task.addEventListener("click", function(e) {
    //we take a value that has been inserted
    let taskValue = document.getElementById("input-task").value;

    //and store it to a local storage via pushing the new version of an array
    taskList.push(taskValue);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    console.log(taskList, localStorage);

    //creation of a text object (node) from a variable,
    let textTaskValue = document.createTextNode(taskValue);

    // creation of a new Span with the class="task"
    let spanTask = document.createElement("span");
    spanTask.setAttribute("class", "task");

    //insertion of the text object to the Span
    spanTask.appendChild(textTaskValue);

    // creation of a checkbox
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");

    checkBox.addEventListener("change", function (e) {
        checkBox.parentElement.querySelector("span").classList.toggle("taskErase");
    });  

    //creation of a closing button
    let closingButton = document.createElement("button");
    closingButton.setAttribute("class", "delete-btn");
    closingButton.innerText="X";

    let removed = document.getElementsByClassName("delete-btn"); //retourn "HTML collection", qui n'est pas un tableau classique, cependant il a besoint d'un traitement spécifique :


for (let i = 0; i < removed.length; i++) {
    removed[i].addEventListener('click', function(e) {
    e.currentTarget.parentNode.remove();
    console.log(i, removed.length);
    taskList.splice(i, 1);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    console.log(taskList, localStorage);
    });
}; //ok disons locale storage gardes toutes les elements le problem est bien l'impossibilité de supprimer le dernier objet de tableau

//ПОСЛЕДНИЙ УДАЛЯЕТСЯ ТОЛЬКО ПОСЛЕ ОБНОВЛЕНИЯ ЧТО ЗА

   
    //we create a new "li", then insert there all the needed elements
    let line = document.createElement("li");
    line.appendChild(checkBox);
    line.appendChild(spanTask);
    line.appendChild(closingButton);

    //task insertion
    document.getElementById("task-list").appendChild(line);
});

       