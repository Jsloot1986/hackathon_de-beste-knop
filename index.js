const btn = document.getElementById("flower-button");
const buttonSection = document.getElementById("button-section");
const bloempje = document.getElementById("Bloempje");
const bloesem = document.getElementsByClassName("Bloem");
const poem = document.getElementById("flower-gedicht");
const delay = ms => new Promise(res => setTimeout(res, ms));

const addAnimationToElements = async () => {
    poem.classList.add("show-poem");
    for (i = 0; i < bloesem.length; i++){
        bloesem[i].classList.add("grow")
        await delay(190);
    }
    console.log(bloesem)
    
}



btn.addEventListener("click", function (event) {
    event.preventDefault()
    //window.location.href = 'https://www.thisworldthesedays.com/the-best-button-tutorial.html';
  addAnimationToElements();
    buttonSection.classList.add("hide-btn");
});



for(i=0 ; i< bloempje.children.length ; i++) {
    console.log(`${bloempje.children[i].id} is ${bloempje.children[i].getTotalLength()}`);
}