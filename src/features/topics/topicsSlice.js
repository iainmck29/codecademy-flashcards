import { createSlice } from '@reduxjs/toolkit'

//Slice
export const topicsSlice = createSlice({
    name: "topics",
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const objectToAdd = {...action.payload, quizIds: []}
            state.topics[action.payload.id] = objectToAdd;
        },
        addQuizToTopic: (state, action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId)
        }
    }
})

// Selector
export const selectTopics = (state) => {
    return state.topics.topics;
}

export const { addTopic, addQuizToTopic } = topicsSlice.actions;
export default topicsSlice.reducer;