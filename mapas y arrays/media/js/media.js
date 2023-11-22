let seguir=false;
let arraym=[];
let num
let total=0;
do{
    num=prompt ("Introduce un numero(escribe 0 para acabar): ");
    if(num!=null){
        num=Number(num);

            if(!isNaN(num)){
                if(num!=0){
                    arraym.push(num);
                }
            }
                else{
                alert("Esto no es un numero")
            }

        }
    }while(num!=null && (isNaN(num) || num!=0));
    
    if(num==null){
        document.write("<p>El usuario canceló la operación</p>");
    }  
    else if(arraym.length>0 && !isNaN(num)){
        for(let n of arraym){
            total+=n;
        }
        document.write(`<p>La media es ${total/arraym.length}</p>`);
    } 









/*
    if(isNaN(num)){
        alert("Esto no es un numero")
    }else{
    arraym.push(num);
    }
} while ( num != 0);
let suma=0;
for(let i=0;i<arraym.length;i++){
    suma += arraym[i];
}
let media = suma/arraym.length;

document.write(`este es el array <b> `
                `${arraym}`)

                */