const write = require('node:fs').writeFile;

write('./testo.txt', 'questo è un file', { encoding: "utf-8" }, (error, data) => {
    if (error) {
        console.error("Si è verificato un errore:", error);
        return
    } else {
        console.log("File creato con successo", data);
    }
});
