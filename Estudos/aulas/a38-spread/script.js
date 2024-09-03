const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta']

console.log(...towns)
console.log(...towns[1])

const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log({ towns, townsCopy})

const townsClone = [...towns]

townsClone.pop()
townsClone.pop()
townsClone.push('Pallet City')

console.log(townsClone)