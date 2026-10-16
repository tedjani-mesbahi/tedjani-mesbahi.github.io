# Guide d'édition du site

Ce guide explique comment mettre à jour le site sans toucher au code. Tout se fait dans l'**espace d'édition**, à l'adresse :

> **https://ADRESSE-DU-SITE/admin/**

Chaque enregistrement est envoyé sur GitHub et le site est mis à jour automatiquement **en 1 à 2 minutes**.

---

## 1. Première connexion (une seule fois)

1. Créez un compte gratuit sur [github.com](https://github.com) si vous n'en avez pas, puis acceptez l'invitation au dépôt du site (reçue par e-mail).
2. Ouvrez l'espace d'édition : `https://ADRESSE-DU-SITE/admin/`.
3. Cliquez sur **Sign In Using Access Token** (se connecter avec un jeton d'accès).
4. Cliquez sur le lien proposé : GitHub ouvre la page de création d'un jeton, avec les bonnes permissions déjà cochées.
   - Donnez-lui un nom, par exemple « Site web ».
   - Choisissez une durée de validité, par exemple 1 an (vous referez cette étape une fois par an).
   - Si GitHub demande quels dépôts autoriser, choisissez **Only select repositories** → le dépôt du site, puis la permission **Contents : Read and write**.
5. Cliquez sur **Generate token**, copiez le jeton (il commence par `ghp_` ou `github_pat_`), revenez sur l'espace d'édition et collez-le.

Le navigateur se souvient de la connexion. Pour changer la langue de l'interface, ouvrez le menu de votre compte (en haut à droite) → **Settings** → **Language**.

> Ne partagez jamais ce jeton. En cas de doute, supprimez-le sur GitHub (Settings → Developer settings → Personal access tokens) et créez-en un nouveau.

---

## 2. Publier une actualité

1. Menu **Actualités** → bouton **Nouveau** (ou *New*).
2. Remplissez au minimum :
   - **Titre (français)**
   - **Date**
   - **Catégorie** (Médias, Projet, Événement, Distinction, Soutenance…)
   - **Résumé (français)** : deux ou trois phrases.
3. Facultatif : titre et résumé en anglais (sinon le français s'affiche sur la version anglaise), texte complet, lien vers la source, image.
4. Ajoutez une **Photo** (format paysage de préférence) et son **Crédit photo** : l'actualité apparaît alors dans le diaporama « À la une » en haut des actualités.
5. Cochez **À la une** pour placer une actualité dans le diaporama même sans photo.
6. Cliquez sur **Enregistrer** (*Save*).

Les six actualités les plus récentes apparaissent sur la page d'accueil ; toutes sont sur la page « Actualités ». Les actualités de catégorie **Médias** et **Action grand public** alimentent aussi la rubrique « Médias » (renseignez le champ **Média ou lieu**, par exemple « France 2 »).

---

## 2 bis. Brèves « En bref » (une ligne)

Pour annoncer rapidement une participation à une conférence, un article accepté ou publié, une intervention, une distinction, une arrivée dans l'équipe ou un recrutement :

1. Menu **En bref** → **Nouveau**.
2. Choisissez la **date** et le **type** (Participation, Article accepté, Article publié, Intervention…).
3. Écrivez **une seule phrase** (français, et anglais si possible), par exemple : « Article accepté dans IEEE Transactions on Industrial Electronics ».
4. Facultatif : un **lien** (DOI, page de la conférence, ou une actualité du site).
5. Enregistrez. Les 8 brèves les plus récentes apparaissent en haut de la page d'accueil.

## 2 ter. Recrutement (offres de thèse, post-doc, stage)

1. Menu **Recrutement** : ouvrez le **modèle d'offre** (masqué), utilisez **Dupliquer**, puis remplissez l'intitulé, le type, le début, la date limite, le résumé et la description.
2. Décochez **Masquer du site** et laissez le statut **Ouverte**.
3. Quand le poste est pourvu, passez le statut à **Pourvue / fermée** : l'offre disparaît du site.

Sans offre ouverte, la rubrique affiche le texte « Candidatures spontanées » (modifiable dans Réglages → Profil et coordonnées → Postes ouverts).

---

## 3. Galerie photos (bande défilante)

1. Menu **Galerie photos** → **Nouveau**.
2. Ajoutez la **Photo**, une **Légende** (français, et anglais si possible), la **date** et le **crédit photo**.
3. Facultatif : un **Lien** vers une actualité du site (ex. : `news/2026-06-01-plateforme-vieillissement-batteries/`) ou une adresse `https://…`.
4. Enregistrez. Les photos s'affichent de la plus récente à la plus ancienne ; un clic sur une photo l'agrandit.

Pour retirer une photo sans la supprimer, cochez **Masquer du site**.

---

## 4. Écrire un billet de blog

1. Menu **Blog** → **Nouveau**.
2. Titre, date, **langue du billet** (français ou anglais), chapeau, texte.
3. Pour préparer un billet sans le publier, cochez **Brouillon** ; décochez-le le jour de la publication.

La rubrique Blog est visible sur la page d'accueil ; tant qu'aucun billet n'est publié, elle affiche un message « bientôt ».

Mise en forme du texte : utilisez la barre d'outils (gras, italique, titres, listes, liens, images).

---

## 5. Publications

- Les nouvelles publications déposées sur **HAL** sont ajoutées **automatiquement chaque lundi**.
- Pour en ajouter une à la main : **Publications** → **Nouveau** (titre, auteurs séparés par des virgules, année, type, revue, DOI).
- Pour afficher une publication sur la page d'accueil : ouvrez-la et cochez **Sélectionnée (page d'accueil)**.
- Pour retirer une publication du site sans la supprimer : cochez **Masquer du site**.
- Le petit badge (ex. « IEEE TIE ») est calculé automatiquement ; vous pouvez le forcer avec le champ **Badge**.

---

## 6. Profil, photo, CV et chiffres

Menu **Réglages** → **Profil et coordonnées** :

- **Photo de profil** : de préférence carrée, au moins 400 × 400 pixels, moins de 1 Mo.
- **CV (PDF)** : un bouton « Télécharger le CV » apparaît automatiquement.
- **Indicateurs bibliométriques** : citations et indice h (Google Scholar) ; mettez à jour la date.
- **Profils en ligne** : Google Scholar, ORCID, HAL, LinkedIn… (l'icône est choisie automatiquement d'après le nom).

---

## 7. Réorganiser ou masquer les rubriques

Menu **Réglages** → **Rubriques de la page d'accueil** :

- faites glisser une rubrique pour changer son ordre ;
- décochez **Afficher** pour la masquer ;
- modifiez les titres en français et en anglais.

La rubrique **Enseignement** est masquée au départ : complétez d'abord **Pages → Enseignement** (liste des cours), puis cochez **Afficher**.

---

## 8. Autres textes

Menu **Pages** :

- **Biographie et parcours** : biographie, thèmes, diplômes, étapes du parcours, distinctions.
- **Recherche** : thèmes de recherche et équipements.
- **Équipe et thèses** : doctorants, post-doctorants, thèses soutenues (statut « En cours » ou « Ancien »).
- **Enseignement** : cours et projets d'élèves.

---

## 9. Bon à savoir

- Rien n'est perdu : chaque modification est conservée dans l'historique GitHub et peut être annulée.
- Images : formats JPG, PNG ou WebP, idéalement moins de 1 Mo.
- Si une modification n'apparaît pas après 5 minutes, ouvrez l'onglet **Actions** du dépôt sur GitHub : une coche verte signifie que la mise en ligne a réussi ; une croix rouge indique un problème (prévenez la personne qui gère le site).
