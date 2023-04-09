import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
   initialNavLoaded: false
}

export const siteSettingsSlice = createSlice({
   name: "siteSettings",
   initialState,
   reducers: {
      setInitialMenuLoaded(state, action: PayloadAction<boolean>) {
         state.initialNavLoaded = action.payload
         localStorage.setItem("darkMode", JSON.stringify(action.payload))
      },
   },
})

export const { setInitialMenuLoaded } = siteSettingsSlice.actions

export default siteSettingsSlice.reducer
