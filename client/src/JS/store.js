import { configureStore } from '@reduxjs/toolkit'
import accessoireSlice from './accessoireSlice'

import clientSlice from './clientSlice/clientSlice'
import commandeSlice from './commandeSlice'
import vetementSlice from './vetementSlice'

export const store = configureStore({
  reducer: {
client: clientSlice,
accessoire:accessoireSlice,
vetement: vetementSlice,
commande:commandeSlice,

  },
})