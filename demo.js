const display = document.getElementById("display")
const interaction = document.getElementById("interaction")


fetch("https://adventure-time-api.herokuapp.com/api/v1/characters")
.then(r => r.json())
.then(data => {
    console.log(data)
    renderDisplayDiv(data[0])
    data.forEach(character =>{
        renderInteractionDiv(character)
    })
})

function renderDisplayDiv(character){
    display.removeChild(display.firstChild)
    const displayDiv = document.createElement("div")
    const characterImg = document.createElement("img")
    const infoDiv = document.createElement("div")
    const name = document.createElement("h1")
    const infoList = document.createElement("ul")
    const fullName = document.createElement("li")
    const species = document.createElement("li")
    const quotes = document.createElement("ul")

    character.quotes.forEach(quote =>{
        const newQuote = document.createElement("li")
        newQuote.textContent = quote
        quotes.append(newQuote)
    })

    displayDiv.style.backgroundColor = "white";
    displayDiv.style.display = "grid";
    displayDiv.style.gridTemplateColumns = "30% 80%"

    characterImg.src = character.sprite
    characterImg.style.minHeight = "100%";
    characterImg.style.backgroundColor = "blue";
    characterImg.style.gridColumn = "1 / span 1";

    infoDiv.style.gridColum = "2 / span 1"
   
    // displayDiv.style.gridRow = "1 / span 1";
    infoDiv.append(quotes)
    displayDiv.append(characterImg)
    displayDiv.append(infoDiv)
    display.append(displayDiv)
}

function renderInteractionDiv(character){
    const characterOption = document.createElement("div")
    const thumbnail = document.createElement("img")

    thumbnail.src = character.sprite
    thumbnail.style.maxHeight = "18vh"

    characterOption.style.gridRow = "1 / span 1"

    characterOption.addEventListener("click", ()=>{
        renderDisplayDiv(character)
    })
    characterOption.append(thumbnail)
    interaction.append(characterOption)
}

