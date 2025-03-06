import React from 'react'
import noProjectImage from '../assets/no-projects.png'
import { Button } from './Button'

export const NoProjectSelected = ({onStartAddProject}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <img 
        src={noProjectImage}
        alt="An empty task list"
        className="w-16 h-16 object-contain mb-4"
      />
      <h2 className="text-2xl font-bold text-stone-500 mb-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-8 text-center max-w-md">
        Select a project or get started with a new one
      </p>
      <Button onClick={onStartAddProject}>
        Create new project
      </Button>
    </div>
  )
}
