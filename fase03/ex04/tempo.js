function tempo(data1, data2, unidade){
   var a = new Date (data1);
   var b = new Date (data2);
   var c = unidade;
 var e = Math.abs(a.getTime() - b.getTime()); 
 var f = Math.ceil(e / (1000 * 60 * 60 * 24));
 var g = f/30;
 var h = (f/30)/12;
 if (c == "dia")
 return f.toFixed(0);
    else if (c == "mes")
    return g.toFixed(0);
    else if (c == "ano")
    return h.toFixed(0);
}