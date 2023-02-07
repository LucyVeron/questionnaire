import './App.css';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box, Link } from '@mui/material'
import { useState } from 'react';

function App() {
  const [active, setActive] = useState(0);
  let items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #2",
      description: "Hello World!"
    },
    {
      name: "Random Name #3",
      description: "Final Slide"
    }
  ];

  return (
    <Box className="app" sx={{ p: "1rem" }}>
      <Box sx={{ mb: "5rem" }}>
        <Button onClick={() => setActive(0)}>Reset</Button>
      </Box>
      <Carousel
        index={active}
        autoPlay={false}
        cycleNavigation={false}
        next={(next) => setActive(next)}
        prev={(prev) => setActive(prev)}
        NavButton={({ onClick, className, style, next, prev }) => {

          return (
            <Button onClick={onClick} className={className} style={style}>
              {next && "Next"}
              {prev && "Previous"}
            </Button>
          )
        }}
      >
        {items.map((item, i) => <Item key={i} item={item} />)}
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

function Item(props) {
  return (
    <Paper sx={{ p: "0.8rem" }}>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
    </Paper>
  )
}

export default App;
