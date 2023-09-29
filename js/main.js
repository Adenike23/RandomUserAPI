const Modal = document.querySelector('.modal-bg')
const modalImage = document.querySelector('.modal-body img');
const modalName = document.querySelector('.modal-name');
const modalGender = document.querySelector('.modal-gender');
const modalUsername = document.querySelector('.username');
const modalNumber = document.querySelector('.modal-number');
const modalCountry = document.querySelector('.modal-country');
const closeModal = document.querySelector('.ri-close-line')
const date = new Date().toString('').split(' ').splice(1, 3).join(' ')
document.querySelector('.today').textContent = date;

const year = new Date().getFullYear();
document.querySelector('.year').textContent = year
const main = document.querySelector('main');
document.addEventListener('DOMContentLoaded', getRandomUser())
async function getRandomUser(){
    const response = await fetch('https://randomuser.me/api/?results=52')
    let data = await response.json()
    if(response.ok){
        // stored all the variables inside an empty array 
        localStorage.setItem('allUsers', JSON.stringify(data.results))
        data.results.forEach(user => {
            let div = document.createElement('div')
            div.innerHTML+= `
            <div class="user-info" onclick = 'getUserInfo(${user})'>
            <img src="${user.picture.large}" alt="user image">
            <div>
                <p class="name">${user.name.title} ${user.name.first} ${user.name.last}</p>
                <p class="gender"> <i class="fa-solid fa-person"></i> ${user.gender}</p>
                <p class="email"><i class="fa-regular fa-envelope"></i> ${user.email}</p>
                <p class="location"> <i class="fa-sharp fa-solid fa-location-dot"></i> ${user.location.state}, ${user.location.country}</p>
                <p class="age"> <i class="fa-solid fa-calendar-days"></i> ${user.dob.age}</p>
            </div>
            `

            main.appendChild(div)

            // document.querySelector('.user-info').addEventListener('click', function(){
            //     Modal.style.display = 'flex'
            //     modalImage.src = `${user.picture.medium}`
            //     modalName.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`
            //     modalNumber.textContent = `${user.phone}`
            //     modalGender.textContent = `${user.gender}`
            //     modalUsername.textContent = `${user.login.username}`
            //     modalCountry.textContent = `${user.location.country}`
            // })
        });
    }
    closeModal.addEventListener('click', function(){
        Modal.style.display = 'none'
    })
}
let allUsersArray = JSON.parse(localStorage.getItem('allUsers'))
console.log(allUsersArray);
function getUserInfo(user){
    console.log(user);
    allUsersArray.forEach(user =>{
        console.log(user.login.uuid);
    })
    console.log(allUsersArray);
}