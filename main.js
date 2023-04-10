// alert('hello');
const newsletter = document.querySelector('.newsletter-modal');
const newForm = document.getElementById('news-form');

window.addEventListener('load',()=>{
    setTimeout(()=>{
        newsletter.style.display="block";
    },7000);
})