import React from 'react'
import { Task } from './Tasks';

export const SelectedProject = ({project, onDelete, onAddTask, onDeleteTask, tasks}) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  
  return (
    <div className="w-full max-w-[864px] mx-auto p-8">
      <header className="pb-6 mb-6 border-b border-stone-300">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-stone-700">
            {project.title}
          </h1>
          <button
            className="px-4 py-2 text-stone-600 hover:text-red-500 transition-colors"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="text-stone-400 mb-4">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap leading-6">
          {project.description}
        </p>
      </header>
      <Task onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks}/>
    </div>
  )
}
