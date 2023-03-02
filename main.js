add= () =>{
    const input = document.querySelector(".input")
   const lis = document.getElementById("list")
    if(input.value.trim() !== ""){ 
        let text =input.value;

     let newdiv = document.createElement('div')
     newdiv.className="div-from-js";
     newdiv.id="mc";
     newdiv.innerHTML=`${text}`;

     let del=document.createElement('span')
     del.id="def"
     del.innerText="✘";

     let tic=document.createElement('span')
     tic.id="tic"
     tic.innerText="✓";

     lis.appendChild(newdiv)
     lis.appendChild(del)
     lis.appendChild(tic)
     input.value="";
     tic.addEventListener('click',function(){
        if(newdiv.classList.contains("strike")){
           
            newdiv.classList.remove('strike')
        }
        else{
         newdiv.classList.add('strike')}
    })
     del.addEventListener('click',function(){
        lis.removeChild(newdiv)
        lis.removeChild(del)
        lis.removeChild(tic)
        
    })}
else{

    input.style.borderColor='black';
   setTimeout(() => {
    input.style.borderColor='red';
   }, 300); 
   setTimeout(() => {
    input.style.borderColor=' rgb(80, 79, 79)';
   }, 3000); 
}
}
const con = document.getElementById("con");
con.scrollTop+=50;