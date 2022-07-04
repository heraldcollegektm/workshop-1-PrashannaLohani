function oddishEvenish(a){
    sum=0;
    for(i=0; a!=0; i++){
        let r = a%10
        sum = sum+r;
        a = Math.floor(a/10);
    }
    if (sum%2==0){
        return"Evenish";
    }else{
        return"Oddish";
    }
}
console.log(oddishEvenish(7));