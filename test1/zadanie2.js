
   const numThenChar = [
    [1, 2, 4, 3, "a", "b"],
    [6, "c", 5], [7, "d"],
    ["f", "e", 8]
    ]; 
    console.log(numThenChar);
var arr1 = [].concat(numThenChar[0],numThenChar[1],numThenChar[2],numThenChar[3]);
const collator =new Intl.Collator ('en');
const sortArr = arr1.sort((a, b) => {
    if (isNaN(a) && !isNaN(b)) {
        return 1
    } else if (!isNaN(a) && isNaN(b)){
        return -1
    }
    return collator.compare(a, b);
});

let finalArr = sortArr;
let chank_size = 6;
let result = [];

while (finalArr.length > 0) {
    result.push(finalArr.splice(0, chank_size));
    chank_size = chank_size == 3 ? 2 : 3;
}
console.log(result);

