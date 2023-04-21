import { Box, Container, Stack } from "@mui/material";
import IntroLeft from "../components/IntroLeft";
import IntroRight from "../components/IntroRight";
import NavBar from "../components/NavBar";

const Intro = () => {
  return (
    <Box height={"100vh"}>
      <NavBar />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        height={"100vh"}
        overflow={"hidden"}
      >
        <IntroLeft />
        <IntroRight />
      </Stack>
      <Stack height="100vh">
        <Box>BOX1</Box>
      </Stack>
      <Stack height="100vh">
        <Box>BOX2</Box>
      </Stack>
    </Box>
  );
};

export default Intro;
