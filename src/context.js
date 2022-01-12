import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openNav = () => {
    setNavIsOpen(true)
  }
  const openModal = () => {
    setModalIsOpen(true)
  }
  const closeNav = () => {
    setNavIsOpen(false)
  }
  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        openModal,
        openNav,
        closeModal,
        closeNav,
        navIsOpen,
        modalIsOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
