interface IResponseApi {
    word: string;
    origin: string;
    phonetics: { [key: string]: string }[];
    sourceUrls: Record<string, any>
    meanings: [
        {
            partOfSpeech: string;
            definitions: {
                definition: string;
                example: string;
                synonyms: string[];
                antonyms: string[];
            }[];
        }
    ];
}

export interface IResponse extends IResponseApi {
    id: string
}
