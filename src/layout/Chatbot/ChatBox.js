import {
  Backdrop,
  Box,
  Button,
  Grid,
  IconButton,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from "@mui/icons-material/Close";
import FloatingActionButton from "./FAB";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useEffect, useRef, useState } from "react";
import { delay, motion } from "framer-motion";
import { postQuestion } from "../../requests/requests";
function ChatBox() {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { delay: 0.4, type: "spring", stiffness: 900, damping: 70 },
  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [questions, setQuestions] = useState([]);

  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);

  function handleFAB() {
    setIsChatBoxOpen(!isChatBoxOpen);
  }

  function clearChatBox() {
    setQuestions([]);
  }

  const [input, setInput] = useState("");

  function setInputHandler(e) {
    setInput(e.target.value);
  }

  const [isAsked, setIsAsked] = useState(false);

  async function handleSubmit() {
    setQuestions((prevQuestions) => [...prevQuestions, input]);
    setInput("");
    setIsAsked(true);
    try {
      const response = await postQuestion(input);
      setQuestions((prevQuestions) => [...prevQuestions, response]);
    } catch (e) {
      console.log(e);
    }
    setIsAsked(false);
  }

  useEffect(() => {
    scrollToBottom();
  }, [setInputHandler]);

  return (
    <>
      <Backdrop
        open={isChatBoxOpen}
        sx={{ zIndex: 1000, bgcolor: "rgba(0, 0, 0, 0.3)" }}
        onClick={handleFAB}
      />
      <Grid
        container
        position="fixed"
        zIndex={2000}
        bottom={{ xs: "30px", md: "75px" }}
        right={{ xs: "30px", md: "75px" }}
        style={{
          height: "98vh",
          pointerEvents: isChatBoxOpen ? "auto" : "none",
        }}
      >
        <Grid container display="flex" flexDirection={{xs:"column",md:"row"}} alignItems="flex-end" justifyContent="flex-end">
          {isChatBoxOpen && (
            <>
              <Grid
                display="flex"
                flexDirection="column"
                justifyContent="center"
                component={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
              >
                <Grid
                  width={{ xs: 300, md: 450 }}
                  display="flex"
                  flexDirection="row"
                  paddingX={2}
                  bgcolor="#EEEEEE"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    borderRadius: "20px 20px 0px 0px",
                  }}
                  
                >
                  <Grid>
                  <Typography
                    fontFamily="roboto-bold"
                    fontSize={{xs:14,md:24}}
                    color="black"
                  
                  >
                    Nane&Limon Chatbot
                  </Typography>
                  </Grid>
                  <Grid padding={1} display="flex" flexDirection="row">
                  <Button
                    onClick={clearChatBox}
                    disabled={isAsked}
                    disableRipple={true}
                    disableFocusRipple
                    disableTouchRipple
                    
                    sx={{  zIndex: 100,color: "black",  }}
                  >
                    <DeleteIcon sx={{ width:25,heigth: 25}}/>
                  </Button>
                  <Button
                    onClick={handleFAB}
                    
                    disableRipple={true}
                    disableFocusRipple
                    disableTouchRipple
                    sx={{ zIndex: 1000,color:"red" }}
                  >
                    <CloseIcon sx={{ width:25,heigth: 25 }} />
                  </Button>
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
                  display="flex"
                  flexDirection="column"
                  bgcolor="#EEEEEE"
                  width={{ xs: 300, md: 450 }}
                  height={{ xs: 600, md: 600 }}
                  
                  marginRight={2}
                  padding={0.2}
                  style={{ pointerEvents: "auto" }}
                >
                  <Grid
                    sx={{ overflowY: "auto" }}
                    display="flex"
                    flexDirection="column"
                    height="100%"
                  >
                    <Grid
                      item
                      container
                      direction="column"
                      sx={{
                        flex: 1,
                        marginTop: 2,
                        maxWidth: { xs: 300, md: 450 },
                      }}
                    >
                      {questions.length === 0 && (
                        <Grid
                          justifyContent="center"
                          display="flex"
                          alignItems="center"
                          height="100%"
                        >
                          <Typography fontFamily="roboto-medium" fontSize={16}>
                            Henüz soru sormamışsın...
                          </Typography>
                        </Grid>
                      )}

                      {questions.map((text, index) => (
                        <Grid
                          component={motion.div}
                          {...animations}
                          layout
                          key={index}
                          item
                          width="50%"
                          maxWidth={30}
                          borderRadius={3}
                          alignSelf={index % 2 == 0 ? "end" : "start"}
                          alignItems="center"
                          display="flex"
                          justifyContent="flex-start"
                          padding={2}
                          marginY={1}
                          marginRight={3}
                          marginLeft={3}
                          bgcolor={index % 2 == 0 ? "#DBE098" : "#ffffff"}
                          sx={{
                            borderRadius:
                              index % 2 !== 0
                                ? "20px 20px 20px 0px"
                                : "20px 20px 0px 20px",
                          }}
                        >
                          <Typography
                            sx={{ overflow: "hidden", wordWrap: "break-word" }}
                            fontFamily="roboto-regular"
                            fontSize={14}
                          >
                            {text}
                          </Typography>
                        </Grid>
                      ))}
                      {isAsked && (
                        <Box
                          component={motion.div}
                          {...animations}
                          sx={{
                            width: { xs: 150, md: 250 },
                            marginLeft: 3,
                            marginY: 1,
                          }}
                        >
                          <Skeleton />
                          <Skeleton animation="wave" />
                          <Skeleton animation={false} />
                        </Box>
                      )}
                    </Grid>
                    <div ref={messagesEndRef} />

                    <Grid
                      item
                      margin={3}
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      position="relative"
                    >
                      <TextField
                        fullWidth
                        value={input}
                        onChange={setInputHandler}
                        sx={{ bgcolor: "white", borderRadius: 4, padding: 2 }}
                        variant="standard"
                        InputProps={{
                          disableUnderline: true,
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && input !== "" && !isAsked) {
                            handleSubmit();
                          }
                        }}
                      />
                      <IconButton
                        disabled={input === "" || isAsked ? true : false}
                        sx={{ marginLeft: 2 }}
                        
                        onClick={handleSubmit}
                      >
                        <ArrowUpwardIcon sx={{ width: 25, height: 25 }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </>
          )}
          <Grid item>
            <FloatingActionButton
              style={{ marginLeft: {xs: "0px",md:"20px"},marginTop:{xs: "20px",md:"0px"}, pointerEvents: "auto" }}
              onClick={handleFAB}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ChatBox;
