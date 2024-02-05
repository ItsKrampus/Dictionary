import { ListItem } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SearchResults from "./SearchResults";
import {Container} from "@mui/material";

export default function SearchForm() {
  const [text, setText] = useState("");
  const [searchTerm, setSearchTerm]=useState("")


  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  const handleSubmit=(e)=>{
    e.preventDefault()
    setSearchTerm(text)
  }





  return (
    <Container   sx={{ display: "flex", flexDirection: "column", alignItems: "center", width:"75%" }}>
    <ListItem
      sx={{
        mt: 3,
        display: "flex",
        justifyContent: "center",
        width: "75%",
      }}
    >
      <form onSubmit={handleSubmit} style={{width:'100%'}}  >
        <TextField 
          fullWidth
          id="outlined-basic"
          label="Search for any word..."
          variant="outlined"
          onChange={handleChange}
          value={text}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="Search" edge="end" type="submit">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
      </ListItem>
      <SearchResults searchText={searchTerm}/>

      </Container>





  );
}
