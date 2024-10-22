function is_even_or_odd(x){
    if(x%2 == 0){
        // number is divisible by 2
        return "even.";
    }
    else{
        return "odd."
    }
}

let x = is_even_or_odd(667);

console.log(x);