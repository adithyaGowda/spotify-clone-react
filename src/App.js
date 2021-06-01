import { useEffect, useCallback } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useStateProviderValue } from "./StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateProviderValue();

  const fetchData = useCallback(async () => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      const user = await spotify.getMe();
      dispatch({
        type: "SET_USER",
        user: user,
      });

      const playlists = await spotify.getUserPlaylists();
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
      });

      const response = await spotify.getPlaylist("37i9dQZEVXcOTexYdO1E0r");
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      });
    }
  }, [dispatch]);
  
  //Run code based on a given condition
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
