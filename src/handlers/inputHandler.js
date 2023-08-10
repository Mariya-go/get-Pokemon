import buttonHandler from './buttonHandler.js';

const inputHandler = (e) => {
    if (e.key === 'Enter') {
        // Cancel the default action
        e.preventDefault();
        buttonHandler();
    }
};

export default inputHandler;
