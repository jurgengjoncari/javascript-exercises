const removeFromArray = function(list, ...itemsToRemove) {
    listOfItemsToRemove = Array.from(itemsToRemove);
    nrOfItemsToRemove = listOfItemsToRemove.length;    
    for (i = 0; i < nrOfItemsToRemove; i++) {
        itemToRemove = listOfItemsToRemove[i];
        indexOfItem = list.indexOf(itemToRemove);
        if (indexOfItem == -1) continue;
        list.splice(indexOfItem, 1);
    }
    return list;
}

module.exports = removeFromArray
