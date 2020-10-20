import React from 'react'
import store from '../mobx/store'

const ContextApp = React.createContext(store)

export const ProviderApp = ContextApp.Provider
export const Consumer = ContextApp.Consumer
export default ContextApp