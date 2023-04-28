import {additionalUsers, randomUserMock} from "./FE4U-Lab3-mock.js";

const courses = ['Mathematics', 'Physics', 'English', 'Computer Science', 'Dancing', 'Chess', 'Biology', 'Chemistry',
    'Law', 'Art', 'Medicine', 'Statistics']
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const convertRandomObj = (usersObj) => {
    return usersObj.map(user => {
        return {
            gender: user.gender,
            title: user.name.title,
            fullName: `${user.name.first} ${user.name.last}`,
            city: user.location.city,
            state: user.location.state,
            country: user.location.country,
            postcode: user.location.postcode,
            coordinates: user.location.coordinates,
            timezone: user.location.timezone,
            email: user.email,
            bDate: user.dob.date,
            age: user.dob.age,
            phone: user.phone,
            pictureLarge: user.picture.large,
            pictureThumbnail: user.picture.thumbnail,
            id: user.id.value != null ? `${user.id.name}${user.id.value}`.replace(/\s/g, '') : user.login.uuid,
            favorite: Math.random() < 0.2,
            course: courses[Math.round(Math.random() * (courses.length - 1))],
            bgColor: '#' + `${Math.floor(Math.random() * 16777215).toString(16)}`,
            note: generateString(7)
        }
    })
}

const correctRandomObjs = convertRandomObj(randomUserMock)

const convertAdditionalObj = (usersObj) => {
    return usersObj.map(user => {
        return {
            gender: user.gender,
            title: user.title,
            fullName: user.full_name,
            city: user.city !== undefined ? user.city : null,
            state: user.state !== undefined ? user.state : null,
            country: user.country !== undefined ? user.country : null,
            postcode: user.postcode !== undefined ? user.postcode : null,
            coordinates: user.coordinates !== undefined ? user.coordinates : null,
            timezone: user.timezone !== undefined ? user.timezone : null,
            email: user.email !== undefined ? user.email : null,
            bDate: user.day !== undefined ? user.b_day : null,
            age: user.age !== undefined ? user.age : null,
            phone: user.phone !== undefined ? user.phone : null,
            pictureLarge: user.picture_large !== undefined ? user.picture_large : null,
            pictureThumbnail: user.picture_thumbnail !== undefined ? user.picture_thumbnail : null,
            id: (user.id !== undefined && user.id !== null) ? user.id.replace(/\s/g, '') : null,
            favorite: user.favorite,
            course: user.course,
            bgColor: user.bg_color,
            note: user.note,
        }
    })
}

const correctAdditionalObjs = convertAdditionalObj(additionalUsers)

const IDs = new Set(correctRandomObjs.map(obj => obj.id));
const Emails = new Set(correctRandomObjs.map(obj => obj.email));

let teachers = [...correctRandomObjs, ...correctAdditionalObjs
    .filter(user => !IDs.has(user.id))
    .filter(user => !Emails.has(user.email))
];

teachers.forEach(person => {
    if (person.favorite === null)
        person.favorite = Math.random() < 0.2
    if(person.note === null)
        person.note = generateString(7)
})

for (let i = 0; i < teachers.length; i++){
    teachers[i].key = i
}

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for(let j = 0; j < 5; j++ ){
        for ( let i = 0; i < length; i++ )
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        if(j < 4)
            result += ' '

    }
    return result;
}

console.log(teachers)