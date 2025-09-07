"use client";

import React, { useCallback, useEffect, useState } from "react";
import KanBanCard from "@/components/module/KanBan/KanBanCard";
import Swal from "sweetalert2";
import { AddSquare } from "iconsax-reactjs";

type Task = { id: string; title: string };
type Column = { id: string; title: string; tasks: Task[] };

const STORAGE_KEY = "kanban.columns.v1";

function uid(prefix = "t") {
  return `${prefix}_${Date.now().toString(36)}_${Math.random()
    .toString(36)
    .slice(2, 9)}`;
}

export default function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>([]);

  // load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setColumns(JSON.parse(raw));
    } catch {}
  }, []);

  // save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(columns));
    } catch {}
  }, [columns]);

  const moveTask = useCallback(
    (
      sourceColId: string,
      taskId: string,
      targetColId: string,
      targetTaskId?: string | undefined
    ) => {
      setColumns((prev) => {
        const cols = prev.map((c) => ({ ...c, tasks: [...c.tasks] }));

        const sourceCol = cols.find((c) => c.id === sourceColId);
        const targetCol = cols.find((c) => c.id === targetColId);
        if (!sourceCol || !targetCol) return prev;

        const sIndex = sourceCol.tasks.findIndex((t) => t.id === taskId);
        if (sIndex === -1) return prev;

        const [task] = sourceCol.tasks.splice(sIndex, 1);

        if (targetTaskId) {
          const targetIndex = targetCol.tasks.findIndex(
            (t) => t.id === targetTaskId
          );
          let insertIndex = targetIndex;
          if (sourceColId === targetColId && sIndex < targetIndex)
            insertIndex = Math.max(0, targetIndex);

          if (insertIndex === -1) targetCol.tasks.push(task);
          else targetCol.tasks.splice(insertIndex, 0, task);
        } else {
          targetCol.tasks.push(task);
        }

        return cols;
      });
    },
    []
  );

  const handleDragStart = useCallback(
    (e: React.DragEvent, colId: string, taskId: string) => {
      try {
        e.dataTransfer.setData(
          "application/json",
          JSON.stringify({ sourceColId: colId, taskId })
        );
      } catch {}
      e.dataTransfer.effectAllowed = "move";
      (e.target as HTMLElement).classList.add("opacity-60");
    },
    []
  );

  const handleDragEnd = useCallback((e: React.DragEvent) => {
    (e.target as HTMLElement).classList.remove("opacity-60");
  }, []);

  const handleDropOnColumn = useCallback(
    (e: React.DragEvent, targetColId: string) => {
      e.preventDefault();
      try {
        const raw = e.dataTransfer.getData("application/json");
        const parsed = raw ? JSON.parse(raw) : null;
        if (!parsed) return;
        const { sourceColId, taskId } = parsed;
        moveTask(sourceColId, taskId, targetColId);
      } catch {}
    },
    [moveTask]
  );

  const handleDropOnTask = useCallback(
    (e: React.DragEvent, targetColId: string, targetTaskId: string) => {
      e.stopPropagation();
      e.preventDefault();
      try {
        const raw = e.dataTransfer.getData("application/json");
        const parsed = raw ? JSON.parse(raw) : null;
        if (!parsed) return;
        const { sourceColId, taskId } = parsed;
        if (taskId === targetTaskId && sourceColId === targetColId) return;
        moveTask(sourceColId, taskId, targetColId, targetTaskId);
      } catch {}
    },
    [moveTask]
  );

  const addTask = useCallback((colId: string, title: string) => {
    if (!title.trim()) return;
    setColumns((prev) =>
      prev.map((c) =>
        c.id === colId
          ? { ...c, tasks: [...c.tasks, { id: uid("t"), title }] }
          : c
      )
    );
  }, []);

  const addColumn = useCallback((title: string) => {
    if (!title.trim()) return;
    setColumns((prev) => [...prev, { id: uid("c"), title, tasks: [] }]);
  }, []);

  // SweetAlert → گرفتن ورودی
  const handleAddTask = async (colId: string) => {
    const { value } = await Swal.fire({
      title: "افزودن تسک جدید",
      input: "text",
      inputLabel: "عنوان تسک",
      inputPlaceholder: "مثلاً: طراحی UI",
      showCancelButton: true,
      confirmButtonText: "افزودن",
      cancelButtonText: "لغو",
    });
    if (value) addTask(colId, value);
  };

  const handleAddColumn = async () => {
    const { value } = await Swal.fire({
      title: "ایجاد ستون جدید",
      input: "text",
      inputLabel: "عنوان ستون",
      inputPlaceholder: "مثلاً: Review",
      showCancelButton: true,
      confirmButtonText: "ایجاد",
      cancelButtonText: "لغو",
    });
    if (value) addColumn(value);
  };

  return (
    <div className="p-6 w-[1500px] h-screen flex flex-col">
      <h1 className="text-2xl font-semibold mb-4">Kanban Board</h1>

      <div className="flex gap-6 items-start overflow-x-auto flex-1 pb-4">
        {columns.map((col) => (
          <div
            key={col.id}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDropOnColumn(e, col.id)}
            className="flex-shrink-0 w-72  rounded-2xl p-4 flex flex-col min-h-full"
          >
            {/* هدر ستون */}
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-medium">{col.title}</h2>
              <button
                onClick={() => handleAddTask(col.id)}
                className="w-10 h-10 flex justify-center items-center rounded-xl bg-[#AB54DB26] text-blue-500"
              >
                <AddSquare />
              </button>
            </div>

            <div className="flex-1 space-y-3">
              {col.tasks.map((task) => (
                <div
                  key={task.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, col.id, task.id)}
                  onDragEnd={handleDragEnd}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => handleDropOnTask(e, col.id, task.id)}
                >
                  <KanBanCard />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* دکمه افزودن ستون */}
        <button
          onClick={handleAddColumn}
          className="flex-shrink-0 w-72 h-full px-4 py-3 rounded-xl bg-[#AB54DB26] border-dashed border-3  border-blue-500/50  to-blue-500   self-start"
        >
          ➕ افزودن ستون
        </button>
      </div>
    </div>
  );
}
