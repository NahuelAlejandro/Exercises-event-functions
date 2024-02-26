const container = document.getElementById("container");

const button = document.querySelector("button");


button.addEventListener("click",()=>{
    

       
    if (container.classList.contains("bg-gray-300")){
        container.classList.remove("bg-gray-300");
        container.classList.remove("border-gray-400");
        container.classList.add("bg-blue-300")
        container.classList.add("border-blue-400")
        
        container.innerHTML = "blue"
       
    } else if (container.classList.contains("bg-blue-300")){
        container.classList.remove("bg-blue-300");
        container.classList.remove("border-blue-400");
        container.classList.add("bg-red-300")
        container.classList.add("border-red-400")
        container.innerHTML = "red"
     
        
    }
    
}) 


    