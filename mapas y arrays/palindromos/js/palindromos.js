
    //constante con los caracteres que no tendremos en cuenta
    const CAR_PUNT=",.;: ()[]{}-_¡!¿?/\"'`´";
    let texto=prompt("Escribe el texto sobre el que quieres comprobar si es un palíndromo");
    //convertimos a minúsculas
    texto=texto.toLocaleLowerCase("es");
    
    //compararemos la izquierda y la derecha para ver si tenemos el mismo carácter
    let posIzda=0;
    let posDcha=texto.length-1;
    let palíndromo=true; //indica si el texto es palíndromo o no
    let textoR=texto;
    //quitamos tildes
    do{
        texto=textoR; //para guardar el estado previo
        textoR=textoR.replace('á','a');
        textoR=textoR.replace('é','e');
        textoR=textoR.replace('í','i');
        textoR=textoR.replace('ó','o');
        textoR=textoR.replace('ú','u');
        textoR=textoR.replace('ü','u');
        textoR=textoR.replace('à','a');
        textoR=textoR.replace('è','e');
        textoR=textoR.replace('ì','i');
        textoR=textoR.replace('ò','o');
        textoR=textoR.replace('ù','u');
    }while(texto!=textoR);
    texto=textoR;
    //COMPROBACIÓN
    while(palíndromo && (posIzda<posDcha)){
        //saltamos los caracteres depuntuación al lado izquierdo
        while(CAR_PUNT.indexOf(texto[posIzda])!=-1)
            posIzda++;
        //lo mismo a la derecha
        while(CAR_PUNT.indexOf(texto[posDcha])!=-1)
            posDcha--;
        if(posIzda<posDcha){
            palíndromo=(texto[posIzda]==texto[posDcha]);
        }
        posIzda++;
        posDcha--;
    }
    if(palíndromo){
        document.write("<h1>¡Es un palíndromo!</h1>")
    }
    else{
        document.write("<h1>No es un palíndromo</h1>")
    }
   
