pesoM = 95;
estaturaM = 1.88;
pesoL = 85;
estaturaL = 1.76;

imcM = pesoM/(estaturaM**2);
imcL = pesoL/(estaturaL**2);

marioMayorIMC = (imcM > imcL) ? true : false;
// console.log(imcM);
// console.log(imcL);
console.log(marioMayorIMC);