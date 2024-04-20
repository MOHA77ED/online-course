export const useLocalStorage = (
	key: string,
	initialValue: boolean | unknown = false
) => {
	if (initialValue) {
		window.localStorage.setItem(key, JSON.stringify(initialValue));
	}
	const setItem = (value: unknown) => {
		window.localStorage.setItem(key, JSON.stringify(value));
	};
	const getItem = () => {
		const item = window.localStorage.getItem(key);
		return item ? JSON.parse(item) : undefined;
	};

	const removeItme = () => {
		window.localStorage.removeItem(key);
	};
	return { setItem, getItem, removeItme };
};
