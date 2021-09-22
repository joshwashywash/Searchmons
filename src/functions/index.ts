export const createFetcher = <T>(fn: (response: Response) => Promise<T>) => {
	return (...params: Parameters<typeof fetch>) => fetch(...params).then(fn);
};
