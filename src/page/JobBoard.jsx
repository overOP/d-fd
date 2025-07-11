import React, { useState } from "react";
import { create } from "zustand";
import { v4 as uuid } from "uuid";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

const JOB_KEY = "jobs";

const loadJobs = () => {
  try {
    return JSON.parse(localStorage.getItem(JOB_KEY)) || [];
  } catch {
    return [];
  }
};

const saveJobs = (jobs) => {
  localStorage.setItem(JOB_KEY, JSON.stringify(jobs));
};

// eslint-disable-next-line react-refresh/only-export-components
export const useJobs = create((set) => ({
  jobs: loadJobs(),

  setJobs: (jobs) => {
    saveJobs(jobs);
    set({ jobs });
  },

  addJob: (title) =>
    set((state) => {
      const next = [
        ...state.jobs,
        { id: uuid(), title, status: "todo" },
      ];
      saveJobs(next);
      return { jobs: next };
    }),
}));


const columns = ["todo", "inprogress", "done"];
const columnTitles = {
  todo: "To Do",
  inprogress: "In Progress",
  done: "Done",
};

const JobBoard = () => {
  const { jobs, setJobs, addJob } = useJobs();
  const [title, setTitle] = useState("");

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updated = Array.from(jobs);
    const [moved] = updated.splice(result.source.index, 1);
    moved.status = result.destination.droppableId;
    updated.splice(result.destination.index, 0, moved);
    setJobs(updated);
  };

  const handleAdd = () => {
    if (title.trim()) {
      addJob(title.trim());
      setTitle("");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-4">
        Job Board
      </h1>

      {/* Add‑job form */}
      <div className="flex gap-2 mb-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New job title"
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={handleAdd}
          className="px-4 bg-blue-600 text-white rounded"
        >
          Add
        </button>
      </div>

      {/* Kanban board */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {columns.map((col) => (
            <Droppable droppableId={col} key={col}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-white rounded shadow p-3 min-h-[300px]"
                >
                  <h3 className="font-semibold mb-2">
                    {columnTitles[col]}
                  </h3>

                  {jobs
                    .filter((j) => j.status === col)
                    .map((job, index) => (
                      <Draggable
                        key={job.id}
                        draggableId={job.id}
                        index={index}
                      >
                        {(drag) => (
                          <div
                            ref={drag.innerRef}
                            {...drag.draggableProps}
                            {...drag.dragHandleProps}
                            className="mb-2 p-2 border rounded bg-gray-50"
                          >
                            {job.title}
                          </div>
                        )}
                      </Draggable>
                    ))}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default JobBoard;
