// Ejercicio 1
const printMessage = (message ) => console.log(message )


printMessage("hola")
// Ejercicio 2
const createMultplication = (number1, number2) => {

    let result = number1 * number2

    return result

}

console.log(createMultplication(2,5))



// Ejercicio 3

const array = [ 1,2,3,4,5,6,7,8,9 ]

let mapArray = array.map(createMultplication);

console.log(mapArray)

// Ejercicio 4

function mostAlcoholicBeers(beers) {

    let newArray = beers.filter((beer) => beer.abv >= 7.5);

 return newArray
   
}


console.log(mostAlcoholicBeers(beers))    

// Ejercicio 5

function leastBitter (beers){
    
    let newArray = beers.filter((beer) => beer.ibu < 42);

    return newArray
}
 
console.log(leastBitter(beers))    

// Ejercicio 6
function nameBeer (beers, name){

    let newArray = beers.filter((beer) => beer.name == name);
    
    return newArray
}
 
console.log(nameBeer(beers, "Trashy Blonde"))    
   
// Ejercicio 7

function ibuBeer (beers, ibu){

  let ibubeer = beers.find(beer => beer.ibu == ibu);

  if (ibubeer ){
    return ibubeer

}else{
     return `There is no beer with an ibu of (${ibu}).` 
}
}



console.log(ibuBeer(beers, 30))


// Ejercicio 8



// function positionName (array, name ){

//   const result = array.map((beer, index)=>{
//         if(beer.name.toLowerCase() == name.toLowerCase()){
//             return index
//         }    
//     })
//     const newArray = result.filter(e => e != undefined)

//     if(newArray == ""){
//        return `${name} does not exist.`
//     } return newArray
//  }
    
// console.log(positionName(beers, "Buzz"))


// Ejercicio 8 2da forma 
 

function positionName (array, name ){
    
    const newArray = array.findIndex(beer => beer.name.toLowerCase() == name.toLowerCase())
    const filter = array.filter(beer => beer.name.toLowerCase() == name.toLowerCase())
    
   
    if(filter == "" && newArray){
         return `${name} does not exist.`
    }else{
       return `index: ${newArray}` 
    }
   
    
 }
    
console.log(positionName(beers, "buzz"))


// Ejercicio 9

// function abvFilter(beers, abv) {
//     let result = []
//         beers.map(function(beer){
//         if (beer.abv <= abv ){  
//           let newObject = {name:beer.name,ibu:beer.ibu, abv:beer.abv};
//           if (newObject != undefined){
//             result.push(newObject)
//           }
//         }
// });

//     return result
//  }   

// Ejercicio 9 2da forma
 function abvFilter(beers, abv) {
    let result = []

    let newArray= beers.filter(beer => beer.abv <= abv);
    
    newArray.forEach(beer => {
        result.push({name:beer.name, ibu:beer.ibu, abv:beer.abv})
    });
   
    return result
 }  


console.log(abvFilter(beers, 4.5))

// Ejercicio 10


function propertyOrder(array, property, boolean) {
    let result = []
    const element = array.map( element => element[`${property}`])

    if(boolean){
             element.toSorted((a, b )=>{
                if(a < b){
                    return -1
                }else if(a > b){
                    return 1
                }else{
                    return 0
                }
            })
    }else{
         element.toSorted((a, b )=>{
        if(a > b){
            return -1
        }else if(a < b){
            return 1
        }else{
            return 0
        }
    })}

    for (let i = 0; i < 10; i++) {
        result.push(element[i])
        
    }
    return result
}
      

console.log(propertyOrder(beers, "name", true))


const container = document.getElementById("container")

function printBeer(array, id) {

    let fragment = document.createDocumentFragment();
  
    array.forEach(beer=> {
    
    let th = document.createElement("tr")
    th.innerHTML=`
    <th class="border border-black px-2">${beer.name}</th>
    <th class="border border-black px-2">${beer.id}</th>
    <th class="border border-black px-2">${beer.tagline}</th>
    <th class="border border-black px-2">${beer.first_brewed}</th>
    <th class="border border-black px-2">${beer.description}</th>
    <th class="border border-black px-2">${beer.image_url}</th>
    <th class="border border-black px-2">${beer.abv}</th>
    <th class="border border-black px-2">${beer.ibu}</th>
    <th class="border border-black px-2">${beer.target_fg}</th>
    <th class="border border-black px-2">${beer.target_og}</th>
    <th class="border border-black px-2">${beer.ebc}</th>
    <th class="border border-black px-2">${beer.srm}</th>
    <th class="border border-black px-2">${beer.contributed_by}</th>
`
    fragment.append(th)
  })
  id.append(fragment)
  
}


printBeer(beers, container)