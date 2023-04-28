import {domElements, teachers} from "./Constants.js";
import {generateCards} from "./generateCards.js";

export function generateFavoriteCards(teachers) {
    debugger
    domElements.favoriteTeachers.innerHTML = generateCards(teachers.filter(teacher => teacher.favorite)).join('')
}