function Variables(){
    var a=5;
    let x=10;
    var a="10";
    //let x="20";
    //const a1=20;
    const a1="20";
    document.getElementById("Var1").innerHTML=a;
    document.getElementById("Let1").innerHTML=x;
    document.getElementById("Cons1").innerHTML=a1;
    //a1=200;
    x=200;
}
function Variables2(){
    var a=5;    
    var a="1000";
    let x="20";
    const a1=20;    
    //a1=200;
    x=200;
    document.getElementById("Var1").innerHTML=a;
    document.getElementById("Let1").innerHTML=x;
    document.getElementById("Cons1").innerHTML=a1;
}
function ValoresB(){
    var a,b,c;
    a=10;
    b=200;
    c=a>b;    
    document.getElementById("Var1").innerHTML=c;
    c=a+b;
    document.getElementById("Let1").innerHTML=c;
}
function ValoresL(){
    let a,b,c;
    a=10;
    b=200;
    c=a>b;    
    document.getElementById("Var1").innerHTML=c;
    c=a+b;
    {
        let c=200;
        
    }    
    document.getElementById("Let1").innerHTML=c;
}
function Arreglos(){
    const SitE=["Especial","Regular","Excelente"];
    SitE[0]="EspecialX";
    SitE.push("No espeficado");
    document.getElementById("Var1").innerHTML=SitE[0];
    document.getElementById("Let1").innerHTML=SitE[1];
    document.getElementById("Cons1").innerHTML=SitE[3];
}