function addClick(className) {
    console.log(className);
    const project = document.querySelector(`.${className}`);
    console.log(project);
    switch (className) {
        case 'num0':
            project.addEventListener('click', () => {
                window.open('https://bjfett24.github.io/weather-app/', "_blank");
            })
        case 'num1':
            project.addEventListener('click', () => {
                window.open('https://bjfett24.github.io/tic-tac-toe/', "_blank");
            })
        case 'num2':
            project.addEventListener('click', () => {
                window.open('https://bjfett24.github.io/battle-ship/', "_blank");
            })
        case 'num3':
            project.addEventListener('click', () => {
                window.open('https://bjfett24.github.io/admin-dashboard/', "_blank");
            })
        case 'num4':
            project.addEventListener('click', () => {
                window.open('https://bjfett24.github.io/todo-list/', "_blank");
            })
        case 'num5':
            project.addEventListener('click', () => {
                window.open('https://bjfett24.github.io/sign-up-sheet/', "_blank");
            })
    }

}

export { addClick };