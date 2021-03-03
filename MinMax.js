let arr = [5, 2, 7, 9, 13, 3, 8,10,20];

function MinMaxNumber(arr) {
	// initialize values
	let min = arr[0],
		max = arr[0];
	let minIndex = 0,
		maxIndex = 0;

	for (let i = 0; i < arr.length; i++) {
		// take min , max initiaal values before change
		let v = arr[i],
			minValue = min,
			maxValue = max;

		min = v < min ? v : min;
		max = v > max ? v : max;

		// after change min , max values so we will get index and we can update
		if (minValue !== min) minIndex = i;
		if (maxValue !== max) maxIndex = i;
	}

	return maxIndex - minIndex;
}

console.log(MinMaxNumber(arr));
