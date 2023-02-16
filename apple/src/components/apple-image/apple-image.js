import Apple from './apple.jpg';
import './apple-image.scss';

class AppleImage {
    render() {
        const img = document.createElement('img');
        img.src = Apple;
        img.alt = 'Apple';
        img.classList.add('apple-image');

        const body = document.querySelector('body');
        body.appendChild(img);
    }
}

export default AppleImage;