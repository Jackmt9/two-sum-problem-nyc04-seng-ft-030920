function bruteForceTwoSum(array, sum){
    let answers = []
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if (array[i] + array[j] == sum){
                answers.push([array[i], array[j]])
            }
        }
    }
    return answers
}

function binarySearchTwoSum(array, sum){
    array.sort()

    let answers = []
    for(let i = 0; i < array.length; i++){
        let target = Math.abs(array[i] - sum)
        if(binaryMatch(array, target) && array.indexOf(target) >= i ){
            // shouldn't be >=
            answers.push([array[i], target])
        }
    }
    return answers
}

function binaryMatch(array, target){

    let startIndex = 0
    let endIndex = array.length - 1
    while(startIndex < endIndex){
        
        const middleIndex = Math.floor((startIndex + endIndex) / 2)

        if(array[middleIndex] === target){
            return true
        } else if(target < array[middleIndex]){
            endIndex = middleIndex
        } else if(target > array[middleIndex]){
            startIndex = middleIndex
        }
    }
    return false
}

function hashTwoSum(array, sum){
    let hash = {}
    let answers = []
    for(let i = 0; i < array.length; i++){
        let num = array[i]
        let target = sum - num
        if(hash[target]){
            answers.push([target, hash[target]])
        } else {
            hash[num] = target
        }
    }
    return answers

}