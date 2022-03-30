import {BaseThunkType, InferActionsTypes} from "../..";
import {API} from "../../../api/";
import {IResponse} from "../../../types/";
import {TYPES} from "./action-types";

let initialState = {
    wordList: null as IResponse[] | null ,
    isFetching: false,
    error: '',
};

export const resultReducer = (
    state: InitialStateType = initialState, action: ActionsTypes = {} as ActionsTypes): InitialStateType => {
    switch (action.type) {
        case TYPES.SET_RESULTS_SUCCESS:
            return {...state, wordList: action.payload.wordList, isFetching: false};

        case TYPES.SET_IS_FETCHING:
            return {...state, isFetching: action.payload.isFetching};

        case TYPES.SET_ERROR:
            return {...state, error: action.payload.message};

        case TYPES.SEARCH_WORD:
            return {...state, isFetching: true};

        default:
            return state;
    }
}

export const actions = {
    setResultsSuccess: (wordList: IResponse[] | null) => ({
        type: TYPES.SET_RESULTS_SUCCESS, payload: {wordList},
    }) as const,

    searchWord: (word: string) => ({
        type: TYPES.SEARCH_WORD, payload: {word},
    }) as const,

    setError: (message: string) => ({
        type: TYPES.SET_ERROR, payload: {message},
    }) as const,

    setIsFetching: (isFetching: boolean) => ({
        type: TYPES.SET_IS_FETCHING, payload: {isFetching},
    }) as const,
}

export const searchWord = (word: string): BaseThunkType<ActionsTypes> => async (dispatch) => {
    try {
        dispatch(actions.setIsFetching(true))
        const apiData = await API.searchWord(word);
        dispatch(actions.setResultsSuccess(apiData))

    } catch (e) {
        dispatch(actions.setError((e as Error).message));
        dispatch(actions.setError(''));
    }

}

type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
