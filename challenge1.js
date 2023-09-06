const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

//console.log(data.lists[1][1][3]);

// Only edit below

const { lists: dataLists } = data;
const [firstArray, secondArray, thirdArray] = dataLists;

const [, lastValueOfFirst] = firstArray.slice(-1);
const [, lastValueOfSecond] = secondArray.slice(-1);
const [, lastValueOfThird] = thirdArray.slice(-1);

// const ()

// const { first = 1 } = data.lists.first //|| {}
// const { second = 1 } = data.second ////|| {}
// const { third = 1 } = data.third || {}

 

const extractBiggest = () => {
    if (lastValueOfFirst > lastValueOfSecond && lastValueOfFirst > lastValueOfThird) {
      lastValueOfFirst = firstArray.pop(); 
      return lastValueOfFirst;
    }
  
    if (lastValueOfSecond > lastValueOfThird) {
      lastValueOfSecond = secondArray.pop(); 
      return lastValueOfSecond;
    }
  
    lastValueOfThird = thirdArray.pop(); 
    return lastValueOfThird;
  };

const result = []

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result);


// logic is:
// 1. access the nested arrays values
// 2. map and assign each number list to a variable 
// 3. extract last digit until list is empty 
// 4. feed each final digit into conditionals 