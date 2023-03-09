const listcontainer  = document.getElementById('listcontainer') as HTMLDivElement;
const addItemBtn = document.getElementById('addItemBtn') as HTMLDivElement;
const firstRemoveBtn = document.querySelector<HTMLButtonElement>('button.removeBtn');

const createItemFormInput = (): HTMLDivElement => {
    const addItemDiv = document.createElement('div') as HTMLDivElement;
    addItemDiv.classList.add('mb-3');

    const addItemDivContainer = document.createElement('div') as HTMLDivElement;
    addItemDivContainer.classList.add('container');

    const addItemDivRow = document.createElement('div') as HTMLDivElement;
    addItemDivRow.classList.add('row');

    const addItemDivCol8 = document.createElement('div') as HTMLDivElement;
    addItemDivCol8.classList.add('col-8');

    const ItemNameInput = document.createElement('input') as HTMLInputElement;
    ItemNameInput.classList.add('form-control');
    ItemNameInput.setAttribute('type', 'text');
    ItemNameInput.setAttribute('name', 'ItemName');
    ItemNameInput.setAttribute('placeholder', 'Item Name');
    ItemNameInput.setAttribute('aria-label', 'Item Name');

    const addItemDiv4 = document.createElement('div') as HTMLDivElement;
    addItemDiv4.classList.add('col-4');

    const removeItemBtn = document.createElement('button') as HTMLButtonElement;
    removeItemBtn.classList.add('btn', 'btn-danger', 'removeBtn');
    removeItemBtn.setAttribute('type', 'button');
    removeItemBtn.innerHTML = 'Remove';

    removeItemBtn.addEventListener('click', () =>{
         addItemDiv.remove();
    });

    // Appending

    addItemDiv.append(addItemDivContainer);
    addItemDivContainer.append(addItemDivRow);

    addItemDivRow.append(addItemDivCol8, addItemDiv4);

    addItemDivCol8.append(ItemNameInput);

    addItemDiv4.append(removeItemBtn);

    return addItemDiv;
}

addItemBtn.addEventListener('click', () =>{
    listcontainer.append(createItemFormInput());
});

firstRemoveBtn!.addEventListener('click', () =>{
    firstRemoveBtn?.parentElement?.parentElement?.parentElement?.remove();
});