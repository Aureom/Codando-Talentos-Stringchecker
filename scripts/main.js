const initial2way = document.getElementById("initial2way");
const compare = document.getElementById("compare");
const lengthCheck = document.getElementById("length-check");

const compareButton = document.getElementById("compare-button");
compareButton.addEventListener('click', () => {
    if(initial2way.style.display !== "none"){
        initial2way.style.display = "none";
        compare.style.display = "flex";
    }
});

const sizeButton = document.getElementById("size-button");
sizeButton.addEventListener('click', () => {
    if(initial2way.style.display !== "none"){
        initial2way.style.display = "none";
        lengthCheck.style.display = "flex";
    }
});

const closeButton = document.getElementsByClassName("close");
for (const closeButtonElement of closeButton) {
    closeButtonElement.addEventListener('click', () => {
        if(initial2way.style.display === "none"){
            initial2way.style.display = "flex";
            lengthCheck.style.display = "none";
            compare.style.display = "none";
        }
    });
}

/*
    Tamanho do texto
 */

let capitalize = Boolean(false);
let uppercase = Boolean(false);
let lowercase = Boolean(false);
let maxlength;

const capitalizeElem = document.getElementById("opt-capitalize");
capitalizeElem.addEventListener('click', () => {
    capitalize = !capitalize;
    if(capitalize) capitalizeTextarea();
})

const uppercaseElem = document.getElementById("opt-uppercase");
uppercaseElem.addEventListener('click', () => {
    uppercase = !uppercase;
    if(uppercase) uppercaseTextarea();
})

const lowercaseElem = document.getElementById("opt-lowercase");
lowercaseElem.addEventListener('click', () => {
    lowercase = !lowercase;
    if(lowercase) lowercaseTextarea();
})

const maxlengthElem = document.getElementById("opt-maxlength");
maxlengthElem.addEventListener('click', () => {
    maxlength = maxlengthElem.value;
    if(maxlength !== undefined) lowercaseTextarea();
})

const lengthCheckLength = document.getElementById("length-check-length");
const textLengthInput = document.getElementById("text-length");
textLengthInput.addEventListener('input', () => {
    if(maxlength !== undefined) limitTextLength();

    lengthCheckLength.innerHTML = textLengthInput.value.length;

    if(textLengthInput.value[textLengthInput.value.length - 1] === ' ') return;
    if(capitalize) capitalizeTextarea();
    if(lowercase) lowercaseTextarea();
    if(uppercase) uppercaseTextarea();
});

function capitalizeTextarea() {
    let textReplace = '';
    console.log(textLengthInput.value.split(' '))
    textLengthInput.value.split(' ').forEach(word => {
        if(word.length === 0) return;
        textReplace += word[0].toUpperCase() + word.substring(1, word.length).toLowerCase() + ' ';
        console.log(textReplace);
    });
    textReplace = textReplace.substring(0, textReplace.length-1);
    textLengthInput.value = textReplace;
}

function uppercaseTextarea() {
    textLengthInput.value = textLengthInput.value.toUpperCase();
}

function lowercaseTextarea() {
    textLengthInput.value = textLengthInput.value.toLowerCase();
}

function limitTextLength() {
    textLengthInput.value = textLengthInput.value.substring(0, maxlength);
}

/*
    Comparar entre 2 textos
 */
const compareResult = document.getElementById("compare-result");

const textCompare1 = document.getElementById("text-comp-1");
const textCompare2 = document.getElementById("text-comp-2");
textCompare1.addEventListener('input', compareChecker);
textCompare2.addEventListener('input', compareChecker);

function compareChecker() {
    if(caseSensitive){
        if(textCompare1.value === textCompare2.value){
            compareResult.innerHTML = "Textos iguais";
        }else{
            compareResult.innerHTML = "Textos diferentes";
        }
    }else{
        if(textCompare1.value.toLowerCase() === textCompare2.value.toLowerCase()){
            compareResult.innerHTML = "Textos iguais";
        }else{
            compareResult.innerHTML = "Textos diferentes";
        }
    }
}

const caseSensitiveElem = document.getElementById("case-sensitive");
let caseSensitive = Boolean(false);
caseSensitiveElem.addEventListener('click', () => {
    caseSensitive = !caseSensitive;
    compareChecker()
})
