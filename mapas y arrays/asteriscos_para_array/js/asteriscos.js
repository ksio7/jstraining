const array20=[];
let num=0;

for(let i=0;i<=19;i++){
    let n=parseInt(Math.random()*50)+1;
    array20.push(n);
}
console.log(array20);

for(let num of array20){
    
    for(let i=1;i<=num;i++){
        document.write("*")

    }
    document.write("<br>");
}
