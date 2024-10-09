# Application JokeAPI Formulaire

![Bootstrap Badge](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3 Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript Badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![VS Code Badge](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![Linux Badge](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Debian Badge](https://img.shields.io/badge/Debian-A81D33?style=for-the-badge&logo=debian&logoColor=white)
![Windows Terminal Badge](https://img.shields.io/badge/Windows%20Terminal-4D4D4D?style=for-the-badge&logo=windows%20terminal&logoColor=white)
![Windows Badge](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)
![CodePen Badge](https://img.shields.io/badge/CodePen-000000?style=for-the-badge&logo=codepen&logoColor=white)
![Markdown Badge](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)

---

Un projet web pour apporter un peu de joie et de rire dans votre journée.

## Table des Matières

- [Blagues Inspirantes](#blagues-inspirantes)
  - [Table des Matières](#table-des-matières)
  - [Introduction](#introduction)
  - [Fonctionnalités](#fonctionnalités)
  - [Installation](#installation)
  - [Utilisation](#utilisation)
    - [Page Principale (`index.html`)](#page-principale-indexhtml)
      - [Fonctionnalités de la Page Principale](#fonctionnalités-de-la-page-principale)
      - [Instructions pour la Page Principale](#instructions-pour-la-page-principale)
    - [Page des Crédits (`credits.html`)](#page-des-crédits-creditshtml)
      - [Fonctionnalités de la Page des Crédits](#fonctionnalités-de-la-page-des-crédits)
      - [Instructions pour la Page des Crédits](#instructions-pour-la-page-des-crédits)
    - [Page Secrète (`secret.html`)](#page-secrète-secrethtml)
      - [Fonctionnalités de la Page Secrète](#fonctionnalités-de-la-page-secrète)
      - [Instructions pour la Page Secrète](#instructions-pour-la-page-secrète)
  - [Technologies Utilisées](#technologies-utilisées)
  - [Auteur](#auteur)
  - [Remerciements](#remerciements)

## Introduction

**Blagues Inspirantes** est une application web interactive qui permet aux utilisateurs de générer des blagues aléatoires ou d'ajouter leurs propres blagues. Le site offre une interface moderne avec un thème sombre et des animations engageantes pour une expérience utilisateur optimale.

## Fonctionnalités

- **Génération de Blagues Aléatoires** : Obtenez des blagues aléatoires à partir de différentes catégories en un clic à partir de l'API JokeAPI.
- **Ajout de Blagues Personnalisées** : Ajoutez vos propres blagues et partagez-les avec les autres utilisateurs.
- **Sauvegarde Locale** : Les blagues sont stockées localement dans votre navigateur grâce à `localStorage`.
- **Animations Fluides** : Animations lors de l'ajout, de la suppression des blagues et du chargement de la page.
- **Page des Crédits avec Animation** : Découvrez l'auteur du site avec une page dédiée comportant une animation de rideau.
- **Page Secrète Accessible via le Konami Code** : Une page cachée accessible en entrant le Konami Code, offrant des blagues de catégories sensibles (NSFW, religieuses, politiques, racistes, sexistes, explicites) avec un thème rouge distinctif.

## Installation

1. **Téléchargez le projet** : Clonez ce dépôt ou téléchargez les fichiers `index.html`, `credits.html`, `secret.html` et les ressources associées.

```bash 
git clone https://github.com/sfeirc/JokeAPI.git
```

2. **Assurez-vous d'avoir une connexion Internet** pour charger les ressources externes (Bootstrap, Font Awesome, Google Fonts).

## Utilisation

### Page Principale (`index.html`)

#### Fonctionnalités de la Page Principale

- **Obtenir une Blague** : Cliquez sur le bouton "Obtenir une blague" pour générer une blague aléatoire à partir de l'API JokeAPI.
- **Ajouter une Blague Personnalisée** : Remplissez le formulaire pour ajouter votre propre blague.
- **Vider le Tableau** : Supprimez toutes les blagues enregistrées en cliquant sur "Vider le tableau".
- **Suppression Individuelle** : Cliquez sur l'icône de corbeille pour supprimer une blague spécifique.
- **Sauvegarde Automatique** : Les blagues sont automatiquement sauvegardées dans le `localStorage` de votre navigateur.
- **Konami Code** : Entrez le Konami Code pour accéder à la page secrète.

#### Instructions pour la Page Principale

1. **Ouvrez `index.html` dans votre navigateur**.
2. **Interagissez avec l'application** :
   - Cliquez sur "Obtenir une blague" pour générer une blague aléatoire.
   - Utilisez le formulaire pour ajouter une blague personnalisée.
   - Visualisez les blagues dans le tableau avec des animations fluides.
3. **Gérez vos blagues** :
   - Supprimez des blagues individuellement en cliquant sur la corbeille.
   - Videz le tableau pour supprimer toutes les blagues enregistrées.
4. **Accédez à la Page Secrète** :
   - Entrez la séquence du Konami Code sur votre clavier :
     - **Haut, Haut, Bas, Bas, Gauche, Droite, Gauche, Droite, B, A**.

### Page des Crédits (`credits.html`)

#### Fonctionnalités de la Page des Crédits

- **Animation de Rideau** : Une animation interactive qui s'active en appuyant sur "Entrée".
- **Présentation de l'Auteur** : Affiche votre photo, votre nom et une description personnelle.
- **Navigation** : La barre de navigation apparaît après l'animation, permettant de retourner à l'accueil.

#### Instructions pour la Page des Crédits

1. **Ouvrez `credits.html` dans votre navigateur**.
2. **Lancez l'animation** :
   - Appuyez sur une touche  ou cliquez sur le message "Cliquez pour commencer".
3. **Découvrez l'auteur** :
   - Après l'animation, la photo, nom et description de l'auteur apparait.
4. **Naviguez sur le site** :
   - Utilisez la barre de navigation pour retourner à l'accueil ou explorer d'autres pages.

### Page Secrète (`secret.html`)

#### Fonctionnalités de la Page Secrète

- **Accès Caché via le Konami Code** : La page secrète est accessible en entrant le Konami Code sur la page principale.
- **Blagues Sensibles** : Obtenez des blagues de catégories sensibles (NSFW, religieuses, politiques, racistes, sexistes, explicites) non disponibles sur la page principale.
- **Ajout de Blagues Sensibles Personnalisées** : Ajoutez vos propres blagues dans ces catégories sensibles.
- **Sauvegarde Locale Séparée** : Les blagues sont stockées localement, séparément de la page principale.

#### Instructions pour la Page Secrète

1. **Accéder à la Page Secrète** :
   - Sur la page principale (`index.html`), entrez la séquence du Konami Code :
     - **Haut, Haut, Bas, Bas, Gauche, Droite, Gauche, Droite, B, A**.
2. **Interagissez avec la Page Secrète** :
   - **Obtenir une Blague Sensible** : Cliquez sur "Obtenir une blague" pour générer une blague dans les catégories sensibles.
   - **Ajouter une Blague Sensible Personnalisée** : Utilisez le formulaire pour ajouter votre propre blague dans une catégorie sensible.
   - **Gérer les Blagues** : Supprimez des blagues individuellement ou videz le tableau entier.
3. **Naviguez sur le Site** :
   - Utilisez la barre de navigation pour retourner à l'accueil ou visiter la page des crédits.

**Attention** : Les blagues sur la page secrète peuvent contenir du contenu sensible ou offensant. Veuillez naviguer avec discrétion.

## Technologies Utilisées

- ![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) **HTML5** : Structure sémantique des pages.
- ![CSS3 Badge](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) **CSS3** : Styles personnalisés, animations et responsive design.
- ![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) **JavaScript (ES6)** : Interactivité, manipulation du DOM, gestion du `localStorage`.
- ![Bootstrap Badge](https://img.shields.io/badge/Bootstrap-563D7C?style=flat-square&logo=bootstrap&logoColor=white) **Bootstrap 5** : Composants réactifs et design moderne.
- ![Font Awesome Badge](https://img.shields.io/badge/Font%20Awesome-339AF0?style=flat-square&logo=fontawesome&logoColor=white) **Font Awesome** : Icônes pour améliorer l'interface utilisateur.
- ![Google Fonts Badge](https://img.shields.io/badge/Google%20Fonts-4285F4?style=flat-square&logo=googlefonts&logoColor=white) **Google Fonts** : Polices personnalisées pour une meilleure typographie.
- ![JokeAPI Badge](https://img.shields.io/badge/JokeAPI-00A859?style=flat-square&logo=code&logoColor=white) **JokeAPI** : API externe pour récupérer des blagues aléatoires, y compris des blagues sensibles sur la page secrète.

## Auteur

- **Clovis SFEIR** - *Développeur et Designer*.

## Remerciements

- **JokeAPI** pour fournir les blagues aléatoires.
- **Bootstrap** pour les composants réactifs.
- **Font Awesome** pour les icônes élégantes.
- **Google Fonts** pour les polices attrayantes.
- **Communauté Web** pour les ressources et l'inspiration.
