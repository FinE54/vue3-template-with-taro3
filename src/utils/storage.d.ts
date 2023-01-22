interface CommonStorage<T = any> {
  get: (key: string) => T;
  set: (key: string, value: T) => void;
  remove: (key: string) => void;
}

interface Storage<T = any> {
  get: () => T | null;
  set: (value: T) => void;
  remove: () => void;
}

const storage: CommonStorage = {};
export default storage;

export const token: Storage<string> = {};
