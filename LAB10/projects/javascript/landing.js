const time= document.getElementById('time'),
 greeting = document.getElementById('greeting'),
 name = document.getElementById('name'),
 focus = document.getElementById('focus');

 function showtime(){
     let today=new Date(),
     hours=today.getHours(),
     min =today.getMinutes(),
     seconds=today.getSeconds();
     

     const amPm = hours >= 12 ? 'PM' : 'AM';
     hours = hours % 12 || 12;

     time.innerHTML=`${hours}<span>:</span> ${addZero(min)} <span>:</span>${addZero(seconds)} ${amPm}`;
    
     setTimeout(showtime, 1000);
 }
 function addZero(n){
     return ( parseInt(n, 10) < 10 ? '0' : '' )+ n;   

 }
function setBg(){
    let today = new Date(),
    hours = today.getHours();
    if(hours<12){
        document.body.style.backgroundImage="url('images/pexels-todd-trapani-1420440.jpg ')";
        document.body.style.color='white';
        greeting.textContent="Good morning";

    }
    else if (hours < 18){
        document.body.style.backgroundImage="url('images/aff.jpg ')";
        greeting.textContent="Good Afternoon";
        document.body.style.color='white';

    }
    else{
        document.body.style.backgroundImage="url('images/even.jpg ')";
        greeting.textContent="Good Evening";
        document.body.style.color='white';
   }
}
function getname(){
    if(localStorage.getItem('name')=== null) {
       name.textContent="Enter name";

    }
    else{
         name.textContent = localStorage.getItem('name');
    }

}
function setname(e){
    if(e.type==='keypress'){

        if(e.which == 13 || e.keycode ==13 ){
            localStorage.setItem('name',e.target.innerText);
            name.blur();
        }

    }
    else{
        localStorage.setItem('name',e.target.innerText);
    }



}
function getfocus(){
    if(localStorage.getItem('focus')=== null) {
       focus.textContent="Enter Focus";

    }
    else{
         focus.textContent = localStorage.getItem('focus');
    }

}
function setfocus(e){
    if(e.type==='keypress'){

        if(e.which == 13 || e.keycode ==13 ){
            localStorage.setItem('focus',e.target.innerText);
            focus.blur();
        }

    }
    else{
        localStorage.setItem('focus',e.target.innerText);
    }



}
 
name.addEventListener('keypress',setname);
name.addEventListener('blur',setname);
focus.addEventListener('keypress',setfocus);
focus.addEventListener('blur',setfocus);


 showtime(); 
 setBg();
 getname();
 getfocus();