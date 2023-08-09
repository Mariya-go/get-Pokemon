import dom from '../dom.js';
import buttonHandler from '../handlers/buttonHandler.js';

const buttonListener = () => {
    dom.button.addEventListener('click', buttonHandler);
};

export default buttonListener;
