// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Mettre le focus sur l'élément avec l'ID "starter"
    document.getElementById("starter").focus();
    // Ajouter un écouteur d'événements pour détecter la touche "Entrée"
    document.addEventListener('keydown', detectEnterKey);
});

// Fonction pour détecter la touche "Entrée"
function detectEnterKey(event) {
    // Si la touche pressée est "Entrée" (keyCode 13)
    if(event.keyCode == 13) {
        // Appeler la fonction showTime
        showTime();
    }
}

// Fonction pour afficher le contenu principal
function showTime() {
    // Ajouter la classe "open" à l'élément avec l'ID "curtain"
    var curtain = document.getElementById("curtain");
    curtain.classList.add("open");
    
    // Ajouter la classe "expand" à l'élément avec l'ID "scene"
    var scene = document.getElementById("scene");
    scene.classList.add("expand");
    
    // Ajouter la classe "fade-out" à l'élément avec l'ID "starter"
    var starter = document.getElementById("starter");
    starter.classList.add("fade-out");
    
    // Après 2 secondes, masquer l'élément "starter"
    setTimeout(function() {
        starter.style.display = 'none';
    }, 2000);

    // Ajouter la classe "fade-in" à l'élément avec la classe "content-wrapper"
    var contentWrapper = document.querySelector('.content-wrapper');
    contentWrapper.classList.add('fade-in');

    // Après 6 secondes, afficher la barre de navigation et permettre le défilement de la page
    setTimeout(function() {
        var navbar = document.getElementById('navbar');
        navbar.classList.add('navbar-visible');
        document.body.classList.add('navbar-shown');
        document.body.style.overflow = 'auto';
    }, 6000);
}