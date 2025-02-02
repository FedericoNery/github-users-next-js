import { useEffect, useState } from 'react';

export function useDebounceAndThrottle(debounceTime = 500, throttleTime = 1000, onChange) {
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
      onChange(debouncedValue);
    }, throttleTime);

    return () => {
      clearTimeout(throttleTimer);
    };
  }, [debouncedValue]);

  return { setInstantValue };
}
