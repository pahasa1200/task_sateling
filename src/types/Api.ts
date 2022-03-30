export type IResponse = {
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
