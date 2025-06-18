// The challenge is to double an array n and double it k times then return the length of the new array

function arrayDub(arr, n){
	this.capacity = arr.length;

	for(let i = 0; i < n; i++){
		this.capacity *= 2;
	}

	let newArr = Array(this.capacity);

	for(let i = 0; i < arr.length; i++){
		newArr[i] = arr[i];
	}

	return newArr.length;

}
