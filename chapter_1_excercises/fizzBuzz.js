for(let count = 1; count < 101; count++){
    if (count % 3 == 0 && count % 5 == 0) console.log(count,"fizzbuzz");
    else if (count % 3 == 0) console.log(count,"fizz");
    else if (count % 5 == 0) console.log(count,"buzz");
    else console.log(count);
}

