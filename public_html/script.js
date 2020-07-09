                                            
                                            // INIT.
var justify = false;
let height = 0;
let scHeight = '82px';
let scOpenHeight = 'auto';
let scPadding = '30px';
let animPopIn = 'pop-in2 0.7s ease-out forwards ';
let mobile = false;
var animating = false;
var h1, h2, h3, h4, h5, h6, h7;
var scrCount = 0;

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

if (w > 1099) {mobile = true}
if (w < 1099) {                                                                 // sets tagline onto two lines when in mobile/portrait mode
    $(".home__tagline").html("The<span class='home__golden-thread'> Golden Thread</span> of<div> Sustainable &nbsp;Success</div>");
}

getContentHeight();

let drawn = {                                                                   // records sections as drawn
    'home': false,
    'about': false,
    'expertise': false,
    'dolya': false,
    'values': false,
    'services': false,
    'team': false
};   

let trigger = {                                                                 // define animation trigger points on scroll
    'about': $(".about__content").offset().top - 240,
    'expertise': $(".expertise__content").offset().top - 240,
    'dolya': $(".dolya__content").offset().top - 240,
    'values': $(".values__content").offset().top - 240,
    'services': $(".services__content").offset().top - 240,
    'team': $(".team__content").offset().top - 240
};

let teamBios = {
    'team1': { 
        'name' : "Kurt Looyens", 
        'bioHtml': "<p>Kurt is a seasoned executive with a vast experience in international business. He gained vast experience in transforming business areas into lean, profitable and sustainable divisions by orchestrating effective compliance, growth, operational and social engagement strategies.</p><p>Kurt loves to communicate actively and values relationships highly. Respect, creativity and hard work are key principles he abides by in all his undertakings. He is a strong believer of how things are done is as important as what things you have done.</p><p>In his free time he enjoys a ride on his racing bike and his occasional glass of wine.</p>",
        'linkedIn' : "https://www.linkedin.com/in/kurtlooyens/"
    },
    'team2': { 
        'name' : "Tereza Patience", 
        'bioHtml': '<p>Tereza is an executive level legal professional with both broad and specialist experience in areas of commercial, regulatory and European / international law.</p><p>Qualified as a solicitor in the UK and soon to be qualified in Gibraltar, Tereza has worked in private practice, in-house and as a consultant for a diverse range of corporate clients both within Europe and further afield.</p><p>Outside of the office, Tereza enjoys sailing and maintaining her turquoise sailboat as well as being a part-time mermaid and a full-time ocean lover.</p>',
        'linkedIn' : "https://www.linkedin.com/in/terezapatience/"
    },
    'team3': { 
        'name' : "William Rawley", 
        'bioHtml': "<p>Will is a qualified solicitor, admitted in England & Wales, Hong Kong and Gibraltar. He has over 25 years’ experience working at top tier law firms and financial institutions and is one of a rare breed of lawyers who has successfully transitioned from legal advisory to front desk client facing roles.</p><p>Will values honesty and integrity and thrives in situations requiring innovative and imaginative solutions. The principle of commerciality drives his everyday approach to business as he always looks to the big picture in any situation.</p><p>When not answering his phone, he can be found surfing a wave on his board somewhere in Southern Spain.</p>",
        'linkedIn' : "https://www.linkedin.com/in/william-rawley-b83b1958/"
    },
    'team4': { 
        'name' : "Targ Patience", 
        'bioHtml': "<p>Targ is an accomplished regulatory expert, compliance leader and keynote speaker on international regulation, compliance, FinTech and financial markets.</p><p>In addition to in-house C-suite experience, Targ spent seven years leading a boutique compliance and regulatory change consultancy, helping major financial institutions and market infrastructures meet the challenges of post-crisis regulatory and market reforms.</p><p>Aside from being a regulatory geek and the captain of his own sailboat, Targ loves trying his hand at any new adrenaline sport he can find.</p>",
        'linkedIn' : "https://www.linkedin.com/in/targ-patience-b268961a/"
    },
    'default': {
        'name' : "Meet the Team",
        'bioHtml' : "Click the photos to find out more about us.",
        'linkedIn' : "https://www.linkedin.com/company/dolyaconsulting/about/"
    }
};


                                            // GLOBAL FUNCTIONS


function getContentHeight() {
    h1 = $(".home__content").height();                                          // section heights
    h2 = $(".about__content").height();
    h3 = $(".expertise__content").height();
    h4 = $(".dolya__content").height();
    h5 = $(".values__content").height();
    h6 = $(".services__content").height();
    h7 = $(".team__content").height();
}

window.setInterval(function(){
  if (animating === false) {
        connectPaths();
  }
}, 1000);

function byId(id) {                                                             // getelementbyid shorthand 
    return document.getElementById(id);
}

function byClass(cl) {                                                          // getelementsbyclassname shorthand 
    return document.getElementsByClassName(cl)[0];
}

function qsId(id) {                                                             // shorthand for access to .style props ('quick style')
    return document.getElementById(id).style;
}

function qsCl(cl) {                                                             // shorthand for access to .style props ('quick style')
    return document.getElementsByClassName(cl)[0].style;
}

function getPathLengths() {
    for(var prop in drawn) {
        var path = byCl('path-' + prop); 
        var pathLength = Math.floor(path.getTotalLength());
        $(".path-" + prop).css({
            'stroke-dasharray' : pathLength,
            'stroke-dashoffset' : pathLength
        });
    }
}

                                            // WINDOW EVENTS

window.onload = function(){
    connectPaths();
    homeAnim();
};

$(document).ready(function(){
    var menuList = $('.menu__list');
    
    $('.menu').click(function(){
        if (menuList.css('display') == 'none') {
            menuList.css({
                'display': 'flex',
                'opacity': 1
            });
        } else { 
            menuList.css({
                'display': 'none',
                'opacity': 0
            });
        }
    });
});

$(window).resize(function () {
    w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    if (w > 1099) {mobile = false} else {mobile = true}
    getContentHeight();
                                            
    if (mobile === true) {
        $(".home__tagline").html("The<span class='home__golden-thread'> Golden Thread</span> of<div> Sustainable &nbsp;Success</div>");    
    } else {
        $(".home__tagline").html("<div id='the'>The</div> <div class='home__golden-thread'>Golden Thread</div><div> of Sustainable Success</div>");
    }
    if (drawn.home) { 
        qsCl("home__tagline").color = 'var(--text-color)';
        qsCl("home__golden-thread").color = 'var(--gold)';
    }
    
    connectPaths();
    toggleCard();
});

$(window).scroll(function() {    
                                                                                
    height = $(window).scrollTop();                                             // parallax bg image
    if (scrCount > 5) {
        var pos = 150 - height/10;
        scrCount = 0;
    }
    scrCount++;
    var pos = 150 - height/10;
    $(".about__background").css({
        transform: 'translateY(' + pos + 'px)'
    });
    
    
                                                                                // checks window position and triggers section animations at set points
    if (!drawn.team) {                                                          // skip the checks if last section (i.e - all sections) already drawn
        if (height > trigger.about && drawn.home) {
            if ( w > 1099) {
                elementsPopIn("about", 0.4, 0.7, 5, 4);                         // (section | initial delay in seconds | incremental delay | duration | num of elements)
            } else {
                elementsPopIn("about", 0.4, 0.5, 5, 4);
            }
        }
        if (height > trigger.expertise && !drawn.expertise) { 
            if ( w > 1099) {
                elementsPopIn("expertise", 0.5, 0.4, 4, 5);                     // (section | initial delay in seconds | incremental delay | duration | num of elements)
            } else {
                elementsPopIn("expertise", 0.4, 0.2, 4, 5);
            }
        }
        if (height > trigger.dolya && !drawn.dolya && drawn.expertise) { 
            elementsFadeIn("dolya", 5);                                         // (section | duration in seconds)
        }
        if (height > trigger.values && !drawn.values && drawn.dolya) { 
            if ( w > 1099) {
                elementsPopIn("values", 1, 0.3, 5, 4);
                elementsFadeIn("values", 5);                                    // (section | initial delay in seconds | incremental delay | duration | num of elements)
            } else {
                elementsPopIn("values", 0.6, 0.2, 5, 4);
                elementsFadeIn("values", 6);
            }
        }
        if (height > trigger.services && !drawn.services && drawn.values) { 
            if ( w > 1099) {
                elementsPopIn("services", 0.1, 0.2, 4, 6);                      // (section | initial delay in seconds | incremental delay | duration | num of elements)
            } else {
                elementsPopIn("services", 0.1, 0.2, 5.5, 6);
            }
        }
        if (height > trigger.team && !drawn.team && drawn.services) { 
            ( w > 1099) ? elementsPopIn("team", 0.6, 0.3, 4, 5) : elementsPopIn("team", 0.4, 0.3, 6.5, 5);                // (section | initial delay in seconds | incremental delay | duration | num of elements)
        }
    }
});



                                            // ELEMENT ANIMATION & ACTIONS

function homeAnim() {                                                           //homepage animation on load  
    qsCl("home__logo-fill").left = '-177px';
    qsCl("home__logo-dolya").color = 'black';
    qsCl("home__logo-consulting").color = 'black';
    qsCl("home__logo-frame").opacity = '1';
    qsCl("home__tagline-line").width = '60px';
    qsCl("home__mission-statement").color = '#303030';
    qsCl("home__tagline").color = '#303030';
    qsCl("home__golden-thread").color = 'var(--gold)';
    qsCl("path-logo").animation = 'dash 3s ease-in forwards 1s'
    qsCl("path-home").animation = 'dash 5s ease-in-out forwards 4s';
    drawn.home = true;
}                       

function elementsPopIn(section, initDelay, incrDelay, dur, num) {               // animates section elements with pop-in
    animating = true;
    for (var i = 0; i < num; i++) {
        qsCl(section + '-' + (i+1)).animation = animPopIn + (initDelay + (incrDelay * i)) + 's';
    }
    qsCl("path-" + section).animation = 'dash ' + dur + 's linear forwards';    // animates section thread path
    drawn[section] = true; 
    setTimeout( () => {
        animating = false;
    }, ((dur)*2000) );
}

function elementsFadeIn(section, dur) {                                         // animates section elements with fade-in
    $("." + section + " .blue-line").css({
      'width': '30px',
      
    });
    $("." + section + " .heading, ." + section + "__content .text").css({
      'opacity': '1'
    });
    qsCl("path-" + section).animation = 'dash ' + dur + 's linear forwards';
    drawn[section] = true; 
}

function toggleCard(element) {                                                  // toggles the services cards open/close when clicked.
    var opened = false;                                                         // var for checking clicked card state after reset 
    if ( element) { 
        var cardClicked = byId(element.id);                                     // clicked card
        if (cardClicked.style.height == scOpenHeight) {                         // checks if card is open or closed
            opened = true;                                                      // if open, then set opened as true 
        } 
    }
    $(".services__blue-arrow").css({                                            // reset all arrows in services section to closed position
      'transform': 'rotate(0deg)'
    });
    $(".services__content .card").css({                                         // reset all cards in services section to closed position
      'height': scHeight,
      'padding':  '30px 30px'
    });
    $(".services__content .blue-line").css({                                    // reset all cards in services section to closed position
      'border-bottom': '2px solid white'
    });
    $(".services__content .text").css({                                         // reset all cards in services section to closed position
      'color': 'white'
    });
    
    if (element && !opened) {
                                                                                // if card was not open when clicked, open now
            cardClicked.style.height = scOpenHeight;                            // sets the height of the clicked card to open position
            $("#" + cardClicked.id + " .services__blue-arrow").css({            // rotates the arrow of the clicked card
              'transform': 'rotate(180deg)'
            });
            $("#" + cardClicked.id + " .blue-line").css({                       // rotates the arrow of the clicked card
              'border-bottom':  '2px solid var(--turquoise)'
            });
            $("#" + cardClicked.id + " .text").css({                            
              'color': 'black'
            });
            $("#" + cardClicked.id).css({                       // rotates the arrow of the clicked card
              'padding':  '50px 50px'
            });
    }
    connectPaths();
}

function teamBioSelect(element) {
    var temp = element.style.backgroundColor;
    $("#team-pic-wrap .card").css({
        'background-color':'white', 
        'color':'var(--txt-color)'
    });
    $("#team-pic-wrap img").css({'filter':'grayscale(100%)'});
    $("#team5 .text").html(teamBios.default.bioHtml);
    $("#team5 .heading").html(teamBios.default.name);
    if ( temp !== 'var(--turquoise)') {
        qsId(element.id).backgroundColor = 'var(--turquoise)';
        qsId(element.id).color = '#f9f9f9';
        $("#" + element.id + " img").css({'filter':'none'});
        $("#team5 .text").html(teamBios[element.id].bioHtml);
        $("#team5 .heading").html(teamBios[element.id].name);
        $("#team5 a").attr("href", teamBios[element.id].linkedIn);
    } else {
        $("#team-pic-wrap img").css({'filter':'none'});
    }
}



                                            // SVG PATHS - GOLDEN THREAD

function connectPaths() {
    
    
    var thread = $(".home__logo-thread").offset();                                         // gets positions of threaded elements, used to calculate thread paths
    var titleCard = $(".home__title-wrap");
    var mission = $(".home__mission-statement");
    
    var aboutTitle = $(".about__title").offset(); 
   
    var dolyaTitle = $(".dolya__title").position();
    
    var values = $(".values__values");
    var principles = $(".values__principles");
    
    var servicesTitle = $(".services__title").position();

    var kurt = $("#team1").position();
    var targ = $("#team4").position();
    
    var myth = $(".dolya__content-inner");
    var valuesTitle = $(".values__title").position();
    
    var contact = $(".contact__title").position();
    
    var hex1 = $(".expertise-1");
    var hex2 = $(".expertise-2");
    var hex3 = $(".expertise-3");
    var hex4 = $(".expertise-4");
    var hexW = $(".expertise__wrap-2").position();
    var hexWidth = 0;
    if (w > 600) {
      hexWidth = (200/3)*1.8;
    } else hexWidth = (( (w/100) * 23 ) /3) * 2;
    
    var z = 0;
    if (w > 740) {
        z = 13;
    }
    
    var arc = 30;
    var pad = 30;
    var threadOffset = 237;
  
    if (w > 1099) {
        
        $(".path-logo").attr("d",  "M"  + (thread.left)  + " " + (thread.top + 1) +
                        " H" + (thread.left + threadOffset)
                        );
        
        $(".path-home").attr("d",  "M"  + (thread.left + threadOffset) + " " + (thread.top + 1) +
                        " H" + (titleCard.offset().left + titleCard.width() - 10 ) +
                        " A" + " " + arc +  " " + arc + " 0 0 1 " + (titleCard.offset().left + titleCard.width() + arc - 10  ) + " " + (thread.top + arc) +
                        " V" + (mission.offset().top + mission.height()) +
                        " A" + " " + arc +  " " + arc + " 0 0 1 " + (titleCard.offset().left + titleCard.width() - 10  ) + " " + (mission.offset().top + mission.height() + arc) +
                        " H" + ( mission.offset().left + arc) +
                        " A" + " " + arc +  " " + arc + " 0 0 0 " + (w/2 )  + " " + (mission.offset().top + mission.height() + arc*2 ) +
                        " V" + (aboutTitle.top) 
                        );
        
    } else {
        $(".path-logo").attr("d",  "M"  + (thread.left)  + " " + (thread.top) +
                        " H" + (thread.left + threadOffset)
                        );
        $(".path-home").attr("d",  "M"  + (thread.left + threadOffset) + " " + (thread.top) +    // fix init alignment issue
                        " H" + (titleCard.offset().left + titleCard.width()  ) +
                        " A" + " " + arc +  " " + arc + " 0 0 1 " + (titleCard.offset().left + (titleCard.width()) + arc ) + " " + (thread.top + arc) +
                        " V" + (mission.offset().top + mission.height() ) +
                        " A" + " " + arc +  " " + arc + " 0 0 1 " + (titleCard.offset().left + (titleCard.width())  ) + " " + (mission.offset().top + mission.height() + arc) +
                        " H" + ((w/2) + arc) +
                        " A" + " " + arc +  " " + arc + " 0 0 0 " + (w/2 ) + " " + (mission.offset().top + mission.height() + arc + arc ) +
                        " V" + (aboutTitle.top) 
                        );
    }
                   
    $(".path-about").attr("d",  "M"  + (w/2) + " " + (0) + 
                    " V" + (dolyaTitle.top ) 
                    );
    
    $(".path-dolya").attr("d",  "M"  + (w/2) + " " + (0) +                 
                    " V" + (myth.position().top - arc)  +
                    " A" + " " + arc +  " " + arc + " 0 0 1 " + (w/2 -  arc) + " " + myth.position().top +
                    " H" +  (myth.position().left + arc) +
                    " A" + " " + arc +  " " + arc + " 0 0 0 " + myth.position().left + " " + (myth.position().top + arc) +
                    " V" + (myth.position().top  + myth.outerHeight() - arc) +
                    " A" + " " + arc +  " " + arc + " 0 0 0 " + (myth.position().left + arc) + " " + (myth.position().top  + myth.outerHeight() ) +
                    " H" +  (w/2 - arc) +
                    " A" + " " + arc +  " " + arc + " 0 0 1 " + (w/2) + " " + (myth.position().top  + myth.outerHeight() + arc) +
                    " V" +  valuesTitle.top 
                    );
  
    $(".path-values").attr("d",  "M"  + (w/2) + " " + (0) +                 
                    " V" + (values.position().top - arc - (pad*2) ) +
                    " A" + " " + arc +  " " + arc + " 0 0 1 " + (w/2 -  arc) + " " + (values.position().top - arc - pad) +
                    " H" + (values.position().left ) +
                    " A" + " " + arc +  " " + arc + " 0 0 0 " + (values.position().left - arc) + " " + (values.position().top - arc) +
                    " V" + (values.position().top + (values.outerHeight() /2) - arc - 20 ) +
                    " A" + " " + arc +  " " + arc + " 0 0 0 " + (values.position().left  ) + " " + (values.position().top + (values.outerHeight() / 2) - 20) +
                    " H" + (values.position().left + values.outerWidth()  ) +
                    " A" + " " + arc +  " " + arc + " 0 0 1 " + (values.position().left + values.outerWidth() + arc) + " " + (values.position().top + (values.outerHeight() / 2) - 20 + arc) +
                    " V" + (principles.position().top + principles.outerHeight() ) +
                    " A" + " " + arc +  " " + arc + " 0 0 1 " + (values.position().left + values.outerWidth() ) + " " + (principles.position().top + principles.outerHeight() + arc)  +
                    " H" + (w/2 + arc)  +
                    " A" + " " + arc +  " " + arc + " 0 0 0 " + (w/2) + " " + (principles.position().top + principles.outerHeight() + (arc*2)) +
                    " V" +  (servicesTitle.top) 
                    );
                   
    $(".path-services").attr("d",  "M"  + (w/2) + " " + (0) +                
                    " V" + ($(".services__content").height() )  
                    );
                    
    $(".path-team").attr("d",  "M"  + (w/2) + " " + (0) +                 
                    " V" + (kurt.top - arc - pad)  +
                    " A" + " " + arc +  " " + arc + " 0 0 1 " + (w/2 - arc) + " " + (kurt.top - arc) +
                    " H" +  (kurt.left + ( $("#team1").width() /2 ) + arc) +
                    " A" + " " + arc +  " " + arc + " 0 0 0 " + (kurt.left + ( $("#team1").width()/2) ) + " " + (kurt.top) +
                    " V" + (kurt.top  + ( $("#team1").height() /2  ) - arc ) +
                    " A" + " " + arc +  " " + arc + " 0 0 0 " + (kurt.left + ( $("#team1").width()/2) + arc ) + " " + (kurt.top  + ( $("#team1").height()/2) ) +
                    " H" +  (targ.left + ( $("#team4").width() /2  ) - arc ) +
                    " A" + " " + arc +  " " + arc + " 0 0 1 " + (targ.left + ( $("#team4").width() /2 ) ) + " " + (kurt.top  + ( $("#team1").height()/2) + arc) +
                    " V" + (kurt.top  +  $("#team1").height()  ) +
                    " A" + " " + arc +  " " + arc + " 0 0 1 " + (targ.left + ( $("#team4").width() /2 ) - arc) + " " + (kurt.top  + ( $("#team1").height()) + arc) +
                    " H" +  ((w/2) + arc ) +
                    " A" + " " + arc +  " " + arc + " 0 0 0 " + ( w/2 ) + " " + (kurt.top  + ( $("#team1").height()) + (arc*2)) +
                    " V" + contact.top
                    );
                    
    $(".path-expertise").attr("d",  "M"  + (w/2) + " " + (0) +
                    " V" + (hex1.position().top - arc - pad)  +
                    " A" + " " + arc +  " " + arc + " 0 0 1 " + ((w/2) - arc ) + " " + (hex1.position().top - arc) +
                    " H" +  (hex1.position().left +  (hexWidth / 2) + arc ) +
                    " A" + " " + arc +  " " + arc + " 0 0 0 " + (hex1.position().left + (hex1.outerWidth() / 3) ) + " " + (hex1.position().top) +
                    " V" + (hex1.position().top + (hex1.outerHeight() / 2) - arc + 3 + z) +
                    " A" + " " + arc +  " " + arc + " 0 0 0 " + (hex1.position().left + (hex1.outerWidth() / 3) + arc ) + " " + (hex1.position().top + (hex1.outerHeight() / 2) + 3 + z) +
                    " H" +  (hex3.position().left +  hexWidth) +
                    " A" + " " + arc +  " " + arc + " 0 0 1 " + (hex3.position().left +  hexWidth + arc ) + " " + (hex1.position().top + (hex1.outerHeight() / 2) + arc ) +
                    " V" + (hexW.top + (hex4.outerHeight()/4 ) - arc ) +
                    " A" + " " + arc +  " " + arc + " 0 0 1 " + (hex3.position().left +  hexWidth ) + " " + (hexW.top + (hex4.outerHeight()/4 ) ) +
                    " H" +  (hex2.position().left - 15 ) +
                    " A" + " " + arc +  " " + arc + " 0 0 0 " + (hex2.position().left - 15 - arc ) + " " + (hexW.top + (hex4.outerHeight()/4 ) +arc ) +
                    " V" + (hexW.top + (hex4.outerHeight() ) - arc - 15) +
                    " A" + " " + arc +  " " + arc + " 0 0 0 " + (hex2.position().left - 15 ) + " " + (hexW.top + (hex4.outerHeight() - 15 )  ) +
                    " H" +  ( (w/2) - arc ) +
                    " A" + " " + arc +  " " + arc + " 0 0 1 " + (w/2) + " " + (hexW.top + (hex4.outerHeight() - 15 + arc )  ) +
                    " V" + (dolyaTitle.top)
                    );
}









