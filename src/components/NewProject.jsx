import React, { useRef } from 'react'
import  Input  from './Input'
import Modal from './Modal'

export const NewProject = ({onAdd,onCancle}) => {
  const modal = useRef()
  const title = useRef()
  const description = useRef()
  const dueDate = useRef()

  const handleSave = ()=>{
    const enteredTitle = title.current.value
    const enteredDescription = description.current.value
    const enteredDueDate = dueDate.current.value

    if (
      enteredTitle === '' ||
      enteredDescription === '' ||
      enteredDueDate === ''
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title:enteredTitle,
      description: enteredDescription,
      dueDate:enteredDueDate
    })
  }

  return (
    <>
    <Modal ref={modal} buttonName={"close"}>
      <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
      <p className="text-stone-600 mb-4">Enter the Correct Values </p>
    </Modal>
    <div className="w-[90%] md:w-[35rem] mx-auto mt-16">
    <menu className="flex items-center justify-end gap-4 my-4">
      <li>
        <button className="text-stone-800 hover:text-stone-950" onClick={onCancle} >Cancel</button>
      </li>
      <li>
        <button className="px-4 sm:px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button>
      </li>
    </menu>
    <div className="px-4 md:px-0">
      <Input type="text" ref={title} label="Title" />
      <Input ref={description} label="Description" textarea />
      <Input type="date" ref={dueDate} label="Due Date" />
    </div>
  </div>
  </>
  )
}
