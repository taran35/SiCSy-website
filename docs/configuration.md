# 🚀 Installation

## 📚 Sommaire

- 1️⃣ **Création de la base de données et du compte administrateur**
- 2️⃣ **Paramètrage des pages d'erreurs personalisées**
- 🧩 **Ajout de modules** 
- 🏔 **Ajout de thèmes**

### 1️⃣ Création de la base de données

Ouvre le fichier `init.php` sur ton navigateur
- choisi entre une ou deux bases de données (séparer fichiers et utilisateurs où tout rassembler)
- renseigne les informations de connexion à la base de donnée
- renseigne les informations de connexion pour ton compte administrateur

### 2️⃣ Paramètrage des pages d'erreurs personalisées
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