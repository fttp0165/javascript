
function $(str){
      
         if(typeof str === 'String'){
             return document.getElementById(str);
         }else if(typeof str === 'function'){
             window.onload=str;
         } 
}