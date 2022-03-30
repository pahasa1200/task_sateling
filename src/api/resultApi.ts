import axios from "axios";
import {IResponse} from "../types";
import uuid from 'uuid-random';

export const API = {
    searchWord(word: string) {
        return axios.get<IResponse[]>(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        ).then(res => res.data.map(element => ({...element, id: uuid() } )));
    },
};
