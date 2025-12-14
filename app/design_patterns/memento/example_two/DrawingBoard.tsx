"use client";

import { Button, Typography } from "antd";
import { useEffect, useRef } from "react";
import { createCanvasHistory } from "./canvasHistory";

const canvasState = createCanvasHistory();

const DrawingBoard = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const restore = (dataUrl: string | null) => {
    if (!dataUrl) return;
    const img = new Image();
    img.src = dataUrl;
    img.onload = () => {
      const canvas = canvasRef.current!;
      const ctx = canvas?.getContext("2d");

      ctx?.clearRect(0, 0, canvas?.width, canvas?.height);
      ctx?.drawImage(img, 0, 0);
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");

    let isDrawing: boolean;

    const start = () => {
      isDrawing = true;
      ctx?.beginPath();
    };

    const move = (event: MouseEvent) => {
      if (!isDrawing) return;
      ctx?.lineTo(event.offsetX, event.offsetY);
      ctx?.stroke();
    };

    const end = () => {
      isDrawing = false;
      canvasState.save(canvas);
    };

    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mouseup", end);
    canvas.addEventListener("mousemove", move);

    return () => {
      canvas.removeEventListener("mousedown", start);
      canvas.removeEventListener("mouseup", end);
      canvas.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div className="p-5 flex flex-col gap-5 h-screen justify-center items-center bg-zinc-200">
      <Typography.Text className="font-semibold text-3xl">
        MEMENTO PATTERN
      </Typography.Text>

      <div>
        <Typography.Text className="text-xl block text-center">
          Draw something...
        </Typography.Text>
        <canvas
          width={500}
          height={500}
          className="border-2 border-gray-500 shadow-2xl rounded-2xl bg-zinc-100 "
          ref={canvasRef}
        />
      </div>

      <div className="flex gap-2">
        <Button
          size="large"
          onClick={() => restore(canvasState.undo())}
          variant="solid"
          color="purple"
        >
          Undo
        </Button>

        <Button
          size="large"
          onClick={() => restore(canvasState.redo())}
          variant="solid"
          color="blue"
        >
          Redo
        </Button>
      </div>
    </div>
  );
};

export default DrawingBoard;
