const isSunnyDay = true;
const isAutumn = false;
const itIsRaining = false;
const isSummer = true;

console.log("\n- Risultati True: ");
console.log("1)", isSunnyDay && isSummer);     //Operatore AND: True & True = True
console.log("2)", isSunnyDay || itIsRaining);  //Operatore OR: True & False = True
console.log("3)", itIsRaining || !isAutumn);   //Operatore OR: False & True = True

console.log("\n- Risultati False: ");
console.log("1)", isSummer && isAutumn);       //Operatore AND: True & False = False
console.log("2)", itIsRaining && isSunnyDay);  //Operatore AND: False & True = False
console.log("3)", isAutumn || itIsRaining);    //Operatore OR: False & False = False

/* 
console.log("\n- Risultati True: ");
console.log("1) ", isSunnyDay === isSummer && isAutumn === itIsRaining);
console.log("2) ", isSunnyDay == !isSummer || isAutumn == itIsRaining);
console.log("3) ", !isSunnyDay != isSummer || isAutumn != itIsRaining);

console.log("\n- Risultati False: ");
console.log("4) ", !isSunnyDay != isSummer && isAutumn != itIsRaining);
console.log("5) ", isSunnyDay == !isSummer && isAutumn === itIsRaining);
console.log("6) ", !isSunnyDay != isSummer && isAutumn != itIsRaining); 
*/