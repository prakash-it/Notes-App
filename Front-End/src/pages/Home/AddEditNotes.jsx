import React, { useState } from 'react';
import Tag from '../../components/input/Tag';
import { MdClose } from 'react-icons/md';

export default function AddEditNotes({ noteData, type,onClose }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [error, setError]= useState(null);

  const addNewNote = async ()=>{}

  const editNote = async ()=>{}

  const handleAddNote = ()=>{
    if(!title)
    {
      setError("Please Enter the Title")
      return;
    }
    if(!content)
    {
      setError('Please Enter the content')
      return
    }

    setError('')

    if(type === 'edit')
    {
      editNote()
    } else
    {
      addNewNote()
    }
  }

  return (
    <div className='relative'>
      <button 
        className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50' 
        onClick={onClose}>
        <MdClose className='text-lg text-slate-400' />
      </button>
      <div className='flex flex-col gap-2'>
        <label className='input-label'>Title</label>
        <input
          type='text'
          className='text-2xl text-slate-950 outline-none'
          placeholder='Go to Her'
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>

      <div className='flex flex-col gap-2 mt-4'>
        <label className='input-label'>Content</label>
        <textarea
          type='text'
          className='text-sm text-slate-900 outline-none bg-slate-50 p-2 rounded'
          placeholder='Contact'
          rows={10}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>

      <div className='mt-3'>
        <label className='input-label'>Tags</label>
        <Tag tags={tags} setTags={setTags} />
        </div>

        {error && <p className='text-xs text-red-500 pt-4'>{error}</p>}
        <button className='btn-primary font-medium mt-5 p-3' onClick={handleAddNote}>
          Add
        </button>
      
    </div>
  );
}
