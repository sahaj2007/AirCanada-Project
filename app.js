/*----------------Navbar Js--------------------*/

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function(){
  links.classList.toggle("show-links");
});

/*-----------------Questions Js (Special Button)-------------------*/

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

/*------------------Reviews Js (2 buttons)------------------*/

const reviews = [
  {
    id: 1,
    name: 'Amy Johnson',
    job: 'pilot',
    img: 'https://i.pinimg.com/originals/4c/08/79/4c0879539d457558758f0b12850d2bbc.jpg',
    text: "As a female pilot with Air Canada, I can tell you that working for the airline is absolutely amazing. Air Canada values diversity and provides a supportive and empowering environment for all its employees. The company encourages and celebrates the contributions of female pilots, creating equal opportunities for career growth. The camaraderie among the crew members is fantastic, and I feel proud to be part of such a dynamic team. Air Canada truly recognizes and appreciates the skills and expertise of its female pilots.",
  },
  {
    id: 2,
    name: 'Payal Taneja',
    job: 'air hostess',
    img: 'https://i.pinimg.com/564x/eb/66/8d/eb668d4fa2ee0a75b217d4699a5a97a1.jpg',
    text: "As an immigrant air hostess from India working at Air Canada, I can tell you that it's been an incredible journey. Air Canada embraces diversity and provides a welcoming environment for employees from all backgrounds. I feel proud to represent my culture and bring a unique perspective to my role. The opportunity to connect with passengers from different parts of the world and share my love for India is truly special. Air Canada has been supportive and has helped me settle into my new home.",
  },
  {
    id: 3,
    name: 'Scott Crossfield',
    job: 'pilot',
    img: 'https://i.pinimg.com/564x/1c/f4/03/1cf403de189ea617c8e8fae18f51f93e.jpg',
    text: "As an experienced pilot with Air Canada, I can tell you that working for the airline is truly remarkable. With years of flying under my belt, I can confidently say that Air Canada provides a professional and rewarding environment for pilots. The company's commitment to safety, training, and excellence is unparalleled. The camaraderie among the crew members and the opportunity to fly to different destinations make every flight a memorable journey. It's a privilege to be part of such a reputable airline.",
  },
  {
    id: 4,
    name: 'James Doolittle',
    job: 'aircraft maintenance engineer',
    img: 'https://i.pinimg.com/564x/23/26/85/2326852c20176ca6d6219adb1cabe7f6.jpg',
    text: "As an aircraft maintenance engineer at Air Canada, I've got to say that working here is absolutely amazing! Being responsible for keeping the planes in top-notch condition is both challenging and rewarding. Air Canada provides excellent training and resources to ensure that we maintain the highest standards of safety and efficiency. The team I work with is incredibly skilled and dedicated, and we take great pride in our work. It's a privilege to be part of an airline that puts safety and reliability at the forefront.",
  },
  {
    id: 5,
    name: 'Kristin Bass',
    job: 'pilot',
    img: 'https://i.pinimg.com/564x/1f/14/a3/1f14a388fa63571bcd1413c8097ebe53.jpg',
    text: "As a male pilot with Air Canada, let me tell you that working for the airline is an incredible experience. Air Canada values its employees and provides a supportive and inclusive work environment for everyone. The training and resources available to pilots are top-notch, ensuring that we are well-prepared for every flight. The teamwork and camaraderie among the crew members are outstanding, creating a positive and enjoyable atmosphere. Air Canada also offers great opportunities for career growth and advancement.",
  },
  {
    id: 6,
    name: 'Amelia Rose',
    job: 'pilot',
    img: 'https://i.pinimg.com/564x/90/e9/45/90e945dfdbf44cc19fbb32d1767aad33.jpg',
    text: "As an Air Canada pilot, I can tell you that working for the airline is an incredible experience. The company values its employees and provides a supportive and inclusive work environment. The training and resources available to pilots are top-notch, ensuring that we are well-prepared for every flight. The teamwork and camaraderie among the crew members are outstanding, creating a positive and enjoyable atmosphere. I feel proud and privileged to be a part of the Air Canada family.",
  },
  {
    id: 7,
    name: 'Eileen Magill',
    job: 'air hostess',
    img: 'https://i.pinimg.com/564x/0f/88/43/0f88435bf6d0d37059af6f529235cc31.jpg',
    text: "As a new air hostess with Air Canada, I'm absolutely thrilled to be starting this exciting journey. I can't wait to meet passengers from all over the world and provide them with a wonderful flying experience. The training and support from Air Canada have been fantastic, and I feel confident in my ability to deliver exceptional service. It's such an exciting and fulfilling journey to be part of the Air Canada team. It's a dream come true to be part of such a reputable airline, and I'm looking forward to all the adventures ahead.",
  },
  {
    id: 8,
    name: 'Maria Pettersson',
    job: 'air hostess',
    img: 'https://i.pinimg.com/236x/0b/81/f7/0b81f756d5cc9b022980905e84e1652b.jpg',
    text: "As an Air Canada flight attendant, I absolutely love working for the airline. It's such an incredible experience to be part of a team that ensures the comfort and safety of our passengers. Air Canada values its employees and provides excellent training. The opportunity to travel to different destinations and meet people from all walks of life is truly enriching. The camaraderie among the crew members is amazing, and we work together like a big family. It's a rewarding and fulfilling career, and I feel lucky to be a part of Air Canada.",
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  showPerson(); 
});

// show person based on item
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});


/*--------------Rating Js (3 buttons)----------------------*/

let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn-rating");


btns.forEach(function (btn) {
  btn.addEventListener("click", function(e){
     const styles = e.currentTarget.classList;
     if (styles.contains("decrease")) {                      
        count--;
     }
     else if(styles.contains("increase")) {         
       count+=2;
     }
     else{
      count = 0;
     }  
   
     if(count > 0){
      value.style.color = "white";
     }
     if(count < 0) {
      value.style.color = "#e60000";
     }
     if(count === 0) {
      value.style.color = "black";
     }
    
     value.textContent = count;
  });
});

/*-----------------Background-Color Changing Js (1 button)-------------------*/

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
let hexColor = '#';
for(let i = 0; i<6; i++){
    hexColor += hex[getRandomNumber()]
}
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length) 
}