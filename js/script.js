// $(() => {});
////////////////////////

/*//selectors
$(document).ready(() => {
    // $(".selector1").click(() => {
    //     console.log("click => 1")    
    // });
    
    // $(".selector1").dblclick(() => {
    //     console.log("dblclick => 2")    
    // });

    // $(".selector2").change(() => {
    //     console.log("change");
    // });

    // $(".selector3").change(() => {
    //     console.log("change")
    // });
    // $(".selector4").focusin(() => {
    //     console.log("focusin")
    // });
    
    // $(".selector4").focusout(() => {
    //     console.log("focusout")
    // });
    // $(".selector5").focus(() => {
    //     console.log("focus")
    // });

    // $(".selector5").blur(() => {
    //     console.log("blur")
    // });
    
    // $(".selector6").mouseenter(() => {
    //     console.log("mouseenter");
    // });
    
    // $(".selector6").mouseleave(() => {
    //     console.log("mouseleave");
    // });

    // $(".selector6").hover(  // mouseenter + mouseleave
    // () =>{console.log("mouseenter2")},
    // () => {console.log("mouseleave2");}); 
    
    // $(".selector6").mouseup(() => {
    //     console.log("mouseup");
    // });

    // $(".selector6").mousedown(() => {
    //     console.log("mousedown");
    // });

    // $(".selector6").mousemove(() => {
    //     console.log("mousemove");
    // });

    // $(".selector6").mouseout(() => { // when out from this element or on his children
    //     console.log("mouseout");
    // });

    // $(".selector6").mouseover(() => { // when over on this element or on his children
    //     console.log("mouseover");
    // });

    // $(".selector7").keypress(()=> {console.log("keypress")}); // like click
    // $(".selector7").keyup(()=> {console.log("keyup")});
    // $(".selector7").keydown(()=> {console.log("keydown")});

    // $(window).scroll(()=> console.log("scroll"));
    // $(window).resize(()=> console.log("resize"));

    // $(".selector8").submit((e) => {
    //  e.target.children[0].value = "red";
    //  e.preventDefault();
    // });

    // $(".selector9").select(() => {
    //     console.log("select");
    // });

    // $("selector").on(event(s) , childselector , data , function , map);
    // $(".selector10").on("mouseenter click mouseleave" , "span", () => {
    //     $(".selector10 span").text(parseInt($(".selector10 span").text()) + 1);
    // });
    
    // $(".selector10").on({
    //     'mouseenter' : () => console.log("mouseenter"),
    //     'mouseleave' : () => console.log("mouseleave"),
    //     'click' : () => console.log("click"),
    // });

    // $("selector").off(event , selector , function);
    // $(".selector11").on("click" , function() {
    //     $(this).css("color" , "red");
    // });
    // $("body").on("click"  , ".selector11", function() {
    //     $(this).css("color" , "red");
    // });
    // $(".selector12").click( () => {
    //     $("body").off("click" , ".selector11");
    // });

    // $("selector").one(event(s) , data , function);
    // $(".selector12").one({
    //     "click" : () => console.log("click one"),
    //     "mouseenter" : () => console.log("click mouseenter"),
    //     "mouseleave" : () => console.log("click mouseleave"),
    // })
});*/


/*// effects
$(document).ready(function() {
    // $("selector").{anyEffect}(duration , easing , callbackfunction)
    
    // $(".effect1H").on("click" , () => $(".effect1").hide(500));
    // // $(".effect1H").on("click" , () => $(".effect1").hide({duration: 1000}));
    // $(".effect1S").on("click" , () => $(".effect1").show(500 , "swing")); // linear , swing
    // $(".effect1T").on("click" , () => $(".effect1").toggle(1000 , () => console.log("toggle finished")));

    // $(".effect2FI").on("click" , () => {$(".effect2").fadeIn();}) 
    // $(".effect2FO").on("click" , () => {$(".effect2").fadeOut();}) 
    // $(".effect2TG").on("click" , () => {$(".effect2").fadeToggle();})
    // // $("selector").{fadeTo}(duration , opacity , easing , callbackfunction?) // first to arguments are required
    // $(".effect2TO").on("click" , () => {$(".effect2").fadeTo(1000 , .5);}) 

    // $(".effect3U").click(() => $(".effect3").slideUp());
    // $(".effect3D").click(() => $(".effect3").slideDown());
    // $(".effect3T").click(() => $(".effect3").slideToggle());
    
    // $("selector").animate({styles} , speed , easing , callback);
    // $("selector").animate({styles} , {options});
    // $(".effect4A").click(()=> {
    //     $(".effect4").animate({"height" : 200,"width" : 200} , 1000)
    //     .animate({"height" : 50,"width" : 50} , 1000)
    //     .animate({"height" : 100,"width" : 100} , 1000)
    // });
    // $(".effect4A").click(()=> {
    //     $(".effect4").animate({"opacity" : ".5","width" : "200px"}
    //     ,{duration: 1000 ,step : (x) =>  $(".effect4A").text(Math.floor(x))})
    //     $(".effect4").animate({"opacity" : "1","width" : "100px"}
    //     ,{duration: 1000,step : (x) =>  $(".effect4A").text(Math.floor(x))
    //     ,complete:() => console.log("callback Fucntion")})
    // });

    // $(".effect5S").click(function() {
    //     let e = $(".effect5");
    //     e.animate({"width" : 150});
    //     e.queue(function() {
    //         console.log(e.queue().length);
    //         e.dequeue();
    //         e.animate({"width" : 300})
    //     })
    //     e.animate({"height" : 150});
    //     e.animate({"width" : 100});
    //     e.animate({"height" : 100});
    // });
    // $(".effect5C").click(function() {
    //     $(".effect5").clearQueue();
    // });

    // $(".effect6T").click(function() {
    //     let e = $(".effect6");
    //     e.animate({"width" : 150});
    //     e.animate({"height" : 150});
    //     e.animate({"width" : 125});
    //     e.animate({"height" : 125});
    // });
    // $(".effect6P").click(function() {
    //     // $("selector").stop(stopAll:boolean , goToEnd:bollean){default: false , false}
    //     // stop() stop Current Animation || execute next
    //     // stop(1) stop All Animation + current Animation
    //     // stop(1 , 1)stop All Animation + finishe Current Animation In 0 Second
    //     $(".effect6").stop(true);
    // });
    // $(".effect6f").click(function() {
    //     $(".effect6").finish();
    // });

    // $(".effect7S").click(() => {
    //     // $(".effect7").delay(2000).fadeOut(0);
    //     $(".effect7").delay(2000).hide(0);
    // });

    // $(".effect8C").click(() => {
    //     $(".effect8").hide(2000).show(500).fadeOut(2000).fadeIn(1000).slideUp(2000).slideDown(500);
    // });
});*/


/*//HTML-CSS
$(document).ready(function() {
    // text | html | val | atr

    // $(".hcbutton").click(() => {
    //     console.log($(".hc1").html());
    //     console.log($(".hc1").text());
    //     console.log($(".hc2").val());
    //     console.log($(".hc2").attr("class"));
    // });

    // $(".hcbutton").click(() => {
    //     $(".hc3").html(function(i , c) {
    //         return `${i} => ${c}`
    //     });
    //     $(".hc4").val(function(i , c){
    //         return 'c' + i;
    //     });
    //     let hc5 = [];
    //     $(".hc5").text(function(i , c) {hc5.push(c);});
    //     $(".hc5").attr("href" , function(i) {
    //         return `https:\\${hc5[i]}.com`;
    //     });
    // });

    // $(".hcbutton").click(() => {
    //     // console.log($(".hc6").attr("checked")); // undefined
    //     console.log($(".hc6").prop("checked"));
    // });

    // $(".hcbutton").click(() => {
    //     $("p.hc7").text(`${$("p.hc7").text()} set Text`);
    //     $("input.hc7").val("set Val");
    //     $("input.hc7").attr({"data-goal": "input" , "title" : "Hello"});
    // });

    // $(".hcbutton").click(() => {
    //     $("div:first-of-type.hc8").after("adding after first");
    //     $("div:first-of-type.hc8").before("<p>adding before first </p>");
    //     $("div").after( (i , c) => `<p>adding after ${c}</p>`);
    // });

    // $(".hcbutton").click(() => {
    //     // $(".hc9").append("<h6>h6</h6>")
    //     // $(".hc9").prepend("<h1>h1</h1>")
    //     $("<h6>h6</h6>").appendTo(".hc9")
    //     $("<h1>h1</h1>").prependTo(".hc9")
    // });

    // $(".hcbutton").click(() => {
    //     // $("hc10").remove();
    //     $("hc10").detach(); // save The Data And Actions Of This Element
    // });

    // $(".hcbutton").click(() => {
    //     // $(".hc11").empty();
    //     $(".hc11").removeAttr("class id");
    // });

    // $(".hcbutton").click(() => {
    //     // $(".hc12").css({"color": "red" , "fontSize" : "40px"});
    //     // $(".hc12").addClass("d");
    //     // $(".hc12").removeClass("d");
    //     /// $("selector").toggleClass(name , callbackFaunction);
    //     $(".hc12").toggleClass('d');
    // });


    // $(".hcbutton").click(() => {
    //     let a = $(".hc13");
    //     console.log(a.width());
    //     console.log(a.innerWidth());
    //     // a.outerWidth() without Margin
    //     // a.outerWidth(true) with Margin
    //     console.log(a.outerWidth());
    //     console.log(a.outerWidth(true));
    
    //     console.log(a.height());
    //     console.log(a.innerHeight());
    //     console.log(a.outerHeight());
    //     console.log(a.outerHeight(true));
    // });
    
    // $(".hcbutton").click(() => {
    //     // $("slector").clone() don't copy the Animtion
    //     // $("slector").clone(true) copy the Animtion
    //     $("body").append($(".hc14:first-of-type").clone(1));
    // })
    // $(".hc14:first-of-type").click(function() {
    //     $(this).animate({"fontSize" : "+=4px"})
    // })

    // console.log($(".hc15").offset());
    // $(".hc15").offsetParent().css("border", "2px dashed green");

    // console.log($(".hc16 div").position())
    // console.log($(".hc16 div").offset())

    // $(window).click(() => {
    //     console.log($(window).scroll())
    //     console.log($(window).scrollLeft());
    //     console.log($(window).scrollTop(100));
    // });

    // $("<h2>this is h2</h2>").replaceAll((".hc17"));
    // $(".hc17").replaceWith(("<h2>this is h2</h2>"));

    // $(".hc18").wrap("<div class = 'd'></div>")
    // $(".hcbutton").click(() => {
    //     $(".hc18").unwrap()
    // })
        
    // $(".hc19").wrapAll("<div class = 'd'></div>")
    // $(".hc19").wrapInner("<div class = 'd'></div>")
});*/



/*// traversing
$(document).ready(() => {
    let x = $(".grant-child2");
    // console.log(x.parent());
    // console.log(x.parents()); // bla bla bla
    // console.log(x.parentsUntil()); // also bla bla bla
    // console.log(x.closest(".parent")); // return the closeest parent of class .parent include self
    // console.log(x.parent().children());
    // console.log(x.parent().children(".grant-child2"));
    // console.log(x.parent().find(".grant-child2"));
    // console.log(x.siblings());
    // console.log(x.siblings(".grant-child5"));
    // console.log(x.next());
    // console.log(x.nextAll());
    // console.log(x.nextAll(".grant-child4"));
    // console.log(x.nextUntil(".grant-child5"));
    // console.log(x.nextUntil(".grant-child5" , ".grant-child3"));
    x = x.next();    
    // console.log(x.prev());
    // console.log(x.prevAll());
    // console.log(x.prevAll(".grant-child1"));
    // console.log(x.prevUntil(".grant-child1"));
    // console.log(x.prevUntil(".grant-child1" , ".grant-child2"));
    x = x.parent().children();    
    // console.log(x.first());
    // console.log(x.last());
    // console.log(x.has("strong"));
    // console.log(x.parent().is(".child"));
    // console.log(x.parent().is(".parent"));
    // console.log(x.not(".grant-child1"));
    // console.log(x.filter('.grant-child2'));
    // console.log(x.eq(0))
    // console.log(x.eq(4))
    // console.log(x.slice(1));
    // console.log(x.slice(-1));
    // console.log(x.slice(1 , 2));
    // console.log(x.slice(-4 , -3));
    // console.log(x.contents());
    // console.log(x.contents().filter('strong'));
});*/



/*// selectors
$(document).ready(() => {
    // $(".div , #p , br").css("border" , "2px solid #f00");
    // $("h2:first , h2:last").css("border" , "2px solid #f00");
    // $("h2:even").css("border" , "2px solid #f00");
    // $("h2:odd").css("border" , "2px solid #f00");
    // $("span:first-child").css("border" , "2px solid #f00");
    // $("span:last-child").css("border" , "2px solid #f00");
    // $("h2:first-of-type").css("border" , "2px solid #f00");
    // $("h2:last-of-type").css("border" , "2px solid #f00");
    // $("span:nth-of-type(2)").css("border" , "2px solid #f00");
    // $("span:nth-child(3)").css("border" , "2px solid #f00");
    // $("p:only-child").css("border" , "2px solid #f00");
    // $("span:only-of-type").css("border" , "2px solid #f00");
    // $("div > div").css("border" , "2px solid #f00");
    // $("#p + h2").css("border" , "2px solid #f00");
    // $("#p ~ h2").css("border" , "2px solid #f00");
    // $("span ~ *").css("border" , "2px solid #f00");
    // $("p:eq(1)").css("border" , "2px solid #f00");
    // $("p").eq(1).css("border" , "2px solid #f00");
    // $("h2:gt(1)").css("border" , "2px solid #f00");
    // $("h2:lt(2)").css("border" , "2px solid #f00");
    // $("h2:not(h2:lt(2))").css("border" , "2px solid #f00");
    // $(":header").css("border" , "2px solid #f00"); 
    // $("h6").css("backgroundColor" ,"#888");
    // $("h6").animate({width:"50%"} , 2000);
    // $("h6").animate({width:"70%"} , 2000);
    // $("h6:animated").css("color" , 'red');
    // $("input").focus();
    // $("input:focus").css("background" , "red");
    // $(":empty").css("background" , "red");
    // $(":header:contains(h)").css("background" , "red");
    // $(":header:contains(h)").css("margin" , "10px");
    // $("span:has('strong')").css("background" , "red");
    // $("span:visible").css("background" , "red");
    // $("span:eq(1)").css("display" , "none");
    // $("span:hidden").css("background" , "red").show();
    // $(":root").css("margin" , "0px");


    // $("[title]").css("border" , "2px solid #f00");
    // $("p[title]").css("border" , "2px solid #f00");
    // $("p[title = 'para']").css("border" , "2px solid #f00");
    // $("p[title ^= 'para']").css("border" , "2px solid #f00"); // ^ == start With
    // $("p[title $= 'd']").css("border" , "2px solid #f00"); // $ == end With
    // $("p[title *= 'a']").css("border" , "2px solid #f00"); // * == any one has


    // $("input:text").css("border" , "5px solid #f00");
    // $("input:password").css("border" , "5px solid #0f0");
    // $("input:submit").css("border" , "5px solid #00f");
    // $("input:enabled").css("border" , "5px solid #f00");
    // $("input:disabled").css("border" , "5px solid #0f0");
    // $("input:checked").hide();
    // $(":selected").css("padding" , "20px");
});*/

/*$(document).ready(() => {
    // $("li").on("click" , function() {console.log($(this).index());});
    
    // $("li").each(function(i , e) {
    //     console.log($(this).text());
    //     console.log($(e).text() , i);
    // });

    // console.log($("li").get(2));

    // console.log($("p").data('x' , "hello world"));
    // console.log($("p").data('x'));
});*/