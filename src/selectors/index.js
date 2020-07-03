export const getTimeDifference = (pastDate) => {
	var diff = (new Date(pastDate).getTime() - new Date().getTime()) / 1000;
	diff /= 60 * 60 * 24;
	return Math.abs(Math.round(diff / 365.25));
};
