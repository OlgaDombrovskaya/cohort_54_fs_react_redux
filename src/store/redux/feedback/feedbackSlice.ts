import { createAppSlice } from "store/createAppSlice"
import { FeedbackSliceState } from "./types"

const feedbackInitialState = {
    like: 0,
    dislike: 0,
}

export const feedbackSlice = createAppSlice({
    //это имя используется для нахождения событий слайса
    name: "FEEDBACK",
    // это стэйт по умолчанию
    initialState: feedbackInitialState,

    //функция которая возвращает объект содержащий функции которые будут изменять стэйт
    reducers: create => ({
        plusLike: create.reducer((state: FeedbackSliceState) => {
            state.like += 1
        }),
        plusDislike: create.reducer((state: FeedbackSliceState) => {
            state.dislike += 1
        }),
        // reset: create.reducer(
        // (state: FeedbackSliceState) => {
        //     state.like = 0;
        //     state.dislike = 0;
        // }),
        reset: create.reducer(() => feedbackInitialState),
    }),

    // подписка на хранилище в store
    selectors: {
        feedback: (state: FeedbackSliceState) => {
            return state
        }
    },
});

// feedbackSlice сам создает экшон для каждого редюсера
export const feedbackSliceAction = feedbackSlice.actions
//место для храниения selectors
export const feedbackSliceSelectors = feedbackSlice.selectors
