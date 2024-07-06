import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import NoteCard from '../../components/card/NoteCard';
import { MdAdd } from 'react-icons/md';
import AddEditNotes from './AddEditNotes';
import Modal from 'react-modal';

export const Home = () => {
  const [openAdd, setOpenAdd] = useState({
    isShow: false,
    type: "add",
    data: null,
  });

  return (
    <>
      <Navbar />

      <div className="container mx-auto">
        <div className='grid grid-cols-3 gap-4 mt-8'>
          <NoteCard 
            title="Meet On Her" 
            date="16 Aug 2024" 
            content="Meet on States"
            tags="#Her"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button 
        className='w-16 h-16 flex items-center justify-center rounded-xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10' 
        onClick={() => setOpenAdd({ isShow: true, type: 'add', data: null })}>
        <MdAdd className='text-[32px] text-white'/>
      </button>

      <Modal 
        isOpen={openAdd.isShow}
        onRequestClose={() => setOpenAdd({ isShow: false, type: 'add', data: null })}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=''
        className='w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5'
      >
        <AddEditNotes type={openAdd.type} noteData={openAdd.data}
         onClose={() => setOpenAdd({ isShow: false, type: 'add', data: null })} />
      </Modal>
    </>
  );
}
