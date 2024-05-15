let container=document.getElementById("container")
let fetch_todo=document.createElement("button").addEventListener("click",fetch_todo)
let content=document.createElement("p")

let data=fetch("https://jsonplaceholder.typicode.com/todos")
data.then((res)=>{
    return res.json()
})
.then((res)=>{
    console.log(res)
})