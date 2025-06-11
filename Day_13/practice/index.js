
// $("h1").css("color","red");
// $(document).ready(() => {$("h1").css("color","red")});
// console.log($("h1").css("font-size"));
// $("h1").addClass("big");
// setTimeout(() => {
//     $("h1").removeClass("big")
// },1000);

// console.log($("h1"));

// $("h1").text("bye goognight");

// $("h1").html("<em>Hello world</em>");
// console.log($("a").attr("href"));
// $("a").attr("href","https//www.google.com");

// console.log($("a").attr["class"]);

// $("button").click(() => {
//     $("h1").css("color","green");
// });

// $("input").keypress((event) => {
//     $("h1").text(event.key);
// });

// $("h1").on("mouseover",() => {
//     $("h1").css("color","purple");
// });

// $("h1").before("<button>new</button>");
// $("h1").after("<button>new</button>");
// $("h1").append("<button>new</button>");
// $("h1").prepend("<button>new</button>");
// $("button").remove();
// $("h1").remove();
// $("input").remove();

$("button").on("click",() => {
    // $("h1").hide();
    // $("h1").show();
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").fadeIn()
    // $("h1").fadeToggle();
    // $("h1").slideUp();
    // $("h1").slideDown();
    // $("h1").slideToggle();
    // $("h1").animate({opacity:0.5}); // only numeric value can be animated
    $("h1").slideUp().slideDown().animate({opacity:0.5});
})