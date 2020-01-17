function acharNumero(num){
var n= Number(num)
if (n<5){
return "mercurio"}
if (n>=5 && n<=10){
return "venus"}
if (n>10 && n<=100){
return "terra"}
if (num>100){
return "marte"}
}