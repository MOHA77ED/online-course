export function formateTime(date: Date, operator: string) {
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();

	return `${hours}${operator}${minutes}${operator}${seconds}`;
}
