const imageSkills = ["../assets/html-5.png", "../assets/css-3.png", "../assets/js.png", "../assets/jquery.png", "../assets/react.png", "../assets/redux.png", "../assets/node.png", "../assets/express.png", "../assets/postgress.png", "../assets/sequelize.png", "../assets/git.png", "../assets/github.png", "../assets/c++.png"]
const textSkills = ["HTML5", "CSS3", "JavaScript", "jQuery", "React", "Redux", "NodeJS", "Express", "PostgreSQL", "Sequelize", "Git", "GitHub", "C++"]

const cardSkills = document.querySelector('.container-card-tecnologias-find')

imageSkills.map((img, index)=>{
    let imgCard = document.createElement('img')
    let divCard = document.createElement('div')
    let pCard = document.createElement('p')

    imgCard.setAttribute('src', img)
    imgCard.setAttribute('alt', textSkills[index])
    
    imgCard.classList.add('tecnologias-image')
    divCard.classList.add('container-card-tecnologias')
    pCard.classList.add('tecnologias-text')
    pCard.textContent = textSkills[index]
    
    divCard.appendChild(imgCard)
    divCard.appendChild(pCard)
    cardSkills.appendChild(divCard)
})