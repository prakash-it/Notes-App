import React from 'react'
import Tag from '../../components/input/Tag'

export default function AddEditNotes() {

  return (
    <div>
        <div className="flex flex-col gap-2">
            <label className="input-label"> Title </label>
            <input type="text" className='text-2xl text-slate-950 outline-none' placeholder='Go to Her' />
        </div>

        <div className="flex flex-col gap-2 mt-4">
           <label className='input-label'>Content</label>
           <textarea 
            type='text' 
            className='text-sm text-slate-900 outline-none bg-slate-50 p-2 rounded'
            placeholder='Contact'
             rows={10} />
        </div>

        <div className="mt-3">
            <label className="input-label">Tags</label>
            <Tag/>
            <button className='btn-primary font-medium mt-5 p-3' onClick={()=>{}}>Add</button>
        </div>
    </div>
  )
}
