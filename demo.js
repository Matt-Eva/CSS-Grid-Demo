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
    const displayDiv = document.createElement("div")
    const characterImg = document.createElement("img")
    characterImg.src = character.sprite
    characterImg.style.minHeight = "50vh";
    characterImg.style.backgroundColor = "blue";
    displayDiv.style.backgroundColor = "white";
    // displayDiv.style.gridRow = "1 / span 1";
    displayDiv.append(characterImg)
    display.append(displayDiv)
}

function renderInteractionDiv(character){
    const characterOption = document.createElement("div")
    const thumbnail = document.createElement("img")

    thumbnail.src = character.sprite

    characterOption.style.gridRow = "1 / span 1"
    characterOption.append(thumbnail)
    interaction.append(characterOption)
}

