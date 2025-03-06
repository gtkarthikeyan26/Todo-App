import React from 'react'
import { Button } from './Button'

export const ProjectsSidebar = ({onStartAddProject, projects, onSelectProject, selectedProjectId}) => {
  return (
    <aside className="w-full h-full px-6 py-8 md:py-12">
      <h2 className="mb-8 font-bold uppercase text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>
          + Add Project
        </Button>
      </div>
      <ul className="mt-8 space-y-2">
        {projects.map((project) => {
          let cssClasses = "w-full text-left px-4 py-2 rounded-lg transition-colors";

          if (project.id === selectedProjectId) {
            cssClasses += ' bg-stone-800 text-stone-200'
          } else {
            cssClasses += ' text-stone-400 hover:bg-stone-800'
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  )
}
