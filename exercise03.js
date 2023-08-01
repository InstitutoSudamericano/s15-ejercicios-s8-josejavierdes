function sumOverTen(list){
    let sum =0;
    for(let i =0; i<list.length; i++){
        if(list[i]>10){
            sum+= list[i];
        }
    }
    return sum;
}

let nums = [10,50,8,4]; 

let resultado = sumOverTen(nums);

alert(resultado);
