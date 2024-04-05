const getMeme = document.getElementById('get-meme-btn');
const url = 'https://programming-memes-images.p.rapidapi.com/v1/memes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '76080cffb1mshf78d58abbdf03a3p1ec5e0jsnb001ab790023',
		'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}