var array=[];
var texto;
const TAM_GRUPO=3;
do{
    texto=prompt("Escribe el nombre del siguiente alumno\n"+
    "(pulse Aceptar sin indicar alumno alguno, para acabar");
    if(texto!=null && texto.length>0){
        array.push(texto);
    }
}while(texto!=null && texto.length>0);

if(texto==null){
    document.write("<p>Se canceló la operación</p>");
}
else{
    //movimiento aleatorio del array, realizamos
    //intercambios de elementos, el número de intercambios será el doble del tamaño del array
    let n1,n2;
    for(let i=1;i<=array.length;i++){
        n1=parseInt(Math.random()*array.length);
        n2=parseInt(Math.random()*array.length);
        //intercambiamos elementos
        [array[n1],array[n2]]=[array[n2],array[n1]]
    }
    //cálculo del número de grupos
    let nGrupos=parseInt(array.length/TAM_GRUPO);
    let grupo=[];
    //colocamos los grupos
    //primero hacemos los grupos regulares de 3
    for(let i=0,k=0;i<nGrupos;i++){
        grupo[i]=[];
        for(let j=0;j<TAM_GRUPO;j++,k++){
            grupo[i][j]=array[k];
        }
    }
    //si hay alumnos sobrantes, les colocamos de forma aleatoria en un grupo
    let grupoAlea;
    for(let i=TAM_GRUPO*nGrupos;i<array.length;i++){
        grupoAlea=parseInt(Math.random()*nGrupos);
        if(grupo[grupoAlea].length<=TAM_GRUPO){
            //en ese grupo cabe uno más
            grupo[grupoAlea][TAM_GRUPO]=array[i];
        }
        else{
            i--; //truco para que se vuelva a calcular otro número aleatorio
        }
    }

    //Mostrar los grupos
    let cont=1;
    for(let g of grupo){
        document.write(`<p><strong>Grupo ${cont}: </strong>`)
        for(let persona of g){
            document.write(persona+" ");
        }
        cont++;
        document.write("</p>");
    }
}