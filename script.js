const desplegarMenu = ()=>{
  let menu = document.querySelector(".container-section")
  menu.style.display === "flex"? menu.style.display = "none": menu.style.display = "flex"
}

const figure1 = document.querySelector("#one")
const figure2 = document.querySelector("#two")
const figure3 = document.querySelector("#three")
const figure4 = document.querySelector("#four")
const figure5 = document.querySelector("#five")

setInterval(() => {
  figure1.style.borderRadius = `${Math.random() * 100}% ${Math.random() * 100}% ${Math.random() * 100}% ${Math.random() * 100}%`
  figure1.style.width = `${Math.random()*300}px`
  figure1.style.height = `${Math.random()*300}px`
  figure1.style.top = `${Math.random()*50}%`
  figure1.style.left = `${Math.random()*50}%`

  figure2.style.borderRadius = `${Math.random() * 100}% ${Math.random() * 100}% ${Math.random() * 100}% ${Math.random() * 100}%`
  figure2.style.width = `${Math.random()*300}px`
  figure2.style.height = `${Math.random()*300}px`
  figure2.style.top = `${Math.random()*100}%`
  figure2.style.left = `${Math.random()*50}%`

  figure3.style.borderRadius = `${Math.random() * 100}% ${Math.random() * 100}% ${Math.random() * 100}% ${Math.random() * 100}%`
  figure3.style.width = `${Math.random()*300}px`
  figure3.style.height = `${Math.random()*300}px`
  figure3.style.top = `${Math.random()*100}%`
  figure3.style.left = `${Math.random()*80}%`

  figure4.style.borderRadius = `${Math.random() * 100}% ${Math.random() * 100}% ${Math.random() * 100}% ${Math.random() * 100}%`
  figure4.style.width = `${Math.random()*300}px`
  figure4.style.height = `${Math.random()*300}px`
  figure4.style.top = `${Math.random()*100}%`
  figure4.style.left = `${Math.random()*100}%`

  figure5.style.borderRadius = `${Math.random() * 100}% ${Math.random() * 100}% ${Math.random() * 100}% ${Math.random() * 100}%`
  figure5.style.width = `${Math.random()*300}px`
  figure5.style.height = `${Math.random()*300}px`
  figure5.style.top = `${Math.random()*100}%`
  figure5.style.left = `${Math.random()*50}%`
}, 1000);