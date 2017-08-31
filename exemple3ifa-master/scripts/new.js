localStorage.setItem("username", "John");

localStorage.setItem("userList", data);

console.table(localStorage.getItem("userList"));
if (!window.indexedDB) {
    window.alert("Votre navigateur ne supporte pas une version stable d'IndexedDB. Quelques fonctionnalités ne seront pas disponibles.")
} else {
    console.log("indexedDB is useable");
    // This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
    var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

    // Open (or create) the database
    var open = indexedDB.open("ifa", 1);

    // Create the schema
    open.onupgradeneeded = function() {
        var db = open.result;
        var store = db.createObjectStore("eleve", {
            keyPath: "id"
        });
        var index = store.createIndex("NameIndex", ["nom", "prenom"]);
    };

    open.onsuccess = function() {
            // Start a new transaction
            var db = open.result;
            var tx = db.transaction("eleve", "readwrite");
            var store = tx.objectStore("eleve");
            var index = store.index("NameIndex");

            // Add some data
            data.forEach(function(item){
            	store.put(item);
            })
           

            // Query the data
            // var getJohn = store.get(12345);
            // var getBob = index.get(["Smith", "Bob"]);

            // getJohn.onsuccess = function() {
            //     console.log(getJohn.result.name.first); // => "John"
            // };

            // getBob.onsuccess = function() {
            //     console.log(getBob.result.name.first); // => "Bob"
            // };

            // Close the db when the transaction is done
            tx.oncomplete = function() {
                db.close();
            };
        }
        // request.onerror = function(event) {
        //     // Gestion des erreurs.
        // };
        // request.onupgradeneeded = function(event) {
        //     var db = event.target.result;

    //     // Créer un objet de stockage qui contient les informations de nos clients. 
    //     // Nous allons utiliser "ssn" en tant que clé parce qu'il est garanti d'être 
    //     // unique - Du moins, c'est ce qu'on en disait au lancement.
    //     var objectStore = db.createObjectStore("eleves", {
    //         keyPath: "ssn"
    //     });


    //     // Utiliser la transaction oncomplete pour être sûr que la création de l'objet de stockage
    //     // est terminée avant d'ajouter des données dedans.
    //     objectStore.transaction.oncomplete = function(event) {
    //         // Stocker les valeurs dans le nouvel objet de stockage.
    //         var customerObjectStore = db.transaction("eleves", "readwrite").objectStore("eleves");
    //         for (var i in data) {
    //             customerObjectStore.put(data[i]);
    //         }
    //     }
    // };
}


// console.table(data);