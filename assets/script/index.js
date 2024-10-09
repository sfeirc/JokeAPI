

// Fonction pour afficher la date actuelle
document.addEventListener('DOMContentLoaded', () => {
    const getJokeBtn = document.getElementById('getJokeBtn');
    const clearTableBtn = document.getElementById('clearTableBtn');
    const jokesTable = document.getElementById('jokesTable');
    const jokesTableBody = document.getElementById('jokesTableBody');

    const addJokeForm = document.getElementById('addJokeForm');


    let jokesArray = JSON.parse(localStorage.getItem('jokes')) || [];

    // Fonction pour afficher les blagues enregistrées
    function displaySavedJokes() {
        jokesTableBody.innerHTML = '';
        jokesArray.forEach((joke, index) => {
            addJokeToTable(joke.category, joke.text, index, true);
        });
    }

    // Fonction pour ajouter une blague à la table
    function addJokeToTable(category, jokeText, index = null, isInitialLoad = false) {
        const row = document.createElement('tr');

        // Ajouter une cellule pour la catégorie de la blague
        const categoryCell = document.createElement('td');
        categoryCell.textContent = category;
        row.appendChild(categoryCell);

        // Ajouter une cellule pour le texte de la blague
        const jokeCell = document.createElement('td');
        jokeCell.textContent = jokeText;
        row.appendChild(jokeCell);

        // Ajouter une cellule pour les actions
        const actionCell = document.createElement('td');
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('icon-button');
        removeBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        removeBtn.addEventListener('click', () => {
            row.classList.add('fade-out');
            row.addEventListener('animationend', (event) => {
                if (event.target === row) {
                    row.remove();
                }
            }, { once: true });
            if (index !== null) {
                jokesArray.splice(index, 1);
                saveJokes();
                displaySavedJokes();
            }
        });
        actionCell.appendChild(removeBtn);
        row.appendChild(actionCell);

        if (!isInitialLoad) {
            row.classList.add('fade-in');
        }

        jokesTableBody.appendChild(row);
    }

    // Fonction pour enregistrer les blagues dans le stockage local
    function saveJokes() {
        localStorage.setItem('jokes', JSON.stringify(jokesArray));
    }

    // Ajouter une classe pour la construction de la table
    jokesTable.classList.add('table-construction');
    displaySavedJokes();

    // Ajouter un écouteur d'événements pour détecter le clic sur le bouton "Obtenir une blague"
    getJokeBtn.addEventListener('click', async () => {
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit');
            const data = await response.json();

            // Vérifier si une erreur s'est produite
            if (data.error) {
                alert('Aucune blague appropriée n\'a été trouvée. Veuillez réessayer.');
                return;
            }

            let jokeText = '';
            const category = data.category;

            if (data.type === 'single') {
                jokeText = data.joke;
            } else {
                jokeText = data.setup + ' ' + data.delivery;
            }

            // Ajouter la blague à la table
            jokesArray.push({ category, text: jokeText });
            saveJokes();
            addJokeToTable(category, jokeText);
            // Faire défiler la page vers le haut
        } catch (error) {
            console.error('Erreur lors de la récupération de la blague:', error);
            alert('Une erreur est survenue lors de la récupération de la blague.');
        }
    });

    // Ajouter un écouteur d'événements pour détecter la touche "Entrée"
    addJokeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const categorySelect = document.getElementById('customJokeCategory');
        const category = categorySelect.value;
        const jokeText = document.getElementById('customJokeText').value;

        if (jokeText.trim() === '') {
            alert('Veuillez entrer une blague.');
            return;
        }

        // Ajouter la blague à la table
        jokesArray.push({ category, text: jokeText });
        saveJokes();
        addJokeToTable(category, jokeText);


        addJokeForm.reset();
    });

    // Ajouter un écouteur d'événements pour détecter le clic sur le bouton "Effacer la table"
    clearTableBtn.addEventListener('click', () => {
        jokesArray = [];
        saveJokes();
        jokesTable.classList.add('table-destruction');

        const handleAnimationEnd = (event) => {
            if (event.target !== jokesTable) return; 
            jokesTableBody.innerHTML = '';
            jokesTable.classList.remove('table-destruction');
            jokesTable.removeEventListener('animationend', handleAnimationEnd);
        };
        // Ajouter un écouteur d'événements pour détecter la fin de l'animation
        jokesTable.addEventListener('animationend', handleAnimationEnd);
    });
});

// Fonction pour afficher la date actuelle
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

    // Séquence du Konami Code
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Haut, Haut, Bas, Bas, Gauche, Droite, Gauche, Droite, B, A

    let konamiCodePosition = 0;

    // Écouteur d'événement pour les touches du clavier
    document.addEventListener('keydown', function(e) {
        // Récupère le code de la touche pressée
        const key = e.keyCode;

        // Récupère le code de la touche attendue dans la séquence
        const requiredKey = konamiCode[konamiCodePosition];

        // Vérifie si la touche pressée correspond à la touche attendue
        if (key === requiredKey) {
            // Passe à la touche suivante dans la séquence
            konamiCodePosition++;

            // Si la dernière touche est atteinte, active la fonction secrète
            if (konamiCodePosition === konamiCode.length) {
                activateSecret();
                konamiCodePosition = 0;
            }
        } else {
            // Réinitialise la position si la touche ne correspond pas
            konamiCodePosition = 0;
        }
    });

    function activateSecret() {
        // Redirige vers la page secrète
        window.location.href = 'assets/secret.html';
        }
