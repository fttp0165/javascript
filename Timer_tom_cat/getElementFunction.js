 function getStyle(object,att)
                {
                    // if(window.getComputedStyle)
                    //   {
                    //       return getComputedStyle(object)[att];
                    //   }else{
                    //       return object.currentStyle[att];
                    //   }
                  return window.getComputedStyle ? getComputedStyle(object)[att]:object.currentStyle[att];
                }
//獲取id 所對應元素
// function $(id)
//                 {
//                     return document.getElementById(id);
//                 }

function $(str)
{
    if(typeof str ==="string")
      {
          return document.getElementById(str);
      }else if(typeof str ==="function")
            {
                 window.onload=str;
            }
}