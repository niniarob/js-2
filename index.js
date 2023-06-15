let x = 10;
let y = 40;
let z = 6;

switch(true){
    case ( x >= y && x >= z):
        console.log("x")
         break;
    case (y >= x && y >= z):
         console.log("y")
         break;
    case (z >= x && z >= y):
        console.log("z")
         break;
}
