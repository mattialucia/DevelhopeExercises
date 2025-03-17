// Convertire la seguente funzione basata su callback in una funzione basata su Promise.

/*
function callback_BasedFunction(arg1, arg2, callback) {
  setTimeout(() => {
    const result = arg1 + arg2;
    if (result % 2 !== 0) {
      callback(null, result);
    } else {
      callback(new Error("Result is not odd!"), null);
    }
  }, 1000);
}
*/

function Promise_BasedFunction(arg1, arg2) {
    return new Promise((resolve, reject) => {
        const result = arg1 + arg2;
        console.log(`The numbers to sum are: ${arg1}, ${arg2}.`);
        console.log("Calculating the result...");
        setTimeout(() => {
            if (result % 2 !== 0) {  // Se il risultato è dispari va in resolve, altrimenti in reject.
                resolve(result);
            } else {
                reject(("Result is not odd."));
            }
        }, 1000);
    });
}

Promise_BasedFunction(3, 5)
    .then((result) => console.log("Il risultato é dispari:", result))
    .catch((error) => console.error("Error:", error));