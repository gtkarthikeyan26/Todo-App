import React from 'react'
import NewTask from './NewTask';
export const Task = ({ tasks = [], onAdd, onDelete }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-6">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-600 my-6">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="mt-8 rounded-lg bg-stone-100 divide-y divide-stone-200">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center justify-between px-4 py-4">
              <span className="text-stone-800">{task.text}</span>
              <button
                className="text-stone-600 hover:text-red-500 transition-colors"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
