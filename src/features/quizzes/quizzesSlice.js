import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addQuizToTopic } from "../topics/topicsSlice";



export const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload
        }
    }
})

export const addQuizAsync = (payload) => {
    return (dispatch) => {
        console.log(payload)
        dispatch(addQuizToTopic({quizId: payload.id, topicId: payload.topicId}))
        dispatch(addQuiz(payload));
    }
} 

export const selectQuizzes = (state) => {
    return state.quizzes.quizzes
}

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;