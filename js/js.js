
// trees counter
let string = "";
let count = 0;
let add = Number(string)
const counter = document.querySelector('#counter');
count = 245687;
counter.textContent = 245687;
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{ 
        if(e.target.innerHTML == "submit"){
            add = Number(document.querySelector('input').value);
            count = eval(count + add)
            console.log(count)
            counter.textContent = count;
        }else{
            console.log(e.target)
            string = e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        
  })
})


// nav 
const hamb = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');

hamb.addEventListener("click", ()=>{
  navlinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
}); 

navlinks.addEventListener("click", ()=>{
  navlinks.classList.toggle("open");
})

