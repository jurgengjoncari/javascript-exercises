const removeFromArray = function(list, ...itemsToRemove) {
    listOfItemsToRemove = Array.from(itemsToRemove);
    listOfItemsToRemove.forEach((item) => {
        indexOfItem = list.indexOf(item);
        if (indexOfItem == -1) return;
        list.splice(indexOfItem, 1);
    });
    return list;
}

module.exports = removeFromArray
