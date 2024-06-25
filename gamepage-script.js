
//text typewriter effect function. call with the html element, text to append
const textTypeEffect = (element, text, i = 0) => {
    element.textContent += text[i];

    if (i === text.length-1) {
        return;
    }

    setTimeout(() => textTypeEffect(element, text, i + 1), 50);
}

const scenicText = document.querySelector("#scenic-text");
const gameText = document.querySelector("#game-text");

textTypeEffect(scenicText, `I see you've found your way in...`)