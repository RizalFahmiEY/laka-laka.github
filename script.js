//togle class active
const navbarNav = document.querySelector ('.navbar-nav');
//untuk mengklik 
document.querySelector('#hamburger-menu').onclick =()=>{
    navbarNav.classList.toggle('active')
};

//klik di luar untuk menghilangkan nav nya
const hamburger =document.querySelector ('#hamburger-menu'); 

document.addEventListener('click',function(e){
    if (!hamburger.contains(e.target)&& !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
}
)