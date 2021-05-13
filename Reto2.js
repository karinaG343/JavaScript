let num = [7,5,3,4];

matriCuadrada(num);

function matriCuadrada(num){
var entero = false;
console.table(num);
// console.log(typeof num);

Tamat = num.length;
raiz = Math.sqrt(Tamat);
console.log(typeof raiz);

if(raiz - Math.floor(raiz) == 0){
  entero = true;
 }
else{
  entero = false;
 }

if(entero == true){
  var matriz=[];
  for(var x=0;x<raiz;x++){
    matriz[x]=[];
    for(var y=0;y<raiz;y++){
      matriz[x][y]=0;
    }
  }
  
  var i = 0;
  for(var x=0; x < raiz; x++){
    for(var y=0; y < raiz; y++){
      matriz[x][y] = num[i];
      i++;
    }
  }
  
  var Suma1=0, Suma2=0;
  for(i=0; i<raiz ; i++){
    for(j=0; j<raiz ; j++){
      if(i==j){
       Suma1=Suma1 + matriz[i][j];
      }
    }
  }
  var icondicion=0,jcondicion=raiz-1;
  for(i=0; i<raiz ; i++){
    for(j=raiz-1; j>=0; j--){
      if(i==icondicion && j==jcondicion){
      Suma2=Suma2 + matriz[i][j];
      icondicion++;
      jcondicion--;
      }
  }
}

console.table(matriz);
console.log(typeof matriz);
console.log(Suma1+"-"+Suma2);
var diferencia=Math.abs(Suma1-Suma2);
console.log("La direncia absoluta es: "+diferencia);
 }
else{
  console.log("La matriz no es cuadrada");
 }

}