import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NoteCard from '../../components/card/NoteCard'

export const Home = () => {
  return (
    <>
        <Navbar/>

        <div className="container mx-auto">
          <NoteCard/>
        </div>
    </>
  )
}
