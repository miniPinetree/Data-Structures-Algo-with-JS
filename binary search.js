const findSameNumber = (array, index) => {
  if (array[index] === array[index - 1]) {
    return findSameNumber(array, index - 1)
  } else {
    return index
  }
}

const findIndex = (array, targetNumber) => {
   let [low, high] = [0, array.length]

   while (low <= high) {
    const index = Math.floor((low + high) / 2)
    const currentNumber = array[index]
    
    if (currentNumber === targetNumber) {
      return findSameNumber(array, index)
    }
    else if (currentNumber > targetNumber) {
      high = index - 1
    } else {
      low = index + 1
    }
  }
  
  return -1
}

const array = [1, 3, 9, 12, 15]
const array2 = [1, 3, 3, 3, 3, 3, 9]

function expect (result) {
  return {
    toBe: function(expected) {
      if (result !== expected) {
        throw new Error(result + ' is not equal to ' + expected);
      }
    }
  }
}

expect(findIndex(array, 1)).toBe(0)
expect(findIndex(array, 14)).toBe(-1)
expect(findIndex([2], 2)).toBe(0)
