
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Utilisation de body-parser pour traiter les données POST
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('/Users/lecat/Desktop/portfolio/'));

// Route pour gérer la requête POST du formulaire
app.post('/submit-form', (req, res) => {
    const formData = req.body;

    // Traitement des données du formulaire
    // Vous pouvez accéder aux données comme formData.name, formData.email, etc.
    console.log(formData); // Afficher les données dans la console

    // Lire le fichier HTML de la page de confirmation
    fs.readFile(path.join(__dirname, 'confirmation.html'), 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur de lecture du fichier de confirmation :', err);
            res.status(500).send('Erreur de lecture du fichier de confirmation');
            return;
        }

        // Envoyer le contenu HTML en réponse à la requête
        res.send(data);
    });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
