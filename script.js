let insertDokko = document.querySelectorAll(".nav-item")[0]
let renderButton = dark => {
  if(dark){
    return `
      <button class="mode ligth" id="change">🌞 Ligth Mode</button>
    `
  }else{
    return `<button class="mode" id="change">🌙 Dark Mode</button>`
  }
}



let getState = () => localStorage.getItem("dark") === "dark" ? true : false

let loadState = (mode) => {
  console.log(`Dark Mode enabler by kokoniwasugoi nin des「ここには凄い人です」#9519
  Enjoy it!
  
  State: ${getState()}`)
  if(mode) {
    document.body.classList.toggle("dark")
    insertDokko.innerHTML += renderButton(mode);
  }else{
    insertDokko.innerHTML += renderButton(mode);
  }
}
let changeState = () => {
  let inserto = document.getElementById("change")
  let current = getState();
  console.log(`
    Dark Mode [Registry] - New state (${current}) - Changed to (${!current})
  `)
  document.body.classList.toggle("dark")
  if(current){
    localStorage.setItem("dark", "light")
    inserto.classList.toggle("ligth")
    inserto.innerHTML = renderButton(false);
  }else{
    localStorage.setItem("dark", "dark")
    inserto.classList.toggle("ligth")
    inserto.innerHTML = renderButton(true);
  }
  
  console.log(getState())
}

document.querySelectorAll("table").forEach(table => {
  table.removeAttribute("border")
})

loadState(getState())
document.getElementById("change").addEventListener("click", event => {
    changeState()
})
console.log(renderButton(false))

// Copy Menu

const say = "Hecho con amor ❤ por Carlos Eduardo";
const Menu = document.getElementById("action-menu-1-menu")
Menu.innerHTML = Menu.innerHTML + `<div class="dropdown-divider" role="presentation">
  <span class="filler">&nbsp;</span>
</div>
<a class="dropdown-item menu-action" role="menuitem">
  <span class="menu-action-text">
    ${say}
  </span>
</a>
`

const viewUpdates = async manifestURL => {
  console.log(`Update Provider: ${manifestURL.split("https://")[1].split("/")[0]}`);
  let res = await fetch(manifestURL);
  res = await res.json();
  if(Number(chrome.runtime.getManifest().version) != Number(res.version)){
    alert("Nueva actualizacion disponible. Abriendo GitHub para que proceda con la descarga")
    window.open("https://github.com/CarlosNunezMX/MoodleSiiauReStyle")
  }
}

viewUpdates("https://raw.githubusercontent.com/CarlosNunezMX/MoodleSiiauReStyle/main/manifest.json")