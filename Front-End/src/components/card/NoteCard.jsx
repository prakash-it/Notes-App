import React from 'react';
import { MdOutlinePushPin } from 'react-icons/md';

export default function NoteCard({ title, date, content, tags, isPinned, onEdit, onDelete, onPinNote }) {
  return (
    <div className="note-card border p-4 rounded-md shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <h6 className="text-sm font-medium">{title}</h6>
          <span className="text-xs text-slate-500">{date}</span>
        </div>
        <button onClick={onPinNote} aria-label={isPinned ? 'Unpin note' : 'Pin note'}>
         
        </button>
      </div>
      <p className="text-sm mt-2">{content ? content.slice(0, 60) : ''}</p>
    </div>
  );
}
