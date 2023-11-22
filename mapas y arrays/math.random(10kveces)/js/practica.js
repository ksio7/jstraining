const n_repeticiones=10000;
let mapa=new Map();

for(let i=1;i<=10;i++){
    mapa.set(i,0);
    
}

for(i=1;i<=n_repeticiones;i++){
    let n=parseInt(Math.random()*10+1)
    let frecActual=mapa.get(n);
    mapa.set(n,frecActual+1);
}

document.write("<h1>Frecuencias</h1>");
document.write("<ul>");
for(let i=1;i<=10;i++){
    document.write(
        `<li><strong>Numero ${i}: </strong> `+
        `${mapa.get(i)}</li>`

    );
}
document.write("</ul>");
