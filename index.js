document.querySelector("button").addEventListener('click', function(){
    document.querySelector(".links").classList.toggle('show-link')
})

const date=new Date().getFullYear();
console.log(date);
document.querySelector(".date").textContent = date;