import { configureStore } from "@reduxjs/toolkit"
import siteSettingsSlice from "~/slices/siteSettings"

export const store = configureStore({
   reducer: {
      siteSettings: siteSettingsSlice
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
