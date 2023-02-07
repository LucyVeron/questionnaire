import './App.css';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box, Link, Typography } from '@mui/material'
import { useState } from 'react';
import { styled } from "@mui/system";

const MyPaper = styled(Paper)({
  m: "1rem",
  height: "150px",
  position: "relative"
});

const MyButton = styled(Button)({
  position: "absolute",
  bottom: 0,
  left: "50%"
});

function App() {
  const [active, setActive] = useState(0);

  return (
    <Box className="app" sx={{ p: "1rem" }}>
      <Box sx={{ mb: "5rem" }}>
        <Button onClick={() => setActive(0)}>Reset</Button>
      </Box>
      <Carousel
        index={active}
        autoPlay={false}
        cycleNavigation={false}
        onChange={(now) => setActive(now)}
        NavButton={({ onClick, className, style, next, prev }) => {
          return (
            <Button onClick={onClick} className={className} style={style}>
              {next && "Next"}
              {prev && "Previous"}
            </Button>
          )
        }}
      >

        <MyPaper active={0}>
          <Typography>Random Name #1</Typography>
          <MyButton onClick={() => setActive(active + 1)}>Select</MyButton>
        </MyPaper>
        <MyPaper active={1}>
          <Typography>Random Name #2</Typography>
          <MyButton onClick={() => setActive(active + 1)}>Select</MyButton>
        </MyPaper>
        <MyPaper active={2}>
          Random Name #3
        </MyPaper>

      </Carousel>
      {active === 2 &&
        <Link
          underline="none"
          target="_blank"
          href="https://www.dyson.co.uk/inside-dyson/dyson-demo.html">
          Result
        </Link>
      }
    </Box>
  );
}

export default App;
