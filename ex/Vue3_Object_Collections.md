# **📆 Application d'Horaires avec Vue.js + Quasar**

## **⚙️ Mise en place**

L’objectif est de concevoir une application web responsive pour consulter des horaires de cours, en utilisant **Vue.js**, **Vite** et **Quasar**.

Commencez par créer un nouveau projet via Vite et installez les dépendances nécessaires :

```bash
npm create vite@latest ./ -- --template vue
npm install
npm install --save quasar @quasar/extras
npm install --save-dev @quasar/vite-plugin
```

### **🛠️ Configuration**

**`vite.config.js`**

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar(),
  ]
});
```

**`main.js`**

```js
import { createApp } from 'vue';
import { Quasar } from 'quasar';

import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/dist/quasar.css';

import App from './App.vue';

const myApp = createApp(App);

myApp.use(Quasar, {
  config: {
    brand: {
      // Définissez ici vos couleurs de thème personnalisées
    }
  },
  plugins: {},
});

myApp.mount('#app');
```

Lancez ensuite l’environnement de développement :

```bash
npm run dev
```

## **🎯 Objectif de l'application**

Créer une application moderne et ergonomique pour consulter les horaires de cours, en s’inspirant de l'actuel :  
[https://horaires.chabloz.eu](https://horaires.chabloz.eu)

Données disponibles au format JSON :  
[https://chabloz.eu/files/horaires/all](https://chabloz.eu/files/horaires/all)

## **✨ Fonctionnalités attendues**

- Affichage des horaires avec une interface claire et structurée (et un peu moins "brute" que dans l'app actuelle 😅)
- Chargement dynamique des données (via `fetch`) ou à partir d’un fichier local.
- 🔍 Barre de recherche pour filtrer les cours par nom.
- 🌓 Changement de thème **clair/sombre** :
  - Thème initial basé sur la préférence système.
  - Persistance de la préférence utilisateur via `localStorage`.
