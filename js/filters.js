import { products } from "./products.js"

const consolas = document.getElementById("consolas")
const arrConsolas = products.filter((item) => item.category === "consolas")
consolas.innerText = arrConsolas.length

const juegosPs = document.getElementById("juegos-ps")
const arrJuegosPs = products.filter((item) => item.category === "juegos playstation")
juegosPs.innerText = arrJuegosPs.length

const joysticks = document.getElementById("joysticks")
const arrJoysticks = products.filter((item) => item.category === "joysticks")
joysticks.innerText = arrJoysticks.length

const consolasRetro = document.getElementById("consolas-retro")
const arrConsolasRetro = products.filter((item) => item.category === "consolas retro")
consolasRetro.innerText = arrConsolasRetro.length

const cascosRV = document.getElementById("cascos-rv")
const arrCascosRV = products.filter((item) => item.category === "cascos rv")
cascosRV.innerText = arrCascosRV.length

const preventas = document.getElementById("preventas")
const arrPreventas = products.filter((item) => item.category === "preventas")
preventas.innerText = arrPreventas.length

const juegosSwitch = document.getElementById("juegos-switch")
const arrJuegosSwitch = products.filter((item) => item.category === "juegos switch")
juegosSwitch.innerText = arrJuegosSwitch.length

const novedades = document.getElementById("novedades")
const arrNovedades = products.filter((item) => item.category === "novedades")
novedades.innerText = arrNovedades.length

const juegosChicos = document.getElementById("videojuegos-chicos")
const arrChicos = products.filter((item) => item.category === "videojuegos para chicos")
juegosChicos.innerText = arrChicos.length