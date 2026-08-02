import { apiKey } from './config.js';
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const wrapper = document.querySelector("#wrapper");

runEventListener();



function runEventListener(){
clearButton.addEventListener("click", temizle )
form.addEventListener("submit", search)

}

function search(e){
const value = input.value.trim();
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method : "GET",
        headers: {
            Authorization : `Client-ID ${apiKey}`
        }
    })
    .then((res) => res.json())
    .then((data) => 
    Array.from(data.results).forEach((image) => {
        // console.log(image.urls.small)

        addImageToUI(image.urls.small)
    }))
    .catch((err) => console.log(err))

    e.preventDefault();
    temizle();
}

function addImageToUI(url){

    const div = document.createElement("div");
    div.className = "Card";

    const img = document.createElement("img");
    img.setAttribute("src", url);
    img.height= "400";
    img.width= "400";

    div.append(img);
    wrapper.append(div);


}

function temizle(){
    input.value="";

    wrapper.innerHTML="";
}