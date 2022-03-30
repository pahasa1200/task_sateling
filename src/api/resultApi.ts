import axios from "axios";
import {IResponse} from "../types/Api";

export const API = {
    searchWord(word: string) {
        return axios.get<IResponse[]>(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        ).then(res => res.data);
    },
};
