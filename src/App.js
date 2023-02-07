import './App.css';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box } from '@mui/material'
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
    }
  ];

  const reset = () => {

  }

  return (
    <Box className="app" sx={{p: "1rem"}}>
      {/* <Box>
        <Button onClick={() => consolw.warn}>Reset</Button>
      </Box> */}
      <Carousel
        next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
        prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
        NavButton={({onClick, className, style, next, prev}) => {
          // Other logic
  
          return (
              <Button onClick={onClick} className={className} style={style}>
                  {next && "Next"}
                  {prev && "Previous"}
              </Button>
          )
      }}
      >
        {
          items.map((item, i) => <Item key={i} item={item} />)
        }
      </Carousel>
    </Box>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button>
        Check it out!
      </Button>
    </Paper>
  )
}

export default App;
