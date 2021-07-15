const btnTranslate = document.getElementById("btn-translate");
const txtInput = document.getElementById("txt-input");
const outputDiv = document.getElementById("output");

// const serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

const serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something went wrong, try again after sometime")
}


function clickHandler() {
    const inputText = txtInput.value;

     
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            const translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
           })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)
