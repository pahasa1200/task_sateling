import React, { FC, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Button,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ROUTES from "../routes";
import { IResponse } from "../types/Api";
import { getError, getWordList } from "../store/modules/result/selectors";
import {actions, searchWord} from "../store/modules/result/resultReducer";
import Loader from "../components/Loader";


const ResultPage: FC = () => {
  const { word } = useParams();
  const history = useNavigate();
  const dispatch = useDispatch();

  let wordList = useSelector(getWordList)
  const error = useSelector(getError)

  useEffect(() => {
    if (word) {
      dispatch(searchWord(word));
    }
  }, [word]);

  useEffect(() => {
    return () => {
      dispatch(actions.setResultsSuccess([]))
      console.log('back')
    }
  }, []);

  useEffect(() => {
    if (error) {
      history(ROUTES.NOT_FOUND);
    }
  }, [error]);

  return (
    <Container
      maxWidth="xl"
      sx={{ display: "grid", gridColumns: "1fr 1fr 1fr", alignItems: "center" }}
    >
      <Loader />

      {wordList.map((data: IResponse, i: number) => (
        <Card key={i} sx={{ gridColumn:2, maxWidth: "550px", marginTop: "30px" }}>
          <CardContent>
            <Loader />

            <Box className="title-block" component="div">
            <Typography
              className="title-block__typography"
              gutterBottom
              variant="h2"
              component="div"
              sx={{ display: "flex", gap: "10px", alignItems: "center", fontWeight: '700' }}
            >
              {word}
              {data.phonetics.map(({ text, audio }, i: number) => (
                <Box component="div" key={i}>
                  <Typography component="span">{ text && `[ ${text} ]`} </Typography>

                  {audio && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => new Audio(audio).play()}
                    >
                      <PlayArrowIcon />
                    </Button>
                  )}
                </Box>
              ))}
            </Typography>
            </Box>

            <Typography gutterBottom variant="h5" sx={{ fontSize: "1rem"}}>
              Source: {data.sourceUrls}
            </Typography>

            <Box component="div">
              {data.meanings.map(({ partOfSpeech, definitions }, i: number) => (
                <Box component="div" key={i}>
                  <Typography key={i} gutterBottom variant="h5" component="div">
                    <hr className="black-line"/>
                    Part of speech: {partOfSpeech}
                  </Typography>

                  <Typography gutterBottom variant="h5" component="div">
                    Explanation
                  </Typography>

                  {definitions.map(
                    ({ definition, example, synonyms, antonyms }, i: number) => (
                      <Box component="div" key={i}>
                        <hr/>
                        <Typography variant="body2" color="text.secondary">
                          Definition: {definition}
                        </Typography>

                        <Typography component={"p"} variant={"body2"}>
                          Example: {example}
                        </Typography>

                        <Typography component={"p"} variant={"body2"}>
                          Synonyms:
                          {synonyms.map((el, i: number) => (
                            <Typography
                              key={i}
                              sx={{ wordBreak: "break-all" }}
                              component={"span"}
                              variant={"body2"}
                            >
                              {el},
                            </Typography>
                          ))}
                        </Typography>

                        <Typography component={"p"} variant={"body2"}>
                          Antonyms:
                          {antonyms.map((el, i: number) => (
                            <Typography
                              key={i}
                              component={"span"}
                              variant={"body2"}
                            >
                              {el}
                            </Typography>
                          ))}
                        </Typography>
                      </Box>
                    )
                  )}
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default ResultPage;
