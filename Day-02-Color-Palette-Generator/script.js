const generateBtn = document.getElementById('btn');

const copyBtn = document.getElementById('copy-code');

const hexCode = document.getElementById('hex-code');

generateBtn.addEventListener('click', () => {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    hexCode.textContent = randomColor;
})

copyBtn.addEventListener('click', () => {
    copyBtn.textContent = '✅Copied!';
    const colorCode = hexCode.textContent;
    navigator.clipboard.writeText(colorCode);
    setTimeout(() => {
        copyBtn.textContent = 'Copy Color';
    }, 2000);
})

const getRandomColor = () => {
    const randomHex = Math.floor(Math.random() * 16777215).toString(16);
    let color = '#';
    color += randomHex;
    return color;
}



