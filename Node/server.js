var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Eleve = require('./models/eleve.js');
var app = express();

// j'instance la connection mongo 
var promise = mongoose.connect('mongodb://localhost:27017/ifa', {
    useMongoClient: true,
});
// quand la connection est réussie
promise.then(
    () => {
        console.log('db.connected');
        // je démarre mon serveur node sur le port 3000
        app.listen(3000, function() {
            console.log('listening on 3000 and database is connected');
        });
    },
    err => {
        console.log('MONGO ERROR');
        console.log(err);
    }

);

// Express configs

// j'utilise bodyparser dans toutes mes routes pour parser les res.body en json
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// je déclare mon dossier qui contient mes vues
app.set('views', './views');
// je déclare mon type de moteur de rendu
app.set('view engine', 'jade');

// je déclare mes fichiers statiques
app.use('/js', express.static('./client/js'));
app.use('/css', express.static('./client/css'));

app.use(function (req, res, next) {
    
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        next();
});


// je renvoie l'index.html
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html')
});
app.get('/profil', function(req, res) {
    res.sendFile(__dirname + '/client/profil.html')
});



// API : 
// renvoyer toute la liste des eleves
app.get('/api/liste', function(req, res) {
    Eleve.find({}, function(err, collection) {
        if (err) {
            console.log(err);
            return res.send(500);
        } else {
            return res.send(collection);
        }
    });

});

// renvoie un seul eleve avec son id en param 
app.get('/api/liste/:id', function(req, res) {
    console.log(req.params);
    console.log(req.params.id);
    Eleve.findOne({
        "_id": req.params.id
    }, function(err, monobject) {
        if (err) {
            console.log(err);
            // return res.send(err);
            return res.statusCode = 500;
        } else {
            
            res.send(monobject);
        }
    });
   

});

// supprime un élève en fonction de son id en paramètre
app.delete('/api/liste/:id', function(req, res) {
    console.log(req.body);
    Eleve.findByIdAndremove(req.params.id, function(err, monobject) {
        if (err) {
            console.log(err);
            return res.statusCode = 500;
        }
        else
        {
            res.status(200).send();
        }
    });


});

// permet de mettre à jour un élève dans la bdd
app.put('/api/liste/:id', function(req, res) {
    console.log(req.params);
    console.log(req.body);
    console.log(req.params.id);
    Eleve.update({
        "_id": req.params.id
    },req.body,function(err, response){
        if(err){
            console.log(err);
        }
        if(response){
            console.log(response);
            res.send(200);
        }
    })
});

// gère les requetes post
app.post('/quotes', function(req, res) {
    console.log(req.body);
    console.log("my name is " + req.body.nom);
    var newUser = {
        nom: req.body.nom,
        prenom: req.body.prenom
    };
    res.send(200);

});

app.post('/api/liste', function(req, res) {
    console.log(req.body);
    console.log("my name is " + req.body.nom);

    var eleveToSave = new Eleve(req.body);

    eleveToSave.save(function(err, success) {
        if(err) {
            return console.log(err);
        }
        else {
            console.log(success);
            res.send(success);
        }
    });

    
});

// exemple de rendu html / jade
app.get('/api/liste/jade/:id', function(req, res) {
    console.log(req.params);
    console.log(req.params.id);
    Eleve.findOne({
        "_id": req.params.id
    }, function(err, monobject) {
        if (err) {
            console.log(err);
            return res.send(err);
        } else {
            return res.render('profil', {
                title: 'Hey',
                nom: monobject.nom,
                prenom: monobject.prenom
            });
           
        }
    });
  

});

