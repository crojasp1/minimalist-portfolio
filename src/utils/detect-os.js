const MAC_OS = 'macOS';

export function detectOS() {
	const userAgent = navigator.userAgent;
	let operatingSystem;

	if (/Windows/.test(userAgent)) {
		operatingSystem = 'Windows';
	} else if (/Mac OS/.test(userAgent)) {
		operatingSystem = MAC_OS;
	} else if (/Linux/.test(userAgent)) {
		operatingSystem = 'Linux';
	} else if (/Android/.test(userAgent)) {
		operatingSystem = 'Android';
	} else if (/iPhone|iPad|iPod/.test(userAgent)) {
		operatingSystem = 'iOS';
	} else {
		operatingSystem = 'Unknown';
	}

	return operatingSystem;
}

export function getKeyCommand() {
	const os = detectOS();

	return os === MAC_OS ? 'CMD' : 'ctrl';
}
