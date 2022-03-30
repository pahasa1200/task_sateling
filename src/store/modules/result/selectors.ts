import {AppStateType} from "../.."

export const getWordList = (state: AppStateType) => state.results.wordList
export const getError = (state: AppStateType) => state.results.error
export const getFetching = (state: AppStateType) => state.results.isFetching
