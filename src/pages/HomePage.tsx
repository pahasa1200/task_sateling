import React, { ChangeEvent, FC, useState } from "react";
import Box from "@mui/material/Box";
import { TextField, Container, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes";

const HomePage: FC = () => {
  const [word, setWord] = useState<string>("");
  const history = useNavigate();

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWord(e.currentTarget.value);
  };

  const onSearchClick = () => {
    history(ROUTES.HOME + word);
  };

  return (
    <Container className="search-container" maxWidth="xl" sx={{ display: "grid", alignItems: "center" }}>
      <Box className="search-block" sx={{ marginTop: "20px" }}>
        <Box>
          <Typography sx={{
            textAlign: "center",
            marginBottom: '1em',
            fontSize: '1.5rem',
            fontWeight: '700',
            letterSpacing: '0.5em'
            }}>
            DICTIONARY
          </Typography>
          <TextField
            label="Find your word"
            type="search"
            variant="outlined"
            sx={{ width: "100%" }}
            value={word}
            onChange={onSearchChange}
            InputProps={{
              endAdornment: (
                <IconButton onClick={onSearchClick} disabled={!word}>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
