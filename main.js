const myFunction = () => {
    let userInput = document.querySelector("#userInput");
    let buttonOutput = document.querySelector("#buttonOutput");
    let typewriterWords = `Did this work, ${userInput.value}?`;
    textTypeEffect(buttonOutput, typewriterWords);
}

const textTypeEffect = (element, text, i = 0) => {
    element.textContent += text[i];

    if (i === text.length-1) {
        return;
    }

    setTimeout(() => textTypeEffect(element, text, i + 1), 50);
}