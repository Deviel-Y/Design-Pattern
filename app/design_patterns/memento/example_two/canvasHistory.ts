export const createCanvasHistory = () => {
  let snapshots: string[] = [];
  let index: number = -1;

  const save = (canvas: HTMLCanvasElement) => {
    const dataUrl = canvas.toDataURL();
    snapshots.slice(0, index + 1);
    snapshots.push(dataUrl);
    index = snapshots.length - 1;
  };

  const undo = (): string | null => {
    if (index <= 0) return null;
    index--;
    return snapshots[index];
  };

  const redo = (): string | null => {
    if (index >= snapshots.length - 1) return null;
    index++;
    return snapshots[index];
  };

  return { save, undo, redo };
};
