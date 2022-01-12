import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext } from './context'

const Home = () => {
  const { openNav, openModal } = useContext(AppContext)
  return (
    <main>
      <button className='sidebar-toggle' onClick={openNav}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}> show modal</button>
    </main>
  )
}

export default Home
