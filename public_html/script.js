                                            
                                            // INIT.
var justify = false;
let height = 0;
let scHeight = '0px';
let scOpenHeight = 'auto';
let animPopIn = 'pop-in2 0.7s ease-out forwards ';
let mobile = false;
let subPixelAdjust = 1;                                                         // adjusts for non-rastered svg alignment with logo thread

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

if (w > 1099) {mobile = true}

var h1 = $("#l-home").height();                                                 // section heights
var h2 = $("#l-about").height();
var h3 = $("#l-expertise").height();
var h4 = $("#l-dolya").height();
var h5 = $("#l-values").height();
var h6 = $("#l-services").height();
var h7 = $("#l-team").height();

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
    'about': $("#about").offset().top - 140,
    'expertise': $("#expertise").offset().top - 140,
    'dolya': $("#dolya").offset().top - 140,
    'values': $("#values").offset().top - 140,
    'services': $("#services").offset().top - 140,
    'team': $("#team").offset().top - 140
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

//$("#test").css({'top' : trigger.expertise});


                                            //$("#test").html("w" + w + " h" + h);

if (w < 1099) {                                                                 // sets tagline onto two lines when in mobile/portrait mode
    $("#tagline").html("The<span id='golden-thread'> Golden Thread</span> of<div> Sustainable &nbsp;Success</div>");
}

if (w > 749) {
        scHeight = "115px";
    } else { scHeight = "62px"}

                                            // GLOBAL FUNCTIONS

function byId(id) {                                                             // getelementbyid shorthand 
    return document.getElementById(id);
}

function qs(id) {                                                               // shorthand for access to .style props ('quick style')
    return document.getElementById(id).style;
}

function getPathLengths() {
    for(var prop in drawn) {
        var path = byId('path-' + prop); 
        var pathLength = Math.floor(path.getTotalLength());
        $("#path-" + prop).css({
            'stroke-dasharray' : pathLength,
            'stroke-dashoffset' : pathLength
        });
        console.log("#path-" + prop + " : " + pathLength)
    }
}


function svgAlign() {                                                           // adjusts for non-rastered svg alignment with logo thread when vh is an odd number
    var count = 1.5;
    
    if (w > 1099) {
        count -= .5;
        if (h % 2 !== 0) {
            count += .5;
        }
    }
    
    if (w < 1100) {
        if (h % 2 !== 0) {
            count -= .5;
        }
    }
    
    if (w < 500) {
        count -= .5;
    }
    subPixelAdjust = count;
}                                                                               // remove need for this with new alignment!!
                                            // WINDOW EVENTS

window.onload = function(){
    connectPaths();
    //getPathLengths();          
    homeAnim();
};

$(window).resize(function () {
    /*getPathLengths();
    var nLength = Math.floor(byId('path-expertise').getTotalLength());  
    var dashOff = byId("path-expertise").style.strokeDashoffset;
    $("#test").html(nLength + " " + dashOff);  */
    
    w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    if (w > 1099) {mobile = false} else {mobile = true}
    h1 = $("#l-home").height();                                         
    h2 = $("#l-about").height();
    h3 = $("#l-expertise").height();
    h4 = $("#l-dolya").height();
    h5 = $("#l-values").height();
    h6 = $("#l-services").height();
    h7 = $("#l-team").height();
                                            //$("#test").html("w" + w + " h" + h);
    if (mobile === true) {
        $("#tagline").html("The<span id='golden-thread'> Golden Thread</span> of<div> Sustainable &nbsp;Success</div>");    
    } else {
        $("#tagline").html("<div id='the'>The</div> <div id='golden-thread'>Golden Thread</div><div> of Sustainable Success</div>");
    }
    if (drawn.home) { 
        qs("tagline").color = 'var(--text-color)';
        qs("golden-thread").color = 'var(--gold)';
    }
    if (w > 749) {
        scHeight = "115px";
    } else { scHeight = "62px"}
    
    connectPaths();
    toggleCard();
});

$(window).scroll(function() {    
    /*var nLength = Math.floor(byId('path-expertise').getTotalLength());                           
    var el = byId("path-expertise");
    var pLength = el.pathLength;
    
    $("#test").html(pLength); */                          
                                                             // checks window position and triggers section animations at set points
    height = $(window).scrollTop();
    var pos = Math.floor(150 - height/10);
    $(".about__background").css({
        top: (pos + "px")
        });
                                            //$("#test").html("w" + w + " h" + h);
    
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
                elementsPopIn("expertise", 0.5, 0.4, 4, 5);                        // (section | initial delay in seconds | incremental delay | duration | num of elements)
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
                elementsFadeIn("values", 5);                    // (section | initial delay in seconds | incremental delay | duration | num of elements)
            } else {
                elementsPopIn("values", 0.6, 0.2, 5, 4);
                elementsFadeIn("values", 6);
            }
        }
        if (height > trigger.services && !drawn.services && drawn.values) { 
            if ( w > 1099) {
                elementsPopIn("services", 0.1, 0.2, 4, 6);                         // (section | initial delay in seconds | incremental delay | duration | num of elements)
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

function homeAnim() {   //homepage animation on load  
    qs("logo-img-fill").left = '-177px';
    qs("logo-thread").width = '238px';
    qs("logo-text-dolya").color = 'black';
    qs("logo-text-consulting").color = 'black';
    qs("logo-wrap").opacity = '1';
    qs("tagline-line").width = '60px';
    qs("mission-statement").color = '#303030';
    qs("tagline").color = '#303030';
    qs("path-home").animation = 'dash 5s ease-in-out forwards 4s';
    qs("golden-thread").color = 'var(--gold)';
    drawn.home = true;
}                       




/*  Refactor to use nth-child?  Use wrap Ids?  */
function elementsPopIn(section, initDelay, incrDelay, dur, num) {               // animates section elements with pop-in
    for (var i = 0; i < num; i++) {
        qs(section + (i+1)).animation = animPopIn + (initDelay + (incrDelay * i)) + 's';
    }
    qs("path-" + section).animation = 'dash ' + dur + 's linear forwards';      // animates section thread path
    drawn[section] = true; 
}

function elementsFadeIn(section, dur) {                                         // animates section elements with fade-in
    $("#l-" + section + " .blue-line").css({
      'width': '30px',
      
    });
    $("#l-" + section + " .heading, #l-" + section + " .text").css({
      'opacity': '1'
    });
    qs("path-" + section).animation = 'dash ' + dur + 's linear forwards';
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
    $("#l-services .blue-arrow").css({                                          // reset all arrows in services section to closed position
      'transform': 'rotate(0deg)'
    });
    
    $("#l-services .card").css({                                                // reset all cards in services section to closed position
      'height': scHeight
    });
    
    $("#l-services .blue-line").css({                                           // reset all cards in services section to closed position
      'border-bottom': '2px solid white'
    });
     $("#l-services .text").css({                                               // reset all cards in services section to closed position
      'color': 'white'
    });
    if ( element) {
        if (!opened) {                                                          // if card was not open when clicked, open now
            cardClicked.style.height = scOpenHeight;                            // sets the height of the clicked card to open position
            $("#" + cardClicked.id + " .blue-arrow").css({                      // rotates the arrow of the clicked card
              'transform': 'rotate(180deg)'
            });
            $("#" + cardClicked.id + " .blue-line").css({                       // rotates the arrow of the clicked card
              'border-bottom':  '2px solid var(--turquoise)'
            });
            $("#" + cardClicked.id + " .text").css({                            // rotates the arrow of the clicked card
              'color': 'black'
            });
        }
    }
    connectPaths();
}

function teamBioSelect(element) {
    var temp = element.style.backgroundColor;
    $("#team-pic-wrap .card").css({'background-color':'white', 'color':'var(--txt-color)'});
    $("#team-pic-wrap img").css({'filter':'grayscale(100%)'});
    $("#team5 .text").html(teamBios.default.bioHtml);
    $("#team5 .heading").html(teamBios.default.name);
    if ( temp !== 'var(--turquoise)') {
        qs(element.id).backgroundColor = 'var(--turquoise)';
        qs(element.id).color = '#f9f9f9';
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
 
    svgAlign();                                                    
    
    var x = $("#logo-thread").offset();                                         //takes positions of threaded elements, used to calculate thread paths
    var thread = $("#golden-thread").offset();
    var aboutThreadStart = $("#title-about").offset();  
    var titleCard = $("#title-page-text-wrap").offset();
    var mission = $("#mission-statement").offset();
    var aboutSection = $("#l-about").position();
    var whoWeAre = $("#who-we-are").position();
    var whoWeAreSize = $("#who-we-are").position();
    var whatWeDo = $("#card2holder").position();
    var ourClients = $("#card3holder").position();
    var weAreDifferent = $("#card4holder").position();
    
    var expertise = $("#expertise-wrap").position();
    var values = $(".values__values").position();
    var principles = $(".values__principles").position();
    
    var dolyaTitle = $("#title-dolya").position();
    
    var servicesTitle = $("#title-services").position();

    
    var kurt = $("#team1").position();
    var targ = $("#team4").position();
    
    var myth = $("#myth-wrap").position();
    var valuesTitle = $(".values__title-wrap").position();
    
    var contact = $("#title-contact").position();
    
    var hex1 = $("#expertise1").position();
    var hex2 = $("#expertise2").position();
    var hex3 = $("#expertise3").position();
    var hex4 = $("#expertise4").position();
    var hex5 = $("#expertise5").position();
    var hexW = $("#expertise-wrap-2").position();
    var hexWidth = 0;
    if (w > 600) {
      hexWidth = (200/3)*1.8;
    } else hexWidth = (( (w/100) * 23 ) /3) * 2;
    var z = 0;
    if (w > 740) {
        z = 13;
    }
    //var height = $(window).scrollTop();
    //$("#test").html(Math.floor(x.top));
    
    var arc = 30;
    var pad = 30;
  
    if (w > 1099) {
        $("#path-home").attr("d",  "M"  + (x.left + 237) + " " + (x.top + subPixelAdjust) +
                        " H" + (titleCard.left + ($("#title-page-text-wrap").width()) - 10 ) +
                        " A" + " " + arc +  " " + arc + " 0 0 1 " + (titleCard.left + ($("#title-page-text-wrap").width()) + arc - 10  ) + " " + (x.top + arc + subPixelAdjust) +
                        " V" + (mission.top + $("#mission-statement").height()) +
                        " A" + " " + arc +  " " + arc + " 0 0 1 " + (titleCard.left + ($("#title-page-text-wrap").width()) - 10  ) + " " + (mission.top + $("#mission-statement").height() + arc) +
                        " H" + ( mission.left + arc + 5) +
                        " A" + " " + arc +  " " + arc + " 0 0 0 " + ( mission.left + 5)  + " " + (mission.top + $("#mission-statement").height() + arc*2 ) +
                        " V" + (aboutThreadStart.top) 
                        );
    } else {
        $("#path-home").attr("d",  "M"  + (x.left + 237) + " " + (x.top + subPixelAdjust) +    // fix init alignment issue
                        " H" + (titleCard.left + $("#title-page-text-wrap").width()  ) +
                        " A" + " " + arc +  " " + arc + " 0 0 1 " + (titleCard.left + ($("#title-page-text-wrap").width()) + arc ) + " " + (x.top + arc + subPixelAdjust) +
                        " V" + (mission.top + $("#mission-statement").height() ) +
                        " A" + " " + arc +  " " + arc + " 0 0 1 " + (titleCard.left + ($("#title-page-text-wrap").width())  ) + " " + (mission.top + $("#mission-statement").height() + arc) +
                        " H" + ((w/2) + arc) +
                        " A" + " " + arc +  " " + arc + " 0 0 0 " + (w/2 ) + " " + (mission.top + $("#mission-statement").height() + arc + arc ) +
                        " V" + (aboutThreadStart.top) 
                        );
    }
                   
    $("#path-about").attr("d",  "M"  + (w/2) + " " + (0) + 
                    " V" + (dolyaTitle.top ) 
                    );
    
    $("#path-dolya").attr("d",  "M"  + (w/2) + " " + (0) +                 
                    " V" + (myth.top - arc)  +
                    " A" + " " + arc +  " " + arc + " 0 0 1 " + (w/2 -  arc) + " " + (myth.top) +
                    " H" +  (myth.left + arc) +
                    " A" + " " + arc +  " " + arc + " 0 0 0 " + (myth.left ) + " " + (myth.top + arc) +
                    " V" + (myth.top  + $("#myth-wrap").outerHeight() - arc) +
                    " A" + " " + arc +  " " + arc + " 0 0 0 " + (myth.left + arc) + " " + (myth.top  + $("#myth-wrap").outerHeight() ) +
                    " H" +  (w/2 - arc) +
                    " A" + " " + arc +  " " + arc + " 0 0 1 " + (w/2) + " " + (myth.top  + $("#myth-wrap").outerHeight() + arc) +
                    " V" +  (valuesTitle.top) 
                    );
  
    $("#path-values").attr("d",  "M"  + (w/2) + " " + (0) +                 
                    " V" + (values.top - arc - (pad*2) ) +
                    " A" + " " + arc +  " " + arc + " 0 0 1 " + (w/2 -  arc) + " " + (values.top - arc - pad) +
                    " H" + (values.left ) +
                    " A" + " " + arc +  " " + arc + " 0 0 0 " + (values.left - arc) + " " + (values.top - arc) +
                    " V" + (values.top + ($("#values-wrap").outerHeight() /2) - arc - 20 ) +
                    " A" + " " + arc +  " " + arc + " 0 0 0 " + (values.left  ) + " " + (values.top + ($("#values-wrap").outerHeight() / 2) - 20) +
                    " H" + (values.left + $("#values-wrap").outerWidth()  ) +
                    " A" + " " + arc +  " " + arc + " 0 0 1 " + (values.left + $("#values-wrap").outerWidth() + arc) + " " + (values.top + ($("#values-wrap").outerHeight() / 2) - 20 + arc) +
                    " V" + (principles.top + $("#principles-wrap").outerHeight() ) +
                    " A" + " " + arc +  " " + arc + " 0 0 1 " + (values.left + $("#values-wrap").outerWidth() ) + " " + (principles.top + $("#principles-wrap").outerHeight() + arc)  +
                    " H" + (w/2 + arc)  +
                    " A" + " " + arc +  " " + arc + " 0 0 0 " + (w/2) + " " + (principles.top + $("#principles-wrap").outerHeight() + (arc*2)) +
                    " V" +  (servicesTitle.top) 
                    );
                   
    $("#path-services").attr("d",  "M"  + (w/2) + " " + (0) +                
                    " V" + ($("#l-services").height() )  
                    );
                    
    $("#path-team").attr("d",  "M"  + (w/2) + " " + (0) +                 
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
                    
    $("#path-expertise").attr("d",  "M"  + (w/2) + " " + (0) +
                    " V" + (hex1.top - arc - pad)  +
                    " A" + " " + arc +  " " + arc + " 0 0 1 " + ((w/2) - arc ) + " " + (hex1.top - arc) +
                    " H" +  (hex1.left +  (hexWidth / 2) + arc ) +
                    " A" + " " + arc +  " " + arc + " 0 0 0 " + (hex1.left + ($("#expertise1").outerWidth() / 3) ) + " " + (hex1.top) +
                    " V" + (hex1.top + ($("#expertise1").outerHeight() / 2) - arc + 3 + z) +
                    " A" + " " + arc +  " " + arc + " 0 0 0 " + (hex1.left + ($("#expertise1").outerWidth() / 3) + arc ) + " " + (hex1.top + ($("#expertise1").outerHeight() / 2) + 3 + z) +
                    " H" +  (hex3.left +  hexWidth) +
                    " A" + " " + arc +  " " + arc + " 0 0 1 " + (hex3.left +  hexWidth + arc ) + " " + (hex1.top + ($("#expertise1").outerHeight() / 2) + arc ) +
                    " V" + (hexW.top + ($("#expertise4").outerHeight()/4 ) - arc ) +
                    " A" + " " + arc +  " " + arc + " 0 0 1 " + (hex3.left +  hexWidth ) + " " + (hexW.top + ($("#expertise4").outerHeight()/4 ) ) +
                    " H" +  (hex2.left - 15 ) +
                    " A" + " " + arc +  " " + arc + " 0 0 0 " + (hex2.left - 15 - arc ) + " " + (hexW.top + ($("#expertise4").outerHeight()/4 ) +arc ) +
                    " V" + (hexW.top + ($("#expertise4").outerHeight() ) - arc - 15) +
                    " A" + " " + arc +  " " + arc + " 0 0 0 " + (hex2.left - 15 ) + " " + (hexW.top + ($("#expertise4").outerHeight() - 15 )  ) +
                    " H" +  ( (w/2) - arc ) +
                    " A" + " " + arc +  " " + arc + " 0 0 1 " + (w/2) + " " + (hexW.top + ($("#expertise4").outerHeight() - 15 + arc )  ) +
                    " V" + (dolyaTitle.top)
                    );
}









