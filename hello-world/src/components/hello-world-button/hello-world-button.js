import './hello-word-button.scss';

class HelloWorldButton {
    buttonCssClass = 'hello-world-button'
    
    render() {
        const button = document.createElement('button');
        const body = document.querySelector('body');
        button.innerHTML = 'Hello World!';
        button.onclick = function() {
            const p = document.createElement('p');
            p.textContent = 'Hello World';
            p.classList.add('hello-world-text');
            body.appendChild(p);
        }
        button.classList.add(this.buttonCssClass);
        body.appendChild(button);
    }
}

export default HelloWorldButton;