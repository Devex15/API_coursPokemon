console.log("Hello Node . Comment ça va ? ")

//on met en place le premier point de terminaison du projet:
// Ce point de terminaison va renvoyer les résultats des premières requêtes .

// On charge express : il va permettre de mettre en place notre api de base
const express = require ('express');

//On recrée l'app en utilisant le module express devenu une constante
const app = express();

//On définit le port sur lequel on effectue l'écoute 
const port = 3000;

// On met en place notre premier entry point : Une réponse à la requête
// Il utilise une fonction javascript avec un endpoit / qui est la racine 
// et une fonction fléchée  req , res , qui va recevoir la requête et renvoyer la réponse res 
app.get("/", (req,res) => res.send(`Hello , express! yayyyy !`))

//On lance l'écoute sur le port que l'on a définit (ie => 3000)
app.listen(port, () => console.log(`Notre application Node est démarré sur : http:// localhost:${port}. Youpiiii ! ` ))
