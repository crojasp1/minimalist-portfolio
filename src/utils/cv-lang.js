export default async function (lang = 'en') {
	let cv = {};
	try {
		cv = await import(`../../json/cv-${lang}.json`);
	} catch (error) {
		console.error(error);
	}

	return cv;
}
