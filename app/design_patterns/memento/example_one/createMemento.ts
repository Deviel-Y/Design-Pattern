export const createMemento = <T>() => {
  let histories: T[] = [];
  let index: number = -1;

  const save = (state: T) => {
    histories.slice(0, index + 1);
    histories.push(state);
    index = histories.length - 1;
  };

  const undo = (): T | null => {
    if (index <= 0) return null;
    index--;
    return histories[index];
  };

  const redo = (): T | null => {
    if (index >= histories.length - 1) return null;
    index++;
    return histories[index];
  };

  return { save, undo, redo};
};
