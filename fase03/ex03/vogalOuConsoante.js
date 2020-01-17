function vogalOuConsoante(letra) {
var a= letra.toString()
var b= a.substr(-1) == "a"  || 
   a.substr(-1) == "A"  ||
  a.substr(-1) == "e"  || 
   a.substr(-1) == "E"  ||
  a.substr(-1) == "i"  ||
   a.substr(-1) == "I"  ||
  a.substr(-1) == "o"  ||
   a.substr(-1) == "O"  ||
  a.substr( - 1 ) == "u" ||
   a.substr(-1) == "U"
if  ( b ) {
return  "Vogal" 
}
else  {
return  "Consoante"
}
} 