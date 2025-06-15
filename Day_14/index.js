
// $("p").on({
//     dblclick: function(){
//         $(this).css("background-color","green");
//     },
//     click: function(){
//         $(this).css("background-color","yellow");
//     },
//     hover: function(){
//         $(this).css("background-color","black");
//     }
// })

// $("p").on("click",function(){
//     $(this).hide(1000);
// })

// $("p").on("dblclick",function(){
//     $(this).show(1000);
// })

// $("button").on("click",function(){
//     $("p").toggle(1000);
// })

// $("button").click(function(){
//   $("p").fadeOut();
//   $("h1").fadeOut(2000);
//   $("h2").fadeOut("slow");
// });

// $("button").dblclick(function(){
//     $("p").fadeIn();
//     $("h1").fadeIn(2000);
//     $("h2").fadeIn("slow");
// })

// $("button").click(function(){
//     $("input").val("mari");
//     $("h1").text("you dumb");
//     $("a").attr({
//         "href": "https://www.facebook.com",
//         "title":"facebook"
//     })
// })


// $("button").click(function(){
//     $("p").append("<button>bless</button>");
//     $("h1").prepend("<button>bless</button>");
//     $("h2").after("<button>bless</button>");
//     $("a").before("<button>bless</button>");
// })

// $("button").click(function(){
//     $("p").addClass("blue");
// })

// $("button").dblclick(function(){
//     $("p").removeClass("blue");
// })

// $("button").click(function(){
//     $("p").toggleClass("blue");
// })


// $("button").click(function(){
//     $("p").css({"background-color":"yellow","font-size":"500px"});
// })


// $("button").click(function(){
//     console.log($("p").width(),$("p").height(),$("p").innerWidth(),$("p").outerWidth(),$("p").outerHeight(true));
// })


$("button").click(function(){
    $("p").width("500px").height("500px");
})