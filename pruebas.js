
let array=[];
for(let i=0;i<500;i++){
    let num=parseInt(Math.random()*100)+1;
    array.push(num);
    array.forEach(function(numero){
        console.log(numero);
    });

}