// =========== card =============
let main = document.querySelector("#main")
let form  = document.querySelector("form")
let inp = document.querySelectorAll("input")

let btn = document.querySelector("form #box")
let file = document.querySelector("form #hidd")
btn.addEventListener("click",()=>{
    file.click()
})

let uploadedImageURL = ""

file.addEventListener("change", (dets) => {
  let reader = new FileReader()
  reader.readAsDataURL(dets.target.files[0])
  reader.onload = function () {
    uploadedImageURL = reader.result
    btn.textContent = dets.target.files[0].name
  }
})
 

form.addEventListener("submit",(e)=>{
    e.preventDefault()


let card = document.createElement("div")
card.classList.add("card")

let profile = document.createElement("div")
profile.classList.add("profile")

let img = document.createElement("img")
img.setAttribute("src",uploadedImageURL)
 

let h2 = document.createElement("h2")
h2.textContent = `Name : ${inp[0].value}`
let h3 = document.createElement("h3")
h3.textContent =`Occupation  : ${inp[1].value}`
let p =document.createElement("p")
p.textContent = `Your Info  :  ${inp[2].value}`


profile.appendChild(img)
card.appendChild(profile)
card.append(h2)
card.append(h3)
card.append(p)
  
main.appendChild(card)
 

inp.forEach((val)=>{
    if(val.type != "submit"){
        val.value = ""
    }
})


 
})


