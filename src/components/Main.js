import React, { useState } from "react";
import "../styles/Main.css";

const API_URL = "https://official-joke-api.appspot.com/random_joke";

function Main() {
  const [joke, setJoke] = useState("");
  const [loader, setLoader] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  async function getJoke() {
    const response = await fetch(API_URL);
    const data = await response.json();
    setBookmarked(false);
    setLoader(false);
    setJoke(data);
  }

  return (
    <div id="main">
      <div className="card">
        <i
          className="fa-solid fa-bookmark bookmark"
          style={{
            color: bookmarked ? "#272829" : "#ccc",
          }}
        ></i>
        <h2>Jokes</h2>
        {joke ? (
          <p>
            <i>
              <strong>{joke.setup}</strong>
            </i>{" "}
            - {joke.punchline}
          </p>
        ) : (
          <p>
            Let's have a laugh. Click on the '<strong>new joke</strong>' button.
          </p>
        )}
        <button
          className="btn btn-danger"
          onClick={() => {
            setLoader(true);
            getJoke();
          }}
        >
          new joke {loader && <div className="loader"></div>}
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setBookmarked((bookmarked) => !bookmarked);
          }}
        >
          bookmark
        </button>
      </div>
    </div>
  );
}

export default Main;
