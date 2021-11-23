function insertAtArray<T extends any[]>(array: T, items: T, pos = 0): T {
  const newArray = [...array.slice(0, pos), ...items, ...array.slice(pos)] as T;
  return newArray;
}

export { insertAtArray };
