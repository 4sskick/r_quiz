

export enum Difficulty {
    EASY = "easy"
    , MEDIUM = "medium"
    , HARD = "hard"
}

export const fetchQuestionAsync = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    //gonna await for twice becase, first await is for fetch function, another one for converting into JSON
    const data = await (await fetch(endpoint)).json();

    console.log(data);
}