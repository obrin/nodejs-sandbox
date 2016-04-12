
function api() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('oyoyoy ma');
		}, 100)
	})
}

async function appi(arr) {
	return await arr.map(async ar => {
		return await api();
	})
}



async function _slicePanelShows(featuredShows) {
	let array = [];

	for(let a of featuredShows) {
		const obj = {
			abc: await api()
		};
		array.push(obj);
	}
	return array;
}


async function pass(arr) {

	let array = [];

	//return arr.map(ar => api());

	for(let a of arr) {
		console.log(a); // TODO: REMOVE CONSOLE LOG
		const ap = await _slicePanelShows(arr);
		array.push(ap);
	}
	console.log('--------------'); // TODO: REMOVE CONSOLE LOG

	return array;

	//return await Promise.all([...array])
}

async function get(arr) {
	const a = await pass(arr);

	console.log(a); // TODO: REMOVE CONSOLE LOG
}


let arr = [1,2,3,4,5,6];

get(arr);
