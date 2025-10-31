# 🗓️ Mini Application de Réservation (Calendrier Interactif)

## 📋 Description
Cette application web permet de **gérer des réservations** dans un calendrier interactif.  
L’utilisateur peut :
- Ajouter une réservation dans une cellule du tableau (jour ou créneau horaire)
- Modifier une réservation existante
- Supprimer une réservation
- Chaque réservation affiche le **nom, l’heure de début et de fin**, ainsi que le **type** (VIP, Anniversaire, Place…)

Le tout est géré avec **HTML, CSS et JavaScript ** sans frameworks externes.

---

## 🚀 Fonctionnalités

### ➕ Ajouter une réservation
- Cliquez sur une case du calendrier (cellule avec la classe `.calandar-active`)
- Un formulaire s’affiche pour saisir :
  - Nom
  - Heure de début
  - Heure de fin
  - Date
  - Nombre de personnes
  - Type de réservation (Vip, Anniversaire, Place)
- Après validation, la réservation s’ajoute dans la cellule correspondante.

### ✏️ Modifier une réservation
- Cliquez sur l’icône 🖊️ **(fa-pen)** dans la réservation.
- Le formulaire se remplit automatiquement avec les infos existantes.
- Modifiez les champs souhaités, puis validez pour enregistrer les changements.

### 🗑️ Supprimer une réservation
- Cliquez sur l’icône 🗑️ **(fa-trash)**.
- La réservation est immédiatement supprimée de la cellule.

### 🧩 Restrictions
- Une seule réservation par case (`<td>`).
- L’heure de fin doit être supérieure à l’heure de début.
- Tous les champs sont obligatoires.

---

## 🛠️ Technologies utilisées

| Technologie | Utilisation |
|--------------|-------------|
| **HTML5** | Structure de la page et du calendrier |
| **CSS3** | Mise en page et styles du calendrier et du formulaire |
| **JavaScript (ES6)** | Gestion de la logique : ajout, suppression, modification |
| **FontAwesome** | Icônes (🖊️ et 🗑️) utilisées pour les actions |


