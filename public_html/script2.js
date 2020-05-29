let homeDrawn, aboutDrawn, expertiseDrawn, teamDrawn, servicesDrawn, valuesDrawn, dolyaDrawn, unfoldedAdv, unfoldedOut, unfoldedTeam, unfoldedBoard, unfoldedLiaison, unfoldedTrain, rollout = false;

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
$(document).ready(function() {
   
    var delayInMilliseconds = 500; //1 second
    connectPaths();
    setTimeout(function() {
        moveImg();
    }, delayInMilliseconds);
    
    /*var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (w < 620) {
        $("#header-logo").attr("src", "/dolyafav.png");
        $("#header-logo").css({
            'width' : '40px',
            'height' : 'auto'
        });
    } */
});
 
$(window).resize(function () {
    /*var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (w < 620) {
        $("#header-logo").attr("src", "/dolyafav.png");
        $("#header-logo").css({
            'width' : '40px',
            'height' : 'auto'
        });
    }else {
        $("#header-logo").attr("src", "https://i.ibb.co/3YVpQZ3/Dolya-Logo-Transparent.png");
        $("#header-logo").css({
            'width' : '100%',
            'height' : 'auto',
            'max-width': '120px'
        });
    }*/
   
    connectPaths();
});

let height = 0;


function moveImg() {   //homepage animation on load  
     var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var element = document.getElementById("logo-img-fill");
  var element2 = document.getElementById("logo-thread");
  var element3 = document.getElementById("logo-text-dolya");
  var element4 = document.getElementById("logo-text-consulting");
  var element6 = document.getElementById("title-page-text-wrap");
  var element7 = document.getElementById("logo-wrap");
  //var element5 = document.getElementById("path1");
  //clip-path: polygon(100% 0, 0 0, 0 32%, 20% 52%, 39% 52%, 59% 32%, 78% 0%, 100% 0%);
  connectPaths();
    if (rollout === true) {
      element.style.left = '-80px';
      element2.style.width = '0px';   
      element3.style.color = 'white';
      element4.style.color = 'white';
      
      //document.getElementById("blueLine").style.width = '0px';
      document.getElementById("mission-statement").style.color = 'white';
      document.getElementById("tagline").style.color = 'white';
          
      rollout = false;
    } else {
        element.style.left = '-177px';
        element2.style.width = '238px';
        element3.style.color = 'black';
        element4.style.color = 'black';
        if (w < 1099) {
            element6.style.animation = 'pop-in2 0.7s ease-in-out forwards 5s';
        } else { element6.style.animation = 'pop-in2 0.7s ease-in-out forwards 4.3s';}
        element7.style.opacity = '1';
        //document.getElementById("blueLine").style.width = '70px';
        document.getElementById("mission-statement").style.color = '#303030';
        document.getElementById("tagline").style.color = '#303030';
        document.getElementById("path1").style.animation = 'dash 4s ease-in-out forwards 4s';
        //document.getElementById("path1").style.strokeDashoffset = (height * 2).toString();
        rollout = true;
    } 
 }                       

$(window).scroll(function() {
    height = $(window).scrollTop();
    
    
        
        
        var h1 = $("#l-home").height();
        var h2 = $("#l-about").height();
        var h3 = $("#l-expertise").height();
        var h4 = $("#l-dolya").height();
        var h5 = $("#l-values").height();
        var h6 = $("#l-services").height();
        var h7 = $("#l-team").height();
        var tempH = (h1 + h2 + h3 + (h4 * 0.2));
        
        var sectionHeights = 0;
        
        if (height >  (h1/2) && !aboutDrawn) { 
          aboutAnim();
        };
         if (height > ((h1) + h2 - (h3)) && !expertiseDrawn) { 
          expertiseAnim();
        };
        if (height > ((h1/2) + h2 + h3 + (h4 * 0.2)) && !dolyaDrawn && aboutDrawn) { 
          dolyaAnim();
        };
        if (height >  (h1 + h2 + h3 + h4 + (h5 * 0.1)) && !valuesDrawn && dolyaDrawn) { 
          valuesAnim();
        };
        if (height > (h1 + h2 + h3 + h4 + h5 + (h6 * 0.2)) && !servicesDrawn) { 
          servicesAnim();
        };
         if (height > (h1 + h2 + h3 + h4 + h5 + h6 + (h7 * 0.2)) && !teamDrawn) { 
           teamAnim();
        };
        
        
       
       
});




                                            // end of function

function aboutAnim() {  //set to trigger on scroll!
  var element1 = document.getElementById("who-we-are");
  var element2 = document.getElementById("what-we-do");
  var element3 = document.getElementById("our-clients"); 
  var element4 = document.getElementById("we-are-different");
  var element5 = document.getElementById("path2");
  connectPaths();
  
  element1.style.animation = 'pop-in2 0.7s ease-in-out forwards 0.4s';
  element2.style.animation = 'pop-in 0.7s ease-in-out forwards 1s';
  element3.style.animation = 'pop-in 0.7s ease-in-out forwards 1.6s';
  element4.style.animation = 'pop-in 0.7s ease-in-out forwards 2.2s';
  element5.style.animation = 'dash 10s linear forwards';

  aboutDrawn = true;
}

function servicesAnim() {  //set to trigger on scroll!
  var element1 = document.getElementById("services-card-ag");
  var element2 = document.getElementById("services-card-ar");
  var element3 = document.getElementById("services-card-bs"); 
  var element4 = document.getElementById("services-card-tr");
  var element5 = document.getElementById("services-card-gl");
  var element6 = document.getElementById("services-card-train");
  var element7 = document.getElementById("path-services");
  
  
  
  element1.style.animation = 'pop-in2 0.7s ease-in-out forwards 0.1s';
  element2.style.animation = 'pop-in2 0.7s ease-in-out forwards 0.3s';
  element3.style.animation = 'pop-in2 0.7s ease-in-out forwards 0.5s';
  element4.style.animation = 'pop-in2 0.7s ease-in-out forwards 0.7s';
  element5.style.animation = 'pop-in2 0.7s ease-in-out forwards 0.9s';
  element6.style.animation = 'pop-in2 0.7s ease-in-out forwards 1.1s';
  element7.style.animation = 'dash 5.5s linear forwards';
  servicesDrawn = true;
}


function teamAnim() {  //set to trigger on scroll!
  var element1 = document.getElementById("card-kurt");
  var element2 = document.getElementById("card-tereza");
  var element3 = document.getElementById("card-william"); 
  var element4 = document.getElementById("card-targ");
  
  var element5 = document.getElementById("path-team");
  connectPaths();
  element1.style.animation = 'pop-in2 0.7s ease-in-out forwards 0.9s';
  element2.style.animation = 'pop-in2 0.7s ease-in-out forwards 1.2s';
  element3.style.animation = 'pop-in2 0.7s ease-in-out forwards 1.3s';
  element4.style.animation = 'pop-in2 0.7s ease-in-out forwards 1.5s';
 
  element5.style.animation = 'dash 4.5s linear forwards';
  teamDrawn = true;
}

function valuesAnim() {  //set to trigger on scroll!
  var element1 = document.getElementById("ing-frame");
  var element2 = document.getElementById("syn-frame");
  var element3 = document.getElementById("qua-frame"); 
  var element4 = document.getElementById("hum-frame");
  //var element5 = document.getElementById("principles-title"); 
  //var element6 = document.getElementById("principles-line");  
  var element7 = document.getElementById("principles-list"); 
  var element8 = document.getElementById("path-values");
  
  element1.style.animation = 'pop-in2 0.7s ease-in-out forwards 0.8s';
  element2.style.animation = 'pop-in2 0.7s ease-in-out forwards 1s';
  element3.style.animation = 'pop-in2 0.7s ease-in-out forwards 1.2s';
  element4.style.animation = 'pop-in2 0.7s ease-in-out forwards 1.4s';
  //element5.style.opacity = '1';
  //element6.style.width = '30px'; 
  element7.style.opacity = '1';

    $("#principles-wrap > .blue-line").css({
      'width': '30px'
    })
     $("#principles-wrap > .heading").css({
      'opacity': '1'
    })

  element8.style.animation = 'dash 5s linear forwards';

  valuesDrawn = true;
}


function dolyaAnim() {  //set to trigger on scroll! 
 
  var path = document.getElementById("path-myth");
  
  $("#myth-wrap > .blue-line").css({
      'width': '30px'
  })
  
  $("#myth-wrap > .heading , #myth-wrap > .text").css({
      'opacity': '1'
  })
  
  path.style.animation = 'dash 5s linear forwards'; 

  dolyaDrawn = true; 
}





function expertiseAnim() {
    connectPaths();
  var element1 = document.getElementById("hex-social");
  var element2 = document.getElementById("hex-change");
  var element3 = document.getElementById("hex-financial");
  var element4 = document.getElementById("hex-innovative");
  var element5 = document.getElementById("hex-regulated");
  var element6 = document.getElementById("path-expertise");
  
  element1.style.animation = 'pop-in2 0.7s ease-in-out forwards 0.4s';
  element2.style.animation = 'pop-in2 0.7s ease-in-out forwards 0.7s';
  element3.style.animation = 'pop-in2 0.7s ease-in-out forwards 1s';
  element4.style.animation = 'pop-in2 0.7s ease-in-out forwards 1.3s';
  element5.style.animation = 'pop-in2 0.7s ease-in-out forwards 1.6s';
  element6.style.animation = 'dash 4s linear forwards'; 
  expertiseDrawn = true; 
}






function connectPaths() {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var x = $("#logo-thread").offset();
  var thread = $("#golden-thread").offset();
  var aboutThreadStart = $("#title-about").position();
  var titleCard = $("#title-page-text-wrap").offset();
  var mission = $("#mission-statement").offset();
  var aboutSection = $("#l-about").position();
  var whoWeAre = $("#who-we-are").position();
  var whoWeAreSize = $("#who-we-are").position();
  var whatWeDo = $("#card2holder").position();
  var ourClients = $("#card3holder").position();
  var weAreDifferent = $("#card4holder").position();
  var expertise = $("#expertise-wrap").position();
  var values = $("#values-wrap").position();
  var principles = $("#principles-wrap").position();
  var dolyaTitle = $("#title-dolya").position();
  var servicesTitle = $("#title-services").position();
  
  //var profile = $("#profile-wrapper").position();
  var targ = $("#card-targ").position();
  var tereza = $("#card-tereza").position();
  var william = $("#card-william").position();
  var kurt = $("#card-kurt").position();
  
  var myth = $("#myth-wrap").position();
  var wheel = $("#values-title-wrap").position();
  
  var contact = $("#title-contact").position();
  
  var hex1 = $("#hex-social").position();
  var hex2 = $("#hex-change").position();
  var hex3 = $("#hex-financial").position();
  var hex4 = $("#hex-innovative").position();
  var hex5 = $("#hex-regulated").position();
  var hexW = $("#expertise-wrap-2").position();
  var hexWidth = 0;
  if (w > 600) {
      hexWidth = (200/3)*1.8;
  } else hexWidth = (( (w/100) * 23 ) /3) * 2;
  
  
  var height = $(window).scrollTop();
  //$("#test").html("Result" + " " + height);
  
  var arc = 30;
  var pad = 30;
  
  if (w > 1099) {
  $("#path1").attr("d",  "M"  + (x.left + 237) + " " + (x.top + 1) +
                   " H" + (titleCard.left + ($("#title-page-text-wrap").width()) - 10 ) +
                   " A" + " 30" +  " 30" + " 0 0 1 " + (titleCard.left + ($("#title-page-text-wrap").width()) + 20  ) + " " + (x.top + 31) +
                   " V" + (mission.top + $("#mission-statement").height()) +
                   " A" + " 30" +  " 30" + " 0 0 1 " + (titleCard.left + ($("#title-page-text-wrap").width()) + 20 - arc ) + " " + (mission.top + $("#mission-statement").height() + arc) +
                   " H" + ( mission.left + arc + 5) +
                   " A" + " 30" +  " 30" + " 0 0 0 " + ( mission.left + 5)  + " " + (mission.top + $("#mission-statement").height() + arc*2 ) +
                   " V" + (aboutThreadStart.top) 
                   );
  } else {
      $("#path1").attr("d",  "M"  + (x.left + 237) + " " + (x.top + 1) +
                   " H" + (w + 50) +
                   " V" + (-50) +
                   " H" + (-50) +
                   " V" + (thread.top + ($("#golden-thread").height() / 2 )) +
                   " H" + (w + 50) +
                   " V" + (-50) +
                   " H" + (-50) +
                   " V" + ( (thread.top + ($("#golden-thread").height() / 2 )) + (200)   )+
                   " H" + (w/2 - arc) +
                   " A" + " " + arc +  " " + arc + " " + " 0 0 1 " + (w/2 ) + " " + (( (thread.top + ($("#golden-thread").height() / 2 )) + (200)   ) + arc) +
                    " V" + (aboutThreadStart.top) 
                   );
  };
                   
  $("#path2").attr("d",  "M"  + (w/2) + " " + (0) + 
                   " V" + (whoWeAre.top - pad*1.7) +
                   " A" + " " + arc +  " " + arc + " " + " 0 0 1 " + (w/2 - arc) + " " + (whoWeAre.top - (pad*1.7) + arc) + 
                   " H" + ((w/2) - (arc*3) ) +
                   " A" + " " + arc +  " " + arc + " " + " 0 0 0 " + ((w/2) - (arc*4)) + " " + (whoWeAre.top  - (pad*1.7) + arc*2) +
                   " V" + (whoWeAre.top + ($("#card1holder").height()/2) ) + 
                   " A" + " " + arc +  " " + arc + " " + " 0 0 0 " + ((w/2) - (arc*3)) + " " + (whoWeAre.top  + ($("#card1holder").height()/2) + arc) + 
                   " H" + ((w/2) + (arc*3))   + 
               " A" + " " + arc +  " " + arc + " " + " 0 0 1 " + ((w/2) + (arc*4)) + " " + (whoWeAre.top + ($("#card1holder").height()/2) + (arc*2)) +
                   " V" + (whatWeDo.top - pad) +
                  " A" + " " + arc +  " " + arc + " " + " 0 0 1 " + ((w/2) + (arc*3)) + " " + (whatWeDo.top - pad + arc) +
                   " H" + ((w/2) - (arc*3) ) +
                   " A" + " " + arc +  " " + arc + " " + " 0 0 0 " + ((w/2) - (arc*4) ) + " " + (whatWeDo.top + arc) +
                   
                    " V" + (whatWeDo.top + ($("#card2holder").height()/2) ) + 
                   " A" + " " + arc +  " " + arc + " " + " 0 0 0 " + ((w/2) - (arc*3)) + " " + (whatWeDo.top  + ($("#card2holder").height()/2) + arc) + 
                   " H" + ((w/2) + (arc*3))  +
                  " A" + " " + arc +  " " + arc + " " + " 0 0 1 " + ((w/2) + (arc*4)) + " " + (whatWeDo.top + ($("#card2holder").height()/2) + (arc*2)) +
                    " V" + (ourClients.top - pad) +
                  " A" + " " + arc +  " " + arc + " " + " 0 0 1 " + ((w/2) + (arc*3)) + " " + (ourClients.top - pad + arc) +
                   " H" + ((w/2) - (arc*3) ) +
                   " A" + " " + arc +  " " + arc + " " + " 0 0 0 " + ((w/2) - (arc*4)) + " " + (ourClients.top + arc) +
                   
                    " V" + (ourClients.top + ($("#card3holder").height()/2) ) + 
                   " A" + " " + arc +  " " + arc + " " + " 0 0 0 " + ((w/2) - (arc*3)) + " " + (ourClients.top  + ($("#card3holder").height()/2) + arc) + 
                   " H" + ((w/2) + (arc*3) )  +
                  " A" + " " + arc +  " " + arc + " " + " 0 0 1 " + ((w/2) + (arc*4)) + " " + (ourClients.top + ($("#card3holder").height()/2) + (arc*2)) +
                   
                   " V" + (weAreDifferent.top - pad) +
                  " A" + " " + arc +  " " + arc + " " + " 0 0 1 " + ((w/2) + (arc*3)) + " " + (weAreDifferent.top - pad + arc) +
                   " H" + ((w/2) - (arc*3) ) +
                   " A" + " " + arc +  " " + arc + " " + " 0 0 0 " + ((w/2) - (arc*4)) + " " + (weAreDifferent.top + arc) + 
                   
                    " V" + (weAreDifferent.top + ($("#card4holder").height()/2) ) +  
                   " A" + " " + arc +  " " + arc + " " + " 0 0 0 " + ((w/2) - (arc*3)) + " " + (weAreDifferent.top  + ($("#card4holder").height()/2) + arc) + 
                   " H" + ((w/2) + (arc*3))  +
                  " A" + " " + arc +  " " + arc + " " + " 0 0 1 " + ((w/2) + (arc*4)) + " " + (weAreDifferent.top + ($("#card4holder").height()/2) + (arc*2)) +
  
                    " V" + (weAreDifferent.top + $("#card4holder").height() + (arc/3)) +
                  " A" + " " + arc +  " " + arc + " " + " 0 0 1 " + ((w/2) + (arc*3)) + " " + (weAreDifferent.top + ($("#card4holder").height() + (arc/3)) + arc ) +
                    " H" + ( (w/2) + (arc) ) +
                   " A" + " " + arc +  " " + arc + " " + " 0 0 0 " + (w/2) + " " + (weAreDifferent.top + ($("#card4holder").height() + (arc/3)) + (arc*2 ) ) +
                   " V" + (dolyaTitle.top )
                   );
  
  
   $("#path-myth").attr("d",  "M"  + (w/2) + " " + (0) +                 
                   " V" + (myth.top - 60)  +
                   " A" + " 30" +  " 30" + " 0 0 1 " + (w/2 -  30) + " " + (myth.top - 30) +
                   " H" +  (myth.left ) +
                   " A" + " 30" +  " 30" + " 0 0 0 " + (myth.left-30) + " " + (myth.top) +
                   " V" + (myth.top  + $("#myth-wrap").height() ) +
                   " A" + " 30" +  " 30" + " 0 0 0 " + (myth.left) + " " + (myth.top  + $("#myth-wrap").height() + 30) +
                     " H" +  (w/2 - 30) +
                   " A" + " 30" +  " 30" + " 0 0 1 " + (w/2) + " " + (myth.top  + $("#myth-wrap").height() + 60) +
                    " V" +  (myth.top  + wheel.top - 200) 
                   );
  
  $("#path-values").attr("d",  "M"  + (w/2) + " " + (0) +                 
                   " V" + (values.top - 90) +
                   " A" + " 30" +  " 30" + " 0 0 1 " + (w/2 -  30) + " " + (values.top - 60) +
                   " H" + (w/2 - ($("#values-wrap").width() / 2) ) +
                   " A" + " 30" +  " 30" + " 0 0 0 " + (w/2 - ($("#values-wrap").width() / 2) - 30) + " " + (values.top - 30) +
                   " V" + (values.top + ($("#values-wrap").height() /2) - 50 ) +
                   " A" + " 30" +  " 30" + " 0 0 0 " + (w/2 - ($("#values-wrap").width() / 2) - 0) + " " + (values.top + ($("#values-wrap").height() / 2) - 20) +
                   " H" + (values.left + $("#values-wrap").width() ) +
                   " A" + " 30" +  " 30" + " 0 0 1 " + (values.left + $("#values-wrap").width() + 30) + " " + (values.top + ($("#values-wrap").height() / 2) + 10) +
                   " V" + (principles.top + $("#principles-wrap").height() +30) +
                   " A" + " 30" +  " 30" + " 0 0 1 " + (values.left + $("#values-wrap").width() ) + " " + (principles.top + $("#principles-wrap").height() + 60)  +
                   " H" + (w/2 + 30)  +
                   " A" + " 30" +  " 30" + " 0 0 0 " + (w/2) + " " + (principles.top + $("#principles-wrap").height() + (arc*3)) +
                   " V" +  (servicesTitle.top) 
                   );
                   
$("#path-services").attr("d",  "M"  + (w/2) + " " + (0) +                
                   " V" + ($("#l-services").height() )  
                    );
                    
$("#path-team").attr("d",  "M"  + (w/2) + " " + (0) +                 
                   " V" + (kurt.top - 60)  +
                   " A" + " 30" +  " 30" + " 0 0 1 " + (w/2 - arc) + " " + (kurt.top - arc) +
                   " H" +  (kurt.left + ( $("#card-kurt").width() /2 ) + arc) +
                   " A" + " 30" +  " 30" + " 0 0 0 " + (kurt.left + ( $("#card-kurt").width()/2) ) + " " + (kurt.top) +
                   " V" + (kurt.top  + ( $("#card-kurt").height() /2  ) - arc ) +
                   " A" + " 30" +  " 30" + " 0 0 0 " + (kurt.left + ( $("#card-kurt").width()/2) + arc ) + " " + (kurt.top  + ( $("#card-kurt").height()/2) ) +
                   " H" +  (targ.left + ( $("#card-targ").width() /2  ) - arc ) +
                   " A" + " 30" +  " 30" + " 0 0 1 " + (targ.left + ( $("#card-targ").width() /2 ) ) + " " + (kurt.top  + ( $("#card-kurt").height()/2) + arc) +
                   " V" + (kurt.top  +  $("#card-kurt").height()  ) +
                   " A" + " 30" +  " 30" + " 0 0 1 " + (targ.left + ( $("#card-targ").width() /2 ) - arc) + " " + (kurt.top  + ( $("#card-kurt").height()) + arc) +
                   " H" +  ((w/2) + arc ) +
                   " A" + " 30" +  " 30" + " 0 0 0 " + ( w/2 ) + " " + (kurt.top  + ( $("#card-kurt").height()) + (arc*2)) +
                   " V" + contact.top
                   );
  $("#path-expertise").attr("d",  "M"  + (w/2) + " " + (0) +
                   " V" + (hex1.top - arc - pad)  +
                   " A" + " 30" +  " 30" + " 0 0 1 " + ((w/2) - arc ) + " " + (hex1.top - arc) +
                   " H" +  (hex1.left +  (hexWidth / 2) + arc ) +
                   " A" + " 30" +  " 30" + " 0 0 0 " + (hex1.left + ($("#hex-social").width() / 3) ) + " " + (hex1.top) +
                   " V" + (hex1.top + ($("#hex-social").height() / 2) - arc ) +
                   " A" + " 30" +  " 30" + " 0 0 0 " + (hex1.left + ($("#hex-social").width() / 3) + arc ) + " " + (hex1.top + ($("#hex-social").height() / 2) ) +
                   " H" +  (hex3.left +  hexWidth) +
                   " A" + " 30" +  " 30" + " 0 0 1 " + (hex3.left +  hexWidth + arc ) + " " + (hex1.top + ($("#hex-social").height() / 2) + arc ) +
                   " V" + (hexW.top + ($("#hex-innovative").height()/4 ) - arc ) +
                   " A" + " 30" +  " 30" + " 0 0 1 " + (hex3.left +  hexWidth ) + " " + (hexW.top + ($("#hex-innovative").height()/4 ) ) +
                   " H" +  (hex2.left - 15 ) +
                   " A" + " 30" +  " 30" + " 0 0 0 " + (hex2.left - 15 - arc ) + " " + (hexW.top + ($("#hex-innovative").height()/4 ) +arc ) +
                   " V" + (hexW.top + ($("#hex-innovative").height() ) - arc - 15) +
                   " A" + " 30" +  " 30" + " 0 0 0 " + (hex2.left - 15 ) + " " + (hexW.top + ($("#hex-innovative").height() - 15 )  ) +
                   " H" +  ( (w/2) - arc ) +
                   " A" + " 30" +  " 30" + " 0 0 1 " + (w/2) + " " + (hexW.top + ($("#hex-innovative").height() - 15 + arc )  ) +
                   " V" + (dolyaTitle.top)
                   );
}

let scHeight = '62px';

let scOpenHeight = 'auto';
let scOpenHeight2 = 'auto';
let scOpenHeight3 = 'auto';
let scOpenHeight4 = 'auto';
let scOpenHeight5 = 'auto';
let scOpenHeight6 = 'auto';


function unfoldAdv() {
   
  if (unfoldedAdv === false) {
    document.getElementById("services-card-ag").style.height = scOpenHeight; 
    document.getElementById("services-card-ar").style.height = scHeight;
    document.getElementById("services-card-bs").style.height = scHeight;
    document.getElementById("services-card-tr").style.height = scHeight;
    document.getElementById("services-card-gl").style.height = scHeight;
    document.getElementById("services-card-train").style.height = scHeight;
    document.getElementById("arrow-adv").style.transform = 'rotate(180deg)';
    document.getElementById("arrow-board").style.transform = 'rotate(0deg)';
    document.getElementById("arrow-out").style.transform = 'rotate(0deg)';
    document.getElementById("arrow-team").style.transform = 'rotate(0deg)';
    document.getElementById("arrow-liaison").style.transform = 'rotate(0deg)';
    document.getElementById("arrow-train").style.transform = 'rotate(0deg)';
    unfoldedAdv = true;
    unfoldedOut = unfoldedTeam = unfoldedBoard = unfoldedLiaison = unfoldedTrain = false;
  } else {
    document.getElementById("services-card-ag").style.height = scHeight;
    document.getElementById("arrow-adv").style.transform = 'rotate(0deg)';
   
    unfoldedAdv = false;
   
  };
  connectPaths()
};

function unfoldOut() {
   
  if (unfoldedOut === false) {
    document.getElementById("services-card-ar").style.height = scOpenHeight2; 
    
    document.getElementById("services-card-ag").style.height = scHeight;
    document.getElementById("services-card-bs").style.height = scHeight;
    document.getElementById("services-card-tr").style.height = scHeight;
    document.getElementById("services-card-gl").style.height = scHeight;
    document.getElementById("services-card-train").style.height = scHeight;
    
    document.getElementById("arrow-out").style.transform = 'rotate(180deg)';
    document.getElementById("arrow-adv").style.transform = 'rotate(0deg)';
    document.getElementById("arrow-board").style.transform = 'rotate(0deg)';
    document.getElementById("arrow-team").style.transform = 'rotate(0deg)';
    document.getElementById("arrow-liaison").style.transform = 'rotate(0deg)';
    document.getElementById("arrow-train").style.transform = 'rotate(0deg)';
    unfoldedOut = true;
    unfoldedAdv = unfoldedTeam = unfoldedBoard = unfoldedLiaison = unfoldedTrain = false;
  } else {
    document.getElementById("services-card-ar").style.height = scHeight; 
    document.getElementById("arrow-out").style.transform = 'rotate(0deg)';
    unfoldedOut = false;
  };
  connectPaths()
};

function unfoldTeam() {
   
  if (unfoldedTeam === false) {
    document.getElementById("services-card-bs").style.height = scOpenHeight3; 
    document.getElementById("services-card-ag").style.height = scHeight;
    document.getElementById("services-card-ar").style.height = scHeight;
    document.getElementById("services-card-tr").style.height = scHeight;
    document.getElementById("services-card-gl").style.height = scHeight;
    document.getElementById("services-card-train").style.height = scHeight;
    document.getElementById("arrow-team").style.transform = 'rotate(180deg)';
    document.getElementById("arrow-adv").style.transform = 'rotate(0deg)';
    document.getElementById("arrow-out").style.transform = 'rotate(0deg)';
    document.getElementById("arrow-board").style.transform = 'rotate(0deg)';
    document.getElementById("arrow-liaison").style.transform = 'rotate(0deg)';
    document.getElementById("arrow-train").style.transform = 'rotate(0deg)';
    unfoldedTeam = true;
    unfoldedAdv = unfoldedOut = unfoldedBoard = unfoldedLiaison = unfoldedTrain = false;
  } else {
    document.getElementById("services-card-bs").style.height = scHeight; 
    document.getElementById("arrow-team").style.transform = 'rotate(0deg)';
    unfoldedTeam = false;
  };
  connectPaths()
};



/* Make a container function that checks the event for which element is clicked, then it runs the rollout function for that one, and the roll-in functions for the others.*/
function unfoldBoard() {
   
  if (unfoldedBoard === false) {
    document.getElementById("services-card-tr").style.height = scOpenHeight4; 
    document.getElementById("services-card-ag").style.height = scHeight;
    document.getElementById("services-card-ar").style.height = scHeight;
    document.getElementById("services-card-bs").style.height = scHeight;
    document.getElementById("services-card-gl").style.height = scHeight;
    document.getElementById("services-card-train").style.height = scHeight;
    document.getElementById("arrow-board").style.transform = 'rotate(180deg)';
    document.getElementById("arrow-adv").style.transform = 'rotate(0deg)';
    document.getElementById("arrow-out").style.transform = 'rotate(0deg)';
    document.getElementById("arrow-team").style.transform = 'rotate(0deg)';
    document.getElementById("arrow-liaison").style.transform = 'rotate(0deg)';
    document.getElementById("arrow-train").style.transform = 'rotate(0deg)';
    unfoldedBoard = true;
    unfoldedAdv = unfoldedOut = unfoldedTeam = unfoldedLiaison = unfoldedTrain = false;
  } else {
    document.getElementById("services-card-tr").style.height = scHeight; 
    document.getElementById("arrow-board").style.transform = 'rotate(0deg)';
    unfoldedBoard = false;
  };
  connectPaths()
};

function unfoldLiaison() {
   
  if (unfoldedLiaison === false) {
    document.getElementById("services-card-gl").style.height = scOpenHeight5; 
    document.getElementById("services-card-ag").style.height = scHeight;
    document.getElementById("services-card-ar").style.height = scHeight;
    document.getElementById("services-card-bs").style.height = scHeight;
    document.getElementById("services-card-tr").style.height = scHeight;
    document.getElementById("services-card-train").style.height = scHeight;
    document.getElementById("arrow-liaison").style.transform = 'rotate(180deg)';
    document.getElementById("arrow-adv").style.transform = 'rotate(0deg)';
    document.getElementById("arrow-out").style.transform = 'rotate(0deg)';
    document.getElementById("arrow-team").style.transform = 'rotate(0deg)';
    document.getElementById("arrow-board").style.transform = 'rotate(0deg)';
    document.getElementById("arrow-train").style.transform = 'rotate(0deg)';
    unfoldedLiaison = true;
    unfoldedAdv = unfoldedOut = unfoldedTeam = unfoldedBoard = unfoldedTrain = false;
  } else {
    document.getElementById("services-card-gl").style.height = scHeight; 
    document.getElementById("arrow-liaison").style.transform = 'rotate(0deg)';
    unfoldedLiaison = false;
  };
  connectPaths()
};

function unfoldTrain() {
   
  if (unfoldedTrain === false) {
    document.getElementById("services-card-train").style.height = scOpenHeight6; 
     document.getElementById("services-card-ag").style.height = scHeight;
    document.getElementById("services-card-ar").style.height = scHeight;
    document.getElementById("services-card-bs").style.height = scHeight;
    document.getElementById("services-card-tr").style.height = scHeight;
    document.getElementById("services-card-gl").style.height = scHeight;
    document.getElementById("arrow-train").style.transform = 'rotate(180deg)';
    document.getElementById("arrow-adv").style.transform = 'rotate(0deg)';
    document.getElementById("arrow-out").style.transform = 'rotate(0deg)';
    document.getElementById("arrow-team").style.transform = 'rotate(0deg)';
    document.getElementById("arrow-liaison").style.transform = 'rotate(0deg)';
    document.getElementById("arrow-board").style.transform = 'rotate(0deg)';
    unfoldedTrain = true;
    unfoldedAdv = unfoldedOut = unfoldedTeam = unfoldedBoard = unfoldedLiaison = false;
  } else {
    document.getElementById("services-card-train").style.height = scHeight; 
    document.getElementById("arrow-train").style.transform = 'rotate(0deg)';
    unfoldedTrain = false;
  };
  connectPaths()
};

