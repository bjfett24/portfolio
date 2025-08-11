import coverImgSrc from "./img/Profile.JPG";

function pageLoad() {
  const content = document.createElement("div");
  content.classList.add("main", "content");
  document.body.appendChild(content);

  const about = document.createElement("div");
  about.classList.add("about");
  content.appendChild(about);

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
    "My name is Ben Fetterman and I am a cognitive science major at Franklin and Marshall College. I am fascinated with how the human mind fits into the quickly changing technological world. My goal is to bridge the gap between modern technology and human understanding through tech consulting. While my education at F&M has equipped me with a strong understanding of the thinking processes in the mind, I felt I was lacking some technical skills. To remedy this, I spent my summer working on The Odin Project, a self-paced course in web-development and programming. Below you will find some of my projects I completed through the course as well as some of my academic works in philosophy and psychology.";
  bioText.classList.add("text");
  bio.appendChild(bioText);

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
}

export { pageLoad };
