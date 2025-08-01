const add=()=>{
    const taskInput=document.getElementById("taskInput");

    const task=taskInput.value;
    taskInput.value=""
    if(task!="s")
    display(task)
    console.log(task)
}

var counter=1;


const display=(task)=>{

const taskCont=document.getElementById("taskContainer");


let taskId=`task${counter}`


//creating elements
let taskbody= document.createElement('div');
let taskName= document.createElement('p');
let deleteIcon = document.createElement('i');

taskbody.id=taskId;

//assigning the task
taskName.textContent=task 

//adding class names
taskbody.classList="w-full h-8 flex justify-between items-center px-2"
deleteIcon.classList="text-red-500 ri-delete-bin-line"

//adding event listener
deleteIcon.addEventListener("click",()=>{
console.log("deleted");
deleteTask(taskId)
})

taskName.addEventListener("click",()=>{
   taskDone(taskId)
})

taskbody.appendChild(taskName)
taskbody.appendChild(deleteIcon)

taskCont.appendChild(taskbody)
counter++;
}
const deleteTask=(taskId)=>{
document.getElementById(taskId).remove();

}

const taskDone=(taskId)=>{
const task=document.getElementById(taskId);
const task_ptag=task.querySelector('p')
task_ptag.classList.toggle("text-green-500")
task_ptag.classList.toggle("line-through")
}

