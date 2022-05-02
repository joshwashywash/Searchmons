const createFetcher = <T>(fn: (response: Response) => Promise<T>) => {
  return (...params: Parameters<typeof fetch>) => fetch(...params).then(fn);
};

export const fetchJSON = createFetcher(response => response.json());
export const fetchBlob = createFetcher(response => response.blob());
