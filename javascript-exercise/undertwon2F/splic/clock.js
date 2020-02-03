window.onload=function(){
     
      var secondPoint=document.getElementById('second');
      var minPoint=document.getElementById('min');
      var hourPoint=document.getElementById('hour');

      //取得數位顯示標籤
      var CCsecond=document.getElementById('CsecondP');
      var CCmin=document.getElementById('CminP');
      var CChour=document.getElementById('ChourP');
      var oSet=document.getElementsByClassName('set');
      var oRset=document.getElementsByClassName('Reset');
      CCsecond.innerHTML=0;
      CCmin.innerHTML=0;
      CChour.innerHTML=0;
      var angleFSec=180
      var angleFmin=0;
      var angleFhour=0;

      //----------------------------------------
      //init Time
      //----------------------------------------
      var oTotalsec=14100;
      var oChour=Math.floor(oTotalsec/3600);
      var oCmin=Math.floor((oTotalsec/60)%60);
      var oCsecond=Math.floor(oTotalsec%60);
      var isAm=true;
       //----------------------------------------
      //init  Angle
      //-----------------------------------------
      angleFSec=180+(oCsecond*6);
      if(angleFSec>=540){ angleFSec=180;}
      angleFmin=oCmin*6;
      angleFhour=(oChour*30)+Math.floor((angleFmin-50)/12);
      secondPoint.style.transform ='rotate('+angleFSec+'deg)';
      minPoint.style.transform ='rotate('+angleFmin+'deg)';
      hourPoint.style.transform ='rotate('+angleFhour+'deg)';

      setInterval(function(){
                                                      oCsecond+=1;
                                                      if(oCsecond>=60)
                                                           {
                                                             oCsecond=0;
                                                             oCmin+=1;
                                                             if(oCmin>=60)
                                                                 {
                                                                   oCmin=0;
                                                                   oChour+=1;
                                                                    if(oChour>=12)
                                                                       {
                                                                        oChour=0;
                                                                        isAm=!(isAm);
                                                                       }
                                                                  }
                                                            }
         
                                                        angleFSec=180+(oCsecond*6);
                                                        if(angleFSec>=540){ angleFSec=180;}
                                                        angleFmin=oCmin*6;
                                                        angleFhour=(oChour*30)+Math.floor((angleFmin-50)/12);
                                                        console.log(angleFhour);
                                                        secondPoint.style.transform ='rotate('+angleFSec+'deg)';
                                                        minPoint.style.transform ='rotate('+angleFmin+'deg)';
                                                        hourPoint.style.transform ='rotate('+angleFhour+'deg)';
                                                    
            
                 //Digital sec

                    CCsecond.innerHTML=(oCsecond);
                    CCmin.innerHTML=parseInt(oCmin);
                    CChour.innerHTML=parseInt(oChour);
            
      },1000);
    }