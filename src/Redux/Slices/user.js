import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    userLoading: false
}

export const userSlice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setUserLoading: (state, action) => {
            state.userLoading = action.payload;
        }

    }
})

export const { setUser, setUserLoading } = userSlice.actions

export default userSlice.reducer

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     user: null,
//     userLoading: false
// };

// export const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         setUser: (state, action) => {
//             const { uid, email, displayName, photoURL } = action.payload;
//             state.user = { uid, email, displayName, photoURL };
//         },
//         setUserLoading: (state, action) => {
//             state.userLoading = action.payload;
//         }
//     }
// });

// export const { setUser, setUserLoading } = userSlice.actions;

// export default userSlice.reducer;
