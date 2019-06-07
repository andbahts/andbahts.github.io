for (let count = 1; count < 10000000; count++) {
    let b = 1;
    let a = ((count + 2) * count * count) * b * b;
    b = a * a;
    console.log(b);
}
