const createAbilities = (arrAbil) => {
    const list = document.createElement('ul');
    list.id = 'list';
    arrAbil.forEach((element) => {
        const liEl = document.createElement('li');
        liEl.innerHTML = element.ability.name;

        list.append(liEl);
    });
    return list;
};

export default createAbilities;
