import {ChangeEvent, FC, useState} from "react";
import {TextField, IconButton} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../const";

export const SearchWord: FC = () => {

    const [word, setWord] = useState<string>("");
    const history = useNavigate();

    return (
        <TextField
            label="Find your word"
            type="search"
            variant="outlined"
            sx={{width: "100%"}}
            value={word}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setWord(e.currentTarget.value)}
            InputProps={{
                endAdornment: (
                    <IconButton onClick={() => history(ROUTES.HOME + word)} disabled={!word}>
                        <SearchIcon/>
                    </IconButton>
                ),
            }}
        />
    );
};
