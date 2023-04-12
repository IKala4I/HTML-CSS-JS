import {unionArray} from "./Union.js";

let filter = {
    country: null,
    age: null,
    gender: null,
    favorite: null
}

let filterWithoutNull = {}

setFilteringData("Germany", null, "female")
printFilteredObjsArray()

function setFilteringData(country = null, age = null, gender = null, favorite = null) {
    if (country)
        filter.country = country
    if (age)
        filter.age = age
    if (gender)
        filter.gender = gender
    if (favorite)
        filter.favorite = favorite

    selectNotNullValue()
}

function selectNotNullValue() {
    for (let prop in filter) {
        if (filter[prop]) {
            filterWithoutNull[prop] = filter[prop]
        }
    }
}

function printFilteredObjsArray() {
    let unionArrayCopy = structuredClone(unionArray)
    let temp = Object.entries(filterWithoutNull)
    if (temp.length) {
        for (let [key, value] of temp) {
            unionArrayCopy = unionArrayCopy.filter(person => person[key] === value)
        }
    }
    //console.log(unionArrayCopy)
}
