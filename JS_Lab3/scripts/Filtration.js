import {unionArray} from "./Union.js";

let filter ={
    country: null,
    age: null,
    gender: null,
    favorite: null
}

let filterWithoutNull = {}

setFilteringData("Germany", null, "female")
printFilteredObjsArray()

function setFilteringData (country = null, age = null, gender = null, favorite= null) {
    if(country != null)
        filter.country = country
    if(age != null)
        filter.age = age
    if(gender != null)
        filter.gender = gender
    if(favorite != null)
        filter.favorite = favorite

    selectNotNullValue()
}

function selectNotNullValue(){
    for(let prop in filter){
        if(filter[prop] !== null){
            filterWithoutNull[prop] = filter[prop]
        }
    }
}

function printFilteredObjsArray() {
    let unionArrayCopy = structuredClone(unionArray)
    let temp = Object.entries(filterWithoutNull)
    if(temp.length !== 0){
        for(let [key, value] of temp){
            unionArrayCopy = unionArrayCopy.filter(person => person[key] === value )
        }
    }
    console.log(unionArrayCopy)
}
