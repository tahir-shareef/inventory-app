import { useCallback, useState } from 'react';

export function useApi() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const makeApiCall = useCallback(async (apiCall) => {
    setIsLoading(true);
    setError('');

    try {
      const response = await apiCall();
      setIsLoading(false);
      setError('');
      return response;
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      const error =
        err?.response?.data || 'An error occured. Please try again later';
      setError(error);
      return error;
    }
  }, []);

  return [isLoading, error, makeApiCall, setError];
}
