const batteryBatches = [4, 5, 3, 4, 4, 6, 5]

const totalBatteries = batteryBatches.reduce(function(accumulator, element) {
    return element += accumulator
})
// [array].reduce(newFunction(accumulator, element){return element + accumulator}, 0)

// array selection, reduce action, newFunction creation, (accumulator/element parameters), {return computation each iteration}, beginning at index val)