import { FC } from "react";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import {SearchWord} from "../components";

export const HomePage: FC = () => {

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
          <SearchWord />
        </Box>
      </Box>
    </Container>
  );
};
