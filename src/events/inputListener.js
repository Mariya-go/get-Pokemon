import dom from '../dom.js';
import buttonHandler from '../handlers/buttonHandler.js';

const inputListener = () => {
    dom.input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            // Cancel the default action
            e.preventDefault();
            buttonHandler();
        }
    });
};

export default inputListener;
