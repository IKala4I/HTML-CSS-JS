import {generateCards} from './generateCards.js'
import {turnOnSearching} from './Searching.js'
import {teachers,domElements} from "./Constants.js";
import {createPopup} from "./createFullCardInfo.js";
import {uploadDataToStatisticTable} from "./fillTable.js";
import {setSortTable} from "./Sorting.js";
import {setHandleOnFilters, getCountries} from "./Filtration.js";
import {generateFavoriteCards} from "./generateCardsFavoriteTeachers.js";

getCountries()
const topTeacherCards = generateCards(teachers)
domElements.topCards.innerHTML = topTeacherCards.join('')

turnOnSearching()
createPopup()
uploadDataToStatisticTable(teachers)
setSortTable()
setHandleOnFilters()
generateFavoriteCards(teachers)