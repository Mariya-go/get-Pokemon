const createErrorMessage = () => {
    const container = document.createElement('div');
    container.className = 'error';
    container.id = 'error';

    const message = document.createElement('h2');
    message.innerText =
        'The number is incorrect. Please enter number from 1 to 1010';

    container.append(message);
    return container;
};

export default createErrorMessage;
