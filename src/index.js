const messages = [
    'Benji',
    'Mario',
    'Juan',
    'Yatziri',
    'Tijuana'
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = {randomMsg};