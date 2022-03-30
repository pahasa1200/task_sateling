import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {resultReducer} from "./modules/result/resultReducer";

const rootReducer = combineReducers({
    results: resultReducer,
});

type ReducersType = typeof rootReducer;

export type AppStateType = ReturnType<ReducersType>;

export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
