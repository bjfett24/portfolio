import coverImgSrc from "./img/Profile.JPG";
import footImgSrc from "./img/ben-guitar.jpg";
import { SVG } from "./create-svg.js";
import { addClick } from "./add-click.js";

function pageLoad() {
  const content = document.createElement("div");
  content.classList.add("main", "content");
  document.body.appendChild(content);

  const about = document.createElement("div");
  about.classList.add("about");
  content.appendChild(about);

  const background = document.createElement("div");
  background.classList.add("background");
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
  bioText.textContent =
    "My name is Ben Fetterman and I am a cognitive science major at Franklin and Marshall College. I am fascinated with how the human mind fits into the quickly changing technological world. My goal is to bridge the gap between modern technology and human understanding through tech consulting, UX research, or AI research. While my education at F&M has equipped me with a strong understanding of the cognitive processes in the mind, I felt I was lacking some technical skills. To remedy this, I spent my summer working on The Odin Project, a self-paced course in web-development and programming. Below you will find some of my projects I completed through the course.";
  bioText.classList.add("text");
  bio.appendChild(bioText);

  const bioIcons = document.createElement("div");
  bioIcons.classList.add("icons");
  bio.appendChild(bioIcons);

  const git = new SVG(
    "git-icon",
    "0 0 24 24",
    "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z",
  );
  const gitIcon = git.createSVG();
  gitIcon.role = "button";
  bioIcons.appendChild(gitIcon);

  const linkedIn = new SVG(
    "linked-in-icon",
    "0 0 24 24",
    "M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z",
  );
  const linkedInIcon = linkedIn.createSVG();
  linkedInIcon.role = "button";
  bioIcons.appendChild(linkedInIcon);

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
    project.role = "button";
    myWork.appendChild(project);
    addClick(`num${i}`);

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

  const weatherTitle = document.querySelector(".num0 .title");
  weatherTitle.textContent = "Weather App";

  const weatherDesc = document.querySelector(".num0 .description");
  weatherDesc.textContent =
    "Fully functional weather app. Search any town or city and this app will return the current, daily, and weekly forecast.";

  const tttTitle = document.querySelector(".num1 .title");
  tttTitle.textContent = "Tic Tac Toe";

  const tttDesc = document.querySelector(".num1 .description");
  tttDesc.textContent =
    "A simple, yet sharp version of the classic game. Play against a friend and this program will keep track of whose turn it is and declare the winner of the game!";

  const battleShipsTitle = document.querySelector(".num2 .title");
  battleShipsTitle.textContent = "Battle Ship";

  const battleShipsDesc = document.querySelector(".num2 .description");
  battleShipsDesc.textContent =
    "Another classic game, Battle Ship. Place your ships on the board and then challenge yourself against the computer. Whoever sinks all of the opponents ships first wins!";

  const adminTitle = document.querySelector(".num3 .title");
  adminTitle.textContent = "Admin Dashboard";

  const adminDesc = document.querySelector(".num3 .description");
  adminDesc.textContent =
    "While not interactive, this is an example of popular web page used for administrators. The admin dashboard is fully responsive and demonstrates a crisp style.";

  const todoTitle = document.querySelector(".num4 .title");
  todoTitle.textContent = "To-Do List App";

  const todoDesc = document.querySelector(".num4 .description");
  todoDesc.textContent =
    "This site is great for keeping track of tasks that need to get done. Use this app to easily edit the dates, description, and status of each task.";

  const signUpTitle = document.querySelector(".num5 .title");
  signUpTitle.textContent = "Sign-Up Sheet";

  const signUpDesc = document.querySelector(".num5 .description");
  signUpDesc.textContent =
    "A stylish demonstration of using a form and input validation to simulate a sign-up sheet for a social club.";

  const section3 = document.createElement("div");
  section3.classList.add("contact", "container");
  content.appendChild(section3);

  const contactWords = document.createElement("div");
  contactWords.classList.add("words");
  section3.appendChild(contactWords);

  const contactTitle = document.createElement("h1");
  contactTitle.classList.add("title");
  contactTitle.textContent = "Contact me";
  contactWords.appendChild(contactTitle);

  const note = document.createElement("p");
  note.classList.add("note");
  note.textContent =
    "Please get in touch if you think our work could be mutually beneficial!";
  contactWords.appendChild(note);

  const address = document.createElement("div");
  address.classList.add("address");
  contactWords.appendChild(address);

  const line1 = document.createElement("p");
  line1.classList.add("line", "num1");
  line1.textContent = "94 S Grims Mill Rd.";
  address.appendChild(line1);

  const line2 = document.createElement("p");
  line2.classList.add("line", "num2");
  line2.textContent = "Boyertown, PA 19512";
  address.appendChild(line2);

  const phoneCont = document.createElement("div");
  phoneCont.classList.add("phone-container");
  contactWords.appendChild(phoneCont);

  const phone = new SVG(
    "phone-icon",
    "0 0 24 24",
    "M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z",
  );
  const phoneIcon = phone.createSVG();
  phoneCont.appendChild(phoneIcon);

  const phoneNum = document.createElement("p");
  phoneNum.classList.add("phone-number");
  phoneNum.textContent = "(610)-301-8193";
  phoneCont.appendChild(phoneNum);

  const emailCont = document.createElement("div");
  emailCont.classList.add("email-container");
  contactWords.appendChild(emailCont);

  const email = new SVG(
    "email-icon",
    "0 0 24 24",
    "M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z",
  );
  const emailIcon = email.createSVG();
  emailCont.appendChild(emailIcon);

  const emailAdd = document.createElement("p");
  emailAdd.classList.add("email-address");
  emailAdd.textContent = "bjfett24@gmail.com";
  emailCont.appendChild(emailAdd);

  const icons = document.createElement("div");
  icons.classList.add("icons");
  contactWords.appendChild(icons);

  const gitIcon2 = git.createSVG();
  gitIcon2.role = "button";
  icons.appendChild(gitIcon2);

  const linkedInIcon2 = linkedIn.createSVG();
  linkedInIcon2.role = "button";
  icons.appendChild(linkedInIcon2);

  const gitIcons = document.querySelectorAll(".git-icon");
  for (let g of gitIcons) {
    g.addEventListener("click", () => {
      window.open("https://github.com/bjfett24", "_blank");
    });
  }

  const linkedInIcons = document.querySelectorAll(".linked-in-icon");
  for (let l of linkedInIcons) {
    l.addEventListener("click", () => {
      window.open(
        "https://www.linkedin.com/in/ben-fetterman-2a559b294/",
        "_blank",
      );
    });
  }

  const picture = document.createElement("img");
  picture.src = footImgSrc;
  picture.alt = "Ben standing with view of ocean in the background";
  picture.classList.add("picture");
  section3.appendChild(picture);
}

export { pageLoad };
