import { useCallback, useEffect, useState } from 'react';

import { LocalStorageKey } from './useLocalStorage.types';

const useLocalStorage = <T = string>(
  key: LocalStorageKey,
  defaultValue?: T | undefined,
): [T | undefined, (val: T | undefined) => void, () => void] => {
  const get = useCallback((): T | undefined => {
    const stringifyData = window.localStorage.getItem(key);
    if (!stringifyData) {
      return undefined;
    }
    try {
      return JSON.parse(stringifyData) as T;
    } catch (e) {
      return undefined;
    }
  }, [key]);

  const getInitValue = () => {
    const localValue = get();
    if (localValue === undefined) {
      return defaultValue;
    }
    return localValue;
  };

  const [data, setData] = useState<T | undefined>(getInitValue());

  const set = useCallback(
    (newValue?: T) => {
      if (newValue) {
        const stringifyData = JSON.stringify(newValue);
        window.localStorage.setItem(key, stringifyData);
      } else {
        window.localStorage.removeItem(key);
      }
      setData(newValue);
    },
    [key],
  );

  const clear = useCallback((): void => {
    set();
    setData(defaultValue);
  }, [defaultValue, set]);

  useEffect(() => {
    const currentData = get();

    if (currentData === undefined) {
      set(defaultValue);
    } else {
      setData(currentData);
    }
  }, [defaultValue, get, key, set]);

  const remove = useCallback(() => clear(), [clear]);

  const checkLocalStorage = useCallback(
    ({ storageArea, newValue, key: storageKey }: StorageEvent) => {
      if (storageArea === window.localStorage) {
        if (key === storageKey && newValue) {
          setData(JSON.parse(newValue));
          return;
        }
        setData(defaultValue);
      }
    },
    [defaultValue, key],
  );

  useEffect(() => {
    window.addEventListener('storage', checkLocalStorage);
    return () => window.removeEventListener('storage', checkLocalStorage);
  }, [checkLocalStorage, key]);

  return [data, set, remove];
};

export default useLocalStorage;
