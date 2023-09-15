// JavaScript para atualizar a mensagem "Hello World!"
const helloText = document.getElementById('hello-text');

setTimeout(() => {
    helloText.textContent = 'Hello World!';
}, 2000); // Altera o texto após 2 segundos
