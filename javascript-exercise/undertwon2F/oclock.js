
    window.onload = function () {

      var secondPoint = document.getElementById('second');
      var minPoint = document.getElementById('min');
      var hourPoint = document.getElementById('hour');

      //取得數位顯示標籤
      var CCsecond = document.getElementById('CsecondP');
      var CCmin = document.getElementById('CminP');
      var CChour = document.getElementById('ChourP');
      var oSet = document.getElementById('set');
      var oRset = document.getElementById('Reset');
      var otimeH = document.getElementById('timeH');
      var otimeM = document.getElementById('timeM');
      var otimeS = document.getElementById('timeS');
      var OAM = document.getElementById('oIsAm');
      var OshowP = document.getElementById('showAMP');

      CCsecond.innerHTML = 0;
      CCmin.innerHTML = 0;
      CChour.innerHTML = 0;
      var angleFSec = 180
      var angleFmin = 0;
      var angleFhour = 0;
      var isAm = true;
      var oTotalsec = 0;

      //----------------------------------------
      //get time
      //-----------------------------------------
      var toDay = new Date();
      var NowHour = (toDay.getHours()) * 3600;
      var Nowmin = (toDay.getMinutes()) * 60;
      var Nowsec = toDay.getSeconds();
      if (toDay.getHours() == 0)
       {  NowHour = 12* 3600;}
      oTotalsec = NowHour + Nowmin + Nowsec;
      //判斷是否為12點
      //12點的模式 
      //中午12點 顯示為PM12:00:00
      //午後的一點 PM 1:0:0
      //晚上12點即24點 顯示 AM 12:00:00
      //午夜後1點顯示 AM1:0:0


      // isAm = !(isAm);


       oSet.addEventListener('click', function (e) {
        otimeH.value = otimeH.value;
        otimeM.value = otimeM.value;
        otimeS.value = otimeS.value;

        if (otimeH.value == 12) {
          NowHour = parseInt(otimeH.value) * 3600;
        } else if (otimeH.value > 12) {
          NowHour = parseInt(otimeH.value - 1) * 3600;
        } else {
          NowHour = parseInt(otimeH.value) * 3600;
        }


        Nowmin = parseInt(otimeM.value) * 60;
        Nowsec = parseInt(otimeS.value);
        oTotalsec = (NowHour + Nowmin + Nowsec);
        console.log(oTotalsec);
        initTime();
        FisAM();
      })

      //----------------------------------------
      //Reset Time
      //-----------------------------------------
      oRset.addEventListener('click', function (e) {
    
        if (toDay.getHours() == 12 ) {
          NowHour = (toDay.getHours())* 3600;
          isAm = !(isAm);

        } else if (toDay.getHours() > 12) {
          NowHour = (toDay.getHours() - 12) * 3600;
        } else { NowHour = (toDay.getHours()) * 3600; }

        if (toDay.getHours() == 0)
       {  NowHour = 12* 3600;
        console.log('123',NowHour );
       }
        Nowmin = (toDay.getMinutes()) * 60;
        Nowsec = toDay.getSeconds();
        oTotalsec = NowHour + Nowmin + Nowsec;
        console.log( oTotalsec);
        initTime();
        FisAM();
      })
        //----------------------------------------
        // 點擊AM 按鍵更換成PM
        //----------------------------------------
      OAM.addEventListener('click', function (e) {
        isAm = !(isAm);
        FisAM();
      })


 
      if (toDay.getHours() == 12) {
        NowHour = (toDay.getHours()) * 3600;
        isAm = !(isAm);
      } else if (toDay.getHours() > 12) {
        NowHour = (toDay.getHours() - 1) * 3600;
      } else { NowHour = (toDay.getHours()) * 3600; }
      var oCmin = Math.floor((oTotalsec / 60) % 60);
      var oCsecond = Math.floor(oTotalsec % 60);


        //----------------------------------------
        //init Time function 將取得的總時間 
        //換算成 時、分、秒
        //----------------------------------------
      function initTime() {
        //----------------------------------------
        //init Time
        //----------------------------------------
        // var oTotalsec=14100;
        oChour = Math.floor(oTotalsec / 3600);
        oCmin = Math.floor((oTotalsec / 60) % 60);
        oCsecond = Math.floor(oTotalsec % 60);
        //----------------------------------------
        //init  Angle
        //-----------------------------------------
        angleFSec = 180 + (oCsecond * 6);
        if (angleFSec >= 540) { angleFSec = 180; }
        angleFmin = oCmin * 6;
        angleFhour = (oChour * 30) + Math.floor((angleFmin) / 12);
        console.log(angleFhour);
        secondPoint.style.transform = 'rotate(' + angleFSec + 'deg)';
        minPoint.style.transform = 'rotate(' + angleFmin + 'deg)';
        hourPoint.style.transform = 'rotate(' + angleFhour + 'deg)';
        FisAM();
      }

       //----------------------------------------
      // show AM or PM
       //-----------------------------------------
      function FisAM() {
        if (isAm) {
          OAM.value = "AM";
          OshowP.innerHTML = "AM";
        } else {
          OAM.value = "PM";
          OshowP.innerHTML = "PM";
        }
      }
  
       //----------------------------------------
      // init time
       //----------------------------------------

 
      initTime();

       //----------------------------------------
      //set  1 sec event change current time
       //----------------------------------------
      setInterval(function () {
        oCsecond += 1;
        if (oCsecond >= 60) {
          oCsecond = 0;
          oCmin += 1;
          if (oCmin >= 60) {
            oCmin = 0;
            console.log('oChour', oChour);
            oChour += 1;
            console.log('oChour', oChour);
            if (oChour == 12) {
              isAm = !(isAm);
              FisAM();
            } else if (oChour > 12) {
              oChour = oChour - 12;
              isAm = !(isAm);
              console.log(oChour);
              FisAM();
            }
          }
        }
        angleFSec = 180 + (oCsecond * 6);
        if (angleFSec >= 540) { angleFSec = 180; }
        angleFmin = oCmin * 6;
        angleFhour = (oChour * 30) + Math.floor((angleFmin) / 12);
        console.log(angleFhour);
        secondPoint.style.transform = 'rotate(' + angleFSec + 'deg)';
        minPoint.style.transform = 'rotate(' + angleFmin + 'deg)';
        hourPoint.style.transform = 'rotate(' + angleFhour + 'deg)';
        //Digital sec
        CCsecond.innerHTML = (oCsecond);
        CCmin.innerHTML = parseInt(oCmin);
        CChour.innerHTML = parseInt(oChour);

      }, 1000);

    }
