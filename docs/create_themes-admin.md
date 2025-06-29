# 🧩 Creation de themes pour le panel administrateur


## 📚 Sommaire

- **⚙️ Configuration**
- **📬 Publication**

---

## ⚙️ Configuration

1. Créé un dossier avec le nom du thème dans le dossier `themes-admin`
2. Mettre à l'intérieur un fichier **config.json** 
```json
{
    "theme": "Default", // Le nom du thème
    "index": "#", // Lien externe ou chemin vers un fichier de documentation...
    "index_name": "", // Nom du bouton dans modules.php (laisser vide pour qu'il n'y est pas de bouton)
    "theme_descr": "Mon Super Theme", // description du theme


    "base": "base.css", // fichier contenant les headers et footer
    "dash.php": "dash.css",
    "add-admin.php": "add-admin.css",
    "delete-user.php": "delete-user.css",
    "gestion-admin.php": "gestion-admin.css", // fichiers qui sera intégré dans chaque page
    "logs.php": "logs.css",
    "modules.php": "modules.css",
    "register.php": "register.css",
    "theme.php": "theme.css",
    "theme-admin.php": "theme.css",
    "users.php": "users.css"
}
```
3. Mettre les fichiers nécessaires au fonctionnement du theme dans le dossier du theme

> Résultat:
```text
/-> themes-admin
  /-> NOM_DU_THEME
    /-> config.json
    /-> base.css
    /-> ...
```
---


## 📬 Publication

> Pour publier un thème et qu'il soit disponible via la page des [`themes administrateur`](?page=themes-admin) merci de respecter quelques critères.

1. Avoir un repo github public contenant:
    - Le dossier du theme complet
    - Un README.md montrant des visuels du theme
    
2. Créer une issue ayant comme titre le nom de votre theme, en description un lien vers le repo du theme.