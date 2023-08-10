import dom from '../dom.js';
import inputHandler from '../handlers/inputHandler.js';

const inputListener = () => {
    dom.input.addEventListener('keydown', (e) => {
        inputHandler(e);
    });
};

export default inputListener;
