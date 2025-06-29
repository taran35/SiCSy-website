# ⚙️ Creation de modules


## 📚 Sommaire

- **⚙️ Configuration**
- **📬 Publication**

---

## ⚙️ Configuration

1. Créé un dossier avec le nom du module dans le dossier `modules`
2. Mettre à l'intérieur un fichier **config.json** 
```json
{
    "status": "off", //Ne rien changer ici
    "index": "../index.php", //lien externe ou chemin vers un fichier de documentation, affichage ou autre
    "index_name": "Documentation" //nom du bouton affiché sur la page modules.php (laisse vide pour ne pas mettre de bouton)
    "param": {
        "webhook_url": "https://discord.com/api/webhooks/....", //Les différents paramètres modifiables du module
        "webhook_name": "Mon super webhook"
    }
}
```
3. Mettre les fichiers nécessaires au fonctionnement du module dans le dossier du module

> Résultat:
```text
/-> modules
  /-> NOM_DU_MODULE
    /-> config.json
    /-> index.php (page du module, documentation...)
    /-> LES_DIFFERENTS_FICHIERS_DU_MODULE
```
---


## 📬 Publication

> Pour publier un module et qu'il soit disponible via la page des [`modules`](?page=modules) merci de respecter quelques critères.

1. Avoir un repo github public contenant:
    - Le dossier du module complet
    - Un README.md expliquant toutes les modifications à appliquer au code source du projet
    
2. Créer une issue ayant comme titre le nom de votre module, en description un lien vers le repo du module et une description de son fonctionnement. Indiquer aussi les différents fichiers modifiés et à quel endroit ils sont modifiés.