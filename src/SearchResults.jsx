import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Howl } from "howler";
import { IconButton } from "@mui/material";
import "./SearchResults.css";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

export default function SearchResults({ searchText }) {
  const [wordData, setWordData] = useState({});
  const [loading, setLoading] = useState(true);
  const [audioUrl, setAudioUrls] = useState([]);
  const [error, setError]=useState('')
  useEffect(() => {
    async function getWord() {
      try {
        setWordData({})
        setAudioUrls([])
        const response = await axios.get(`${API_URL}/${searchText}`);
        const data = response.data[0];
        setWordData(data);
        const extractedAudioUrls = data.phonetics.map(
          (phonetic) => phonetic.audio
        );
        setAudioUrls(extractedAudioUrls);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error)
        setLoading(false);
      }
    }

    if (searchText) {
      getWord();
      setError(null)
    }
  }, [searchText]);

  const playAudio = (audioUrl) => {
    const sound = new Howl({ src: [audioUrl] });
    sound.play();
  };

  return (
    <div className="search-results-container">
      <div>
        <h1>{wordData.word}</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 style={{ color: "purple" }}>{wordData.phonetic}</h2>
          {audioUrl[0] && (
            <IconButton color="primary" onClick={() => playAudio(audioUrl[0])}>
              <PlayCircleFilledWhiteIcon
                sx={{ color: "purple", fontSize: 50 }}
              />
            </IconButton>
          )}
        </div>

        {wordData.word && <hr />}

        <ul>
          {wordData.meanings?.map((meaning, index) => (
            <li key={index}>
              <h3 style={{ color: "purple" }}>{meaning.partOfSpeech}</h3>
              <ul>
                {meaning.definitions?.map((definition, index) => (
                  <li key={index}>
                    <p>{definition.definition}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        {error && <h1>We could not find the word you were looking for</h1>}
      </div>
    </div>
  );
}
