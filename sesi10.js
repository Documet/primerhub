function id (a){
    return document.getElementById(a)
}
//1010101
function Serie1(){
    valor = parseInt(getElementById("inputP1").value)
    arreglo = [1]
    i=1
    while(i<=valor){
        console.log(arreglo[i-1])
        if(i%2==0) arreglo.push(1)
        else arreglo.push(arreglo[i-1]-1)
        i++
    }
}
//-1 1 -1 1 -1
function Serie2(){
    valor = parseInt(getElementById("inputP2").value)
    arreglo = [1]
    i=1
    while(i<=valor){
        console.log(arreglo[i-1])
        if(i%2==0) arreglo.push(1)
        else arreglo.push(arreglo[i-1]+2)
        i++
    }
}
//1 2 -1 -2 1 2
function Serie3(){
    valor = parseInt(getElementById("inputP3").value)
    arreglo = [1]
    i=1
    a=1
    while(i<=valor){
        console.log(arreglo[i-1]*a)
        if(i%2==0){
            arreglo.push(1)
            a*=-1 
        } 
        else arreglo.push(arreglo[i-1]+1)
        i++
    }
}

//345 345
function Serie4(){
    valor = parseInt(getElementById("inputP4").value)
    arreglo = [3]
    i=1
    while(i<=valor){
        console.log(arreglo[i-1])
        if(i%3==0) arreglo.push(3)
        else arreglo.push(arreglo[i-1]+1)
        i++
    }
}