// Learn array part 2

const MarvelHeros = ["IronMan", "Flash", "SpiderMan","Captain America",999 ]
const DCheros = ["SuperMan", "Batman", 77]


// MarvelHeros.push(DCheros)
// console.log(MarvelHeros);

// console.log (MarvelHeros[5][1])

//concate operation
const AllnewArr = MarvelHeros.concat(DCheros)

//console.log(AllnewArr);

//spread operation
const all_Spread_heros =[...MarvelHeros,...DCheros]
//console.log(all_Spread_heros);

// flat 

const flatArr = [1,2,3 ,[4,5],[6,7,8,[11,22]]]

//console.log(flatArr.flat(Infinity)); //infinite travels all depth and convert all array into single line array

// convert to array 

const Rushiarray ="Rushikesh"
console.log(Array.isArray("Gangavane")); // isArray will check it is array or not

console.log(Array.from (Rushiarray)); // from means it will convert string into array
console.log(Array.from({name:"Intelizign"}.name)) //intresting case here: this will provide you empty array

let score1 =100
let score2 =300
let score3 =400
console.log(Array.of(score1,score2,score3))