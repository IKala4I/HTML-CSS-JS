import {additionalUsers, randomUserMock} from "./FE4U-Lab3-mock.js";

const courses = ['Mathematics', 'Physics', 'English', 'Computer Science', 'Dancing', 'Chess', 'Biology', 'Chemistry',
    'Law', 'Art', 'Medicine', 'Statistics']
const convertObj = (usersObj) => {
    return usersObj.map(user => {
        return {
            gender: user.gender,
            title: user.name.title,
            full_name: `${user.name.first} ${user.name.last}`,
            city: user.location.city,
            state: user.location.state,
            country: user.location.country,
            postcode: user.location.postcode,
            coordinates: user.location.coordinates,
            timezone: user.location.timezone,
            email: user.email,
            b_date: user.dob.date,
            age: user.dob.age,
            phone: user.phone,
            picture_large: user.picture.large,
            picture_thumbnail: user.picture.thumbnail,
            id: user.id.value != null ? `${user.id.name}${user.id.value}`.replace(/\s/g, '') : user.login.uuid,
            favorite: Math.random() < 0.2,
            course: courses[Math.round(Math.random()*(courses.length-1))],
            bg_color: '#' + `${Math.floor(Math.random()*16777215).toString(16)}`,
            note: "some text",
        }
    })
}

const correctObjs = convertObj(randomUserMock)

const fullNames = new Set(correctObjs.map(obj => obj.full_name));
export const unionArray = [...correctObjs, ...additionalUsers.filter(d => !fullNames.has(d.full_name))];

//console.log(unionArray)