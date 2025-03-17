//Aggiungere un delay quando andiamo a stampare il nostro "Hello" "Mattia" mediante la funzione setTimeout()

function printName(firstName){
    setTimeout(function() {
        console.log(firstName);
    }, 2000);
}

function sayHelloName(callback){
    const firstName = "Mattia";
    console.log("Hello");
    callback(firstName);
}

sayHelloName(printName);



