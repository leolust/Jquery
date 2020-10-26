$(document).ready(function(){
    //$("p").hide(); // cacher avec le selecteur
    $("#test").hide(); // cacher avec l'ID
    $(".test").hide(); // cacher avec la class
    //$("*").hide(); // tout cacher
    //$("[href]").hide(); // cacher tout ce qui a un attribut href
    $("tr:odd").hide(); // cacher une ligne sur deux d'un tableau

    
    $("#clique").click(function(){ // cacher en cliquant
        $(this).hide();
    });
    $(".dblclique").dblclick(function(){ // cacher en double cliquant
        $(this).hide();
    });
    $("p").mouseenter(function(){ // cacher quand la souris passe devant
        $(this).hide();
      });
    $("input").keypress(function(){ // cacher quand un caractère est entré
       $(this).hide();
    });
    $(".onclick").on("click", function(){ // cacher doucement avec slow
    $(this).hide("slow");
    });


    $(".button").click(function(){ // montrer en appuyant sur un bouton
        $("p").show();
    });
    $(".button").click(function(){ // basculer de cacher à visible et inversement
    $("table").toggle();
    });


    $(".fade").fadeOut("slow"); // fais disparaitre automatiquement un élément
    $(".fadeto").fadeTo("slow", 0.3); // modifie doucement l'opacité
    $(".button").click(function(){ // en cliquant on fait disparaitre ou reaparaitre 
        $(".fadetoggle").fadeToggle(2000); // 1000 est la vitesse de (dis)(rea)parition
    });


    $(".slide").slideUp("slow"); // fait disparaitre en slidant vers le haut
    $(".slideD").hide();
    $(".slideD").slideDown("slow"); // fait disparaitre en slidant vers le bas
    $(".button").click(function(){
        $(".slideT").slideToggle("slow");
    });


    $(".animLeft").animate({left: '400px'},5000); // décale l'élément de 400px vers la gauche, avec un délai de 5000ms
    $(".animHeight").animate({height: '100px'},5000); // agrandit vers le bas de 100px
    $(".aniMulti").animate({
        opacity : '0.4',
        height : '150px',
        width : '200px',
        fontSize : '24px' 
    }, 5000);

    
    $(".button").click(function(){
        $(".aniMulti").stop(); // stop une animation
    });

    $("#test").text(); // retourne le contenue de la div qui a pour id "#test"
    alert("une div avec écrit \"" + $("#test").text() + "\" est caché")
    $(".button").click(function(){
        alert("Dans l'input il est écrit: " + $("input").val()) // retourne la valeur d'un input
    }); // $("a").attr("href"); retourne l'adresse du lien

    
    $(".slideD").text("Ce texte a changé ");
    //$("input").val("Ce texte a changé "); sers a changer le contenu d'un input


    $("img").click(function(){ // changer une image en cliquand dessus
        $("img").attr("src", "data:image/png;base64,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");
        $("p").append(" YES! "); // ajoute " YES!" derrière les balises 'p'
        $("p").prepend(" YES! "); // ajoute " YES!" devant les balises 'p'
    });


    $(".textimg").click(function(){
        $(".textimg").remove();  // remove l'élément choisi
    }); // $("div").empty(); remove les enfant de la div choisi
    // $("div").remove(".element1, .element2 "); remove les div ayant pour classe "element1" et "element2"

    $("p").addClass("important test"); // ajoute les classe "important" et "test" aux éléments 'p'
    $("p").removeClass("test"); // retire la classe "test" aux éléments 'p'
    $("p").click(function(){ // retire ou ajoute
        $(this).toggleClass("important");
    });
})
