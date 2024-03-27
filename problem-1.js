const inputArr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
function findSumGreedyApproach() {
	for (let i = 0; i < inputArr.length; i++) {
		for (let j = i + 1; j < inputArr.length; j++) {
			if (inputArr[i] + inputArr[j] === 0) {
				return [inputArr[i], inputArr[j]]
			}
		}
	}
}
// o(n^2) Quadatic time complpexity
console.log(findSumGreedyApproach());


function findSumLinearApproach() {
	let left = 0,
		right = inputArr.length - 1;
	while (left < right) {
		if (inputArr[left] + inputArr[right] === 0) {
			return [inputArr[left], inputArr[right]];
		} else if (inputArr[left] + inputArr[right] > 0) {
			--right;
		} else if (inputArr[left] + inputArr[right] < 0) {
			++left;
		}
	}
}

// o(n) linear time complpexity
console.log(findSumLinearApproach());