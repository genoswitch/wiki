const capitalizeWords = (words: string) => {
	const wordArray = words.split(" ");

	const processedArray = wordArray.map(item => {
		return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
	});

	return processedArray.join(" ");
};

export default capitalizeWords;
