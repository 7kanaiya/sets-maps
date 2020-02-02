//Sets 

let setObj = new Set();
    setObj.add(1);
    setObj.add(2);
    setObj.add(1);
    setObj.add(3);
    setObj.add(3);
    setObj.add(2);

setObj
    .forEach((leElement) => {
        console.log(leElement);
    })

//Adding array elements into the Set

let arrayObj = new Array();
let arraySet = new Set();


arrayObj.push(1,2,2,3,4,4,2,1,5,6,7,7);

//Pushing the objects having same data did not affect this both of the objects got added.
arrayObj.push(
    {
        firstname:"kanaiya",
        lastname:"bhanushali"
    }
)
arrayObj.push(
    {
        firstname:"kanaiya",
        lastname:"bhanushali"

    }
)


arrayObj
    .forEach((leElement)=>{
        arraySet.add(leElement);
    })

arraySet
    .forEach((leElement)=>{
        console.log(leElement);
    })

console.log(arraySet.has(1)); //to check value is present or not
console.log(arraySet.size); //size of set
//let getEntries = arraySet.entries();
//console.log(getEntries.next().value);


//Maps
let mapObj = new Map();

mapObj.set(1,1);
mapObj.set(2,2);
mapObj.set(3,3);
mapObj.set(3,4);

console.log(mapObj);

mapObj
    .forEach((leElement)=>{
        console.log(leElement);
    })

//adding arrays data into the map

let arrayObj2 = [22,222,"kanaiya","bhanushali",2];

let arrayMap = new Map();
let counter = 1;
arrayObj2
    .forEach((leElement)=>{
        arrayMap.set(counter,leElement);
        counter++;
    })

arrayMap
    .forEach((leElement)=>{
        console.log(leElement);
    })













