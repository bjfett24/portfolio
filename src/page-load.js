import coverImgSrc from "./img/Profile.JPG";
import footImgSrc from "./img/ben-guitar.jpg";
import { SVG } from './create-svg.js';

function pageLoad() {
  const content = document.createElement("div");
  content.classList.add("main", "content");
  document.body.appendChild(content);

  const about = document.createElement("div");
  about.classList.add("about");
  content.appendChild(about);

  const background = document.createElement('div');
  background.classList.add('background');
  content.appendChild(background);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("image", "container");
  about.appendChild(imgContainer);

  const coverImg = document.createElement("img");
  coverImg.classList.add("profile");
  coverImg.src = coverImgSrc;
  coverImg.alt = "Ben standing in front of a tunnel.";
  imgContainer.appendChild(coverImg);

  const name = document.createElement("h2");
  name.classList.add("name");
  name.textContent = "Ben Fetterman";
  imgContainer.appendChild(name);

  const bio = document.createElement("div");
  bio.classList.add("bio");
  about.appendChild(bio);

  const bioTitle = document.createElement("h1");
  bioTitle.textContent = "About me";
  bioTitle.classList.add("title");
  bio.appendChild(bioTitle);

  const bioText = document.createElement("p");
  bioText.textContent = "My name is Ben Fetterman and I am a cognitive science major at Franklin and Marshall College. I am fascinated with how the human mind fits into the quickly changing technological world. My goal is to bridge the gap between modern technology and human understanding through tech consulting, UX research, or AI research. While my education at F&M has equipped me with a strong understanding of the cognitive processes in the mind, I felt I was lacking some technical skills. To remedy this, I spent my summer working on The Odin Project, a self-paced course in web-development and programming. Below you will find some of my projects I completed through the course.";
  bioText.classList.add("text");
  bio.appendChild(bioText);

  const bioIcons = document.createElement('div');
  bioIcons.classList.add('icons');
  bio.appendChild(bioIcons);

  const git = new SVG('git-icon', '0 0 24 24', "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z");
  const gitIcon = git.createSVG();
  gitIcon.role = 'button';
  bioIcons.appendChild(gitIcon);

  const section2 = document.createElement("div");
  section2.classList.add("section-2");
  content.appendChild(section2);

  const myWorkTitle = document.createElement("h1");
  myWorkTitle.classList.add("title");
  myWorkTitle.textContent = "My Work";
  section2.appendChild(myWorkTitle);

  const myWork = document.createElement("div");
  myWork.classList.add("my-work", "container");
  section2.appendChild(myWork);

  for (let i = 0; i < 6; i++) {
    const project = document.createElement("div");
    project.classList.add("project", `num${i}`);
    project.role = 'button';
    myWork.appendChild(project);

    const imgBox = document.createElement("div");
    imgBox.classList.add("image", "container");
    project.appendChild(imgBox);

    const wordsBox = document.createElement("div");
    wordsBox.classList.add("words", "container");
    project.appendChild(wordsBox);

    const wordsHeader = document.createElement("div");
    wordsHeader.classList.add("header");
    wordsBox.appendChild(wordsHeader);

    const projectTitle = document.createElement("h3");
    projectTitle.classList.add("title");
    projectTitle.textContent = "Project Title";
    wordsHeader.appendChild(projectTitle);

    const logoBox = document.createElement("div");
    logoBox.classList.add("logo-box");
    wordsHeader.appendChild(logoBox);

    const projDesc = document.createElement("p");
    projDesc.classList.add("description");
    projDesc.textContent =
      "This is a short description of the project that I made. I did this with JavaScript";
    wordsBox.appendChild(projDesc);
  }

    const weatherTitle = document.querySelector('.num0 .title');
    weatherTitle.textContent = 'Weather App';

    const weatherDesc = document.querySelector('.num0 .description');
    weatherDesc.textContent = 'Fully functional weather app. Search any town or city and this app will return the current, daily, and weekly forecast.';

    const tttTitle = document.querySelector('.num1 .title');
    tttTitle.textContent = 'Tic Tac Toe';

    const tttDesc = document.querySelector('.num1 .description');
    tttDesc.textContent = 'A simple, yet sharp version of the classic game, Tic Tac Toe. Play against a friend and this program will keep track of whose turn it is and declare the winner of the game!';

    const battleShipsTitle = document.querySelector('.num2 .title');
    battleShipsTitle.textContent = 'Battle Ship';

    const battleShipsDesc = document.querySelector('.num2 .description');
    battleShipsDesc.textContent = 'Another classic game, Battle Ship. Place your ships on the board and then challenge yourself against the computer. Whoever sinks all of the opponents ships first wins!';

    const adminTitle = document.querySelector('.num3 .title');
    adminTitle.textContent = 'Admin Dashboard';

    const adminDesc = document.querySelector('.num3 .description');
    adminDesc.textContent = "While not functional, this is an example of popular web page used for administrators. The admin dashboard is fully responsive and demonstrates a crisp style.";

    const todoTitle = document.querySelector('.num4 .title');
    todoTitle.textContent = 'To-Do List App';

    const todoDesc = document.querySelector('.num4 .description');
    todoDesc.textContent = 'This site is great for keeping track of tasks that need to get done. Use this app to easily edit the dates, description, and status of each task.';

    const signUpTitle = document.querySelector('.num5 .title');
    signUpTitle.textContent = 'Sign-Up Sheet';

    const signUpDesc = document.querySelector('.num5 .description');
    signUpDesc.textContent = 'A stylish demonstration of using a form and input validation to simulate a sign-up sheet for a club.';

    const section3 = document.createElement('div');
    section3.classList.add('contact', 'container');
    content.appendChild(section3);

    const contactWords = document.createElement('div');
    contactWords.classList.add('words');
    section3.appendChild(contactWords);

    const contactTitle = document.createElement('h1');
    contactTitle.classList.add('title');
    contactTitle.textContent = 'Contact me';
    contactWords.appendChild(contactTitle);

    const note = document.createElement('p');
    note.classList.add('note');
    note.textContent = 'Please get in touch if you think our work could be mutually beneficial!';
    contactWords.appendChild(note);

    const address = document.createElement('div');
    address.classList.add('address');
    contactWords.appendChild(address);

    const line1 = document.createElement('p');
    line1.classList.add('line', 'num1');
    line1.textContent = '94 S Grims Mill Rd.';
    address.appendChild(line1);

    const line2 = document.createElement('p');
    line2.classList.add('line', 'num2');
    line2.textContent = 'Boyertown, PA 19512';
    address.appendChild(line2);

    const phone = document.createElement('p');
    phone.classList.add('phone-number');
    phone.textContent = '(610)-301-8193';
    contactWords.appendChild(phone);

    const email = document.createElement('p');
    email.classList.add('email');
    email.textContent = 'bjfett24@gmail.com';
    contactWords.appendChild(email);

    const icons = document.createElement('div');
    icons.classList.add('icons');
    contactWords.appendChild(icons);

    const picture = document.createElement('img');
    picture.src = footImgSrc;
    picture.alt = 'Ben standing with view of ocean in the background';
    picture.classList.add('picture');
    section3.appendChild(picture);
}

export { pageLoad };


