let size = 8;
let desk = "";
let line = " ";
for (let y = 0; y < size; y++) {
    line = "";
    if (y % 2 == 0) line = "#";
    for (let x = 0; x < size; x++) {
        line += " #"; 
    }
    desk = desk + line + "\n";
}

console.log(desk);
