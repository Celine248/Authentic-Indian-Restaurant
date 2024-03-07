let list = document.querySelectorAll(".menu-filter li");
let menu = document.querySelectorAll(".menu-restaurant");

menu.forEach((item)=>{
    item.style.display="none";
})
list.forEach((el) =>{
    el.addEventListener("click" , (e)=>{
        list.forEach((li)=>{
            li.classList.remove("active")
    
        e.target.classList.add("acitve");
        })

        menu.forEach((el2)=>{
            el2.style.display = "none";
        })
        document.querySelectorAll(e.target.dataset.filter).forEach((li)=>{
            li.style.display = "" ;
        })

    })
})