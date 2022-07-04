function binary(a){
    let strNum = a.toString();
    b=strNum.length;
    let binVal="";
    while(a>=1) {
        binary = a%2;
        binVal = binary.toString().concat(binVal);
        
        a=parseInt(a/2);
        
    }
    
    console.log(binVal);
    }
    binary(25)