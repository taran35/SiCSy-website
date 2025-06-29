# 🚀 Installation

## 📚 Sommaire

- 1️⃣ **Création de la base de données**
- 2️⃣ **Connecte ta base de données**
- 3️⃣ **Création du premier utilisateur administrateur**
- 4️⃣ **Paramètrage des pages d'erreurs personalisées**
- 🧩 **Ajout de modules** 
- 🏔 **Ajout de thèmes**

### 1️⃣ Création de la base de données

Exécute les commandes SQL présentes juste en dessous dans ta base de données pour créer les tables nécessaires.

```
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pseudo VARCHAR(200) NOT NULL,
    mail VARCHAR(200) NOT NULL,
    password VARCHAR(500) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP 
);
CREATE TABLE email_codes (
    email VARCHAR(200) PRIMARY KEY,
    code INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP 
);
CREATE TABLE files (
    parent VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    content VARCHAR(10000), 
    type VARCHAR(10) NOT NULL
);
CREATE TABLE logs (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    IP VARCHAR(20) NOT NULL,
    type VARCHAR(30) NOT NULL,
    path VARCHAR(500) NOT NULL,
    content VARCHAR(10000),
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    user VARCHAR(100) NOT NULL
);
CREATE TABLE adm_token (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mail VARCHAR(200) NOT NULL,
    token VARCHAR(250) NOT NULL
);
```

--- 
### 2️⃣ Connecte ta base de données

  > Défini tes informations de connection dans le fichier [`bdd.php`](https://github.com/taran35/SiCSy/blob/main/account/bdd.php) pour les utilisateurs et dans [`fbdd.php`](https://github.com/taran35/SiCSy/blob/main/main/fbdd.php) pour les fichiers 

> ℹ Info : possibilité de mettre la même dans les deux pour plus de simplicité
### 3️⃣ Création du premier utilisateur administrateur

1. Ouvre le fichier `create_first_admin.php` dans un navigateur web. (  monsite.fr/create_first_admin.php  )
2. Remplis le formulaire :
   - 👤 **Pseudo** : au moins 4 caractères
   - 📧 **Adresse mail** : valide
   - 🔑 **Mot de passe** : au moins 8 caractères
3. Deux requêtes SQL s’afficheront à l’écran.
4. Exécute-les dans ta base de données pour créer ton premier compte admin.

> ⚠️ **Important** : pense à **supprimer** les fichiers `create_first_admin.php` et `bdd.txt` après création du compte et de la base de données pour des raisons de sécurité.

### 4️⃣ Paramètrage des pages d'erreurs personalisées
 - **Apache :** insérer dans un fichier `.htaccess` à la racine du site ces lignes et fais tes pages d'erreurs personnalisées:
 ```text
    ErrorDocument 404 erreurs/404.html
 ...
 ```
 - **Nginx :** insérer dans le fichier `nginx.conf` ces lignes et fais tes pages d'erreurs personnalisées:
 ```text
    error_page 404 /erreurs/404.html;

    location = /erreurs/404.html {
        internal;
    }
...
 ```
Il ne reste plus qu'à redémarrer votre serveur et créer vos propres messages d'erreurs dans le dossier `erreurs` !
---

## 💡 Utilisation

Une fois la base de données configurée et l’administrateur créé, le système est prêt à être utilisé !

Connecte-toi avec ton compte admin pour commencer à :
- Gérer les fichiers
- Gérer les utilisateurs
- Suivre l'activité du cloud

> ⚠️ **Information** : La base de données permet de stocker des fichiers jusqu'à 10.000 caractères, pour modifier cette limite:
1. Initialiser la base de données **files** en modifiant cette ligne `content VARCHAR(VALEUR_VOULU),` 
1. Initialiser la base de données **logs** en modifiant cette ligne `content VARCHAR(VALEUR_VOULU),` 
3. Modifier le fichier [`cloud_script.js`](https://github.com/taran35/SiCSy/blob/main/main/cloud_script.js) à la ligne 411 `if (Pcontent.length < VALEUR_VOULU) {`

> 🧩 **Ajout de modules** :
 - Pour trouver les modules officiels rends toi sur la page des [`modules`](?page=modules) puis suis les instructions sur le README du module que tu souhaite installer 

> 🏔 **Ajout de thèmes** :
 - Pour trouver les thèmes officiels rends toi sur la page des [`thèmes`](?page=themes) puis suis les instructions pour le thème que tu souhaites installer

 > 🏔 **Ajout de thèmes sur le panel administrateur** :
 - Pour trouver les modules officiels rends toi sur la page des [`thèmes administrateurs`](?page=themes-admin) puis suis les instructions pour le thème que tu souhaites installer