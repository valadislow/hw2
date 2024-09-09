function addSupplies(totalCost, callback) {
    let paint = prompt("Enter the cost for the paint and supplies :");
    let floor = prompt("Enter the cost for the floor coverings :");
    let furniture = prompt("Enter the cost for the furniture :");

    paint = parseFloat(paint);
    if (paint > 100)
        paint *= 1.1;
    floor = parseFloat(floor);

    if (floor < 500)
    updatedFloor = floor -= floor * 1.5
    floor -= updatedFloor

    furniture = parseFloat(furniture);
    if (furniture < 500)
    updatedFurniture = furniture -= furniture * 1.5
    floor -= updatedFurniture

    const newTotalCost = totalCost + floor + paint + furniture;

    let paintArea = document.querySelector(".paint");


    paintArea.innerHTML = `Paint $ ${newTotalCost.toFixed(2)}`;

    callback(newTotalCost);
    return(newTotalCost);
}

const updateTotals = (totalCost) => {
    let totalsArea = document.querySelector(".totalCost");
    totalsArea.innerHTML = `Total $ ${paint.toFixed(2)}`;
}

let totalCost = 0;

totalCost = addSupplies(totalCost, updateTotals);
