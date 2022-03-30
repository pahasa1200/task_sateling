import {Action} from "redux";

export default interface ActionType<T, TP = any> extends Action<T> {
    payload: TP;
}
