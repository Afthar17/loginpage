$(document).ready(function(){
    $('#reg').validate({
        rules:{
            name:{
                required:true,
                
            }
        }
    })
})
const container=document.getElementById('container');
const reg=document.getElementById('register');
const login=document.getElementById('login');
reg.addEventListener('click',()=>{
    container.classList.add('active');
}),
login.addEventListener('click',()=>{
    container.classList.remove('active');
})
