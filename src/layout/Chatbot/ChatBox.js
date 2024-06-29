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
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import FloatingActionButton from "./FAB";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useEffect, useRef, useState } from "react";
import { delay, motion } from "framer-motion";
import { postQuestion } from "../../requests/requests";
import imagePaths from "../../assets/imagePaths";
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
        zIndex={9999}
        bottom={{ xs: "0px", md: "75px" }}
        right={{ xs: "0px", md: "75px" }}
        style={{
          height: { xs: "100vh", md: "98vh" },
          pointerEvents: isChatBoxOpen ? "auto" : "none",
        }}
        
      >
        <Grid
          container
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="flex-end"
          justifyContent="flex-end"
        >
          {isChatBoxOpen && (
            <>
              <Grid
                display="flex"
                flexDirection="column"
                justifyContent="center"
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                marginRight={4}

                transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
                sx={{
                  width: { xs: "100vw", md: "auto" },
                  height: { xs: "100%", md: "auto" },
                  position: { xs: "fixed", md: "relative" },
                  
                  top: { xs: 0, md: "auto" },
                  left: { xs: 0, md: "auto" },
                  bottom: {xs: 0,md: "auto"},
                  backgroundColor: { xs: "#EEEEEE", md: "transparent" },
                  zIndex: 9999,
                  pointerEvents: isChatBoxOpen ? "auto" : "none",
                }}
              >
                <Grid
                  width={{ xs: "100vw", md: 450 }}
                  display="flex"
                  flexDirection="row"
                  paddingX={2}
                  
                  bgcolor="#EEEEEE"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    borderRadius: "20px 20px 0px 0px",
                    position: 'relative',
                    zIndex: 10000
                  }}
                >
                  <Grid>
                    <Typography
                      fontFamily="roboto-bold"
                      fontSize={{ xs: 14, md: 24 }}
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
                      sx={{ zIndex: 100, color: "black" }}
                    >
                      <Button
                        disableFocusRipple
                        disableRipple
                        sx={{ "&:hover": { bgcolor: "transparent" } }}
                      >
                        <Box
                          component="img"
                          src={imagePaths.icons.clear}
                          width={30}
                          height={30}
                          sx={{ objectFit: "contain" }}
                        />
                      </Button>
                    </Button>
                    <Button
                      onClick={handleFAB}
                      disableRipple={true}
                      disableFocusRipple
                      disableTouchRipple
                      sx={{ zIndex: 1000, color: "red" }}
                    >
                      <CloseIcon sx={{ width: 25, heigth: 25 }} />
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
                  width={{ xs: "100%", md: 450 }}
                  height={{ xs: "calc(100% - 75px)", md: 600 }}
                  padding={0.2}
                  style={{ pointerEvents: "auto" }}
                >
                  <Grid
                    sx={{ overflowY: "auto" }}
                    display="flex"
                    flexDirection="column"
                    height="100vh"
                  >
                    <Grid
                      item
                      container
                      direction="column"
                      sx={{
                        flex: 1,
                        marginTop: 2,
                        maxWidth: { xs: "100vw", md: 450 },
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
                      padding={3}
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      bottom={0}
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
              style={{
                marginRight: { xs: "30px", md: "20px" },
                marginBottom: { xs: "30px", md: "0px" },
                pointerEvents: "auto",
              }}
              onClick={handleFAB}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ChatBox;
