import { useGlobalState } from '@/context/UserContext';
import { useEffect, useState } from 'react';

export function useDebounceAndThrottle(debounceTime = 500, throttleTime = 1000) {
  const { setSearchUsernameValue } = useGlobalState();
  const [instantValue, setInstantValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebouncedValue(instantValue);
    }, debounceTime);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [instantValue]);

  useEffect(() => {
    const throttleTimer = setTimeout(() => {
      setSearchUsernameValue(debouncedValue);
    }, throttleTime);

    return () => {
      clearTimeout(throttleTimer);
    };
  }, [debouncedValue]);

  return { setInstantValue };
}
