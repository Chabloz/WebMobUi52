# **Introduction à Vue.js**  

## **Mise en place**  

L’objectif est d’effectuer une première prise en main du framework en explorant ses concepts sous-jacents. Pour bien comprendre son fonctionnement, nous n'utiliserons pas d'outils avancés (comme des gestionnaires de routage ou de gestion d'état). Nous utiliserons [**Vite**](https://vitejs.dev/) pour le packaging et d'autres fonctionnalités.  
Commencez par créer un nouveau projet *Vue* via *Vite*. Lors de la première commande, sélectionnez le framework **Vue** et la variante **JavaScript**.  

Créez un dossier pour le travail pratique et faites l'înstallation de Vite et Vue grâce aux commandes suivantes :  

```bash
npm create vite@latest ./ -- --template vue
npm install
npm run dev
```

La dernière ligne lance un serveur HTTP de développement local avec "hot reloading" et d'autres fonctionnalités de Vite.  

---

## **Prise en main du comportement réactif de Vue.js**  

**Avant de réaliser l'exercice suivant, il est conseillé de lire la documentation Vue.js sur la réactivité :** [https://vuejs.org/guide/extras/reactivity-in-depth.html](https://vuejs.org/guide/extras/reactivity-in-depth.html)  

L'objectif est de comprendre comment Vue.js met à jour automatiquement les vues lorsque les données changent. Pour cela, nous allons créer un convertisseur de température entre **Kelvin (K), Celsius (°C) et Fahrenheit (°F)**.  

### **Version console**  

Nous utiliserons **Kelvin** comme unité de base (puisque c'est l’unité du [Système International](https://fr.wikipedia.org/wiki/Syst%C3%A8me_international_d%27unit%C3%A9s)). Nous calculerons ensuite, de manière réactive, les températures en K (inchangée), °C et °F.  

1. Utilisez la fonction [`ref`](https://vuejs.org/api/reactivity-core.html#ref) pour stocker la température de base dans une variable réactive.  
2. Utilisez [`computed`](https://vuejs.org/api/reactivity-core.html#computed) pour calculer automatiquement les valeurs en K, °C et °F à partir de la température de base.  
3. Ajoutez un [`watch`](https://vuejs.org/api/reactivity-core.html#watch) pour afficher ces trois valeurs dans la console à chaque modification de la température en Kelvin.  
4. Si l'on modifie la valeur en °C ou °F, les autres doivent se mettre à jour automatiquement. Pour cela, utilisez des **getters** et **setters** dans vos *computed properties*.  

---

### **Version Web simple**  

Après cette première exploration de la réactivité, nous allons utiliser la syntaxe **Single File Component** ([SFC](https://vuejs.org/api/sfc-spec.html)) pour créer une application Web de conversion de température.  

Implémentez une interface similaire à cette [démo](https://chabloz.eu/files/temperatures/).  

💡 **Remarque** :  
- La gestion des **arrondis** peut être ajoutée dans un second temps.  
- De même, vous pourrez gérer les **champs vides** et les **bornes des températures possibles** plus tard.  

---

### **Autres convertisseurs**  

Mettez en place d’autres convertisseurs (exemples : **Bytes ⇄ Bits, Timestamp ⇄ Date**, etc.).  

L’objectif est double :  
- **Pratiquer** Vue.js.  
- **Réfléchir à la réutilisation des composants**.  

Créez un composant dédié à la gestion et à l'affichage des champs de saisie utilisateur. Pensez à sa **flexibilité** en utilisant les **props** pour personnaliser son comportement.  

---

### **Version finale**  

Ajoutez un **composant principal** qui gérera l’ensemble de votre application de convertisseurs.  

- Ce composant assurera la **navigation** entre les convertisseurs (via l’API History par exemple).  
- Il affichera dynamiquement le bon convertisseur en fonction de la route.  

---

### **Améliorations possibles**  
✅ Ajouter une gestion plus avancée des erreurs (ex : valeurs invalides).  
✅ Améliorer l’UX (ex : animations, validations en temps réel).  
