function scrollToEllement(elementSelector, instance = 0){
    const element = document.querySelectorAll(elementSelector);
    if(element.length > instance){
        element[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click' , () =>{
    scrollToEllement('.header');
});

link2.addEventListener('click' , () =>{
    scrollToEllement('.header', 1);
});

link3.addEventListener('click' , () =>{
    scrollToEllement('.column');
});