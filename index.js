function breakOut(array, changeValue, stopValue){
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] !== stopValue) {
      array[i] = changeValue
    } else if (array[i] === stopValue) {
      break
    }
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] === skipValue) {
      continue
    } else {
      array[i] = changeValue
    }
  }
  return array
}

function findBy(array, findFn) {
  for (let i = 0, l = array.length; i < l; i++){
    if (findFn(array[i]) === true) {
      return array[i]
    }
  }
  return null
}
