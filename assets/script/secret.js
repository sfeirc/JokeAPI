

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
    // Modifier l'URL de l'API pour obtenir des blagues sensibles
    getJokeBtn.addEventListener('click', async () => {
        try {
            let jokeFound = false;
            let attempts = 0;
            const maxAttempts = 10; // Pour éviter une boucle infinie
    
            while (!jokeFound && attempts < maxAttempts) {
                const response = await fetch('https://v2.jokeapi.dev/joke/Any?lang=fr');
                const data = await response.json();
    
                if (data.error) {
                    alert('Aucune blague appropriée n\'a été trouvée. Veuillez réessayer.');
                    return;
                }
    
                let jokeText = '';
                if (data.type === 'single') {
                    jokeText = data.joke;
                } else {
                    jokeText = data.setup + ' ' + data.delivery;
                }
    
                // Analyser le texte de la blague pour détecter les catégories
                const category = getCategoryFromJoke(jokeText);
                if (category) {
                    // Ajouter la blague à la table avec la catégorie détectée
                    jokesArray.push({ category, text: jokeText });
                    saveJokes();
                    addJokeToTable(category, jokeText);
                    jokeFound = true;
                } else {
                    attempts++;
                }
            }
    
            if (!jokeFound) {
                alert('Aucune blague appropriée n\'a été trouvée après plusieurs tentatives. Veuillez réessayer.');
            }
        } catch (error) {
            console.error('Erreur lors de la récupération de la blague:', error);
            alert('Une erreur est survenue lors de la récupération de la blague.');
        }
    });
    


    // Ajouter une blague personnalisée avec des catégories sensibles
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
const categoryKeywords = {
    "NSFW": ["sexe", "nudité", "porno", "intime", "érotique"],
    "Religious": ["dieu", "religion", "église", "prêtre", "coran", "bible"],
    "Political": ["président", "gouvernement", "politique", "élection", "parti"],
    "Racist": ["race", "noir", "blanc", "asiatique", "ethnie", "stéréotype"],
    "Sexist": ["femme", "homme", "féministe", "sexisme", "genre"],
    "Explicit": ["putain", "merde", "con", "salope", "enculé"]
};
function getCategoryFromJoke(jokeText) {
    jokeText = jokeText.toLowerCase();
    for (const category in categoryKeywords) {
        const keywords = categoryKeywords[category];
        for (const keyword of keywords) {
            if (jokeText.includes(keyword.toLowerCase())) {
                return category;
            }
        }
    }
    return null; // Aucune catégorie correspondante trouvée
}
