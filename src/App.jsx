import { useState, useEffect } from "react";
import { Previews, Season, Show } from "./components";
import PuffLoader from "react-spinners/PuffLoader";
import Search from "./components/Search";
import { GENRE_MAP } from "./utils";



export const App = () => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [show, setShow] = useState(null);
  const [season, setSeason] = useState(null);
  

  /**
   * @param {string} id
   */
  const handleSetShow = (id) => {
    setLoading(true);

    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Invalid response");
        return response;
      })
      .then((response) => response.json())
      .then((inner) => {
        setShow(inner);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch("https://podcast-api.netlify.app/")
      .then((response) => {
        if (!response.ok) throw new Error("Invalid response");
        return response;
      })
      .then((response) => response.json())
      .then((inner) => {
        setList(inner);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <PuffLoader
        color={"#a07e96"}
        loading={loading}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );

  if (season) {
    if (!show) throw new Error("Show is null");
    /**
     * @type {(import('./types').Show')}
     */
    const showAsObject = show;
    return (
      <Season
        season={showAsObject.seasons.find((item) => item.season === season)}
        onBack={() => {
          setSeason(null);
        }}
      />
    );
  }

  if (show)
    return (
      <Show
        show={show}
        onBack={() => setShow(null)}
        onSelect={(value) => {
          console.log(value);
          setSeason(value);
        }}
      />
    );

    

  return (
    <div>
     
      {/* <Navbar /> */}
      {/* <Header /> */}
      {/* <Hero /> */}
      
      <Previews
        list={list}
        search=""
        genre={GENRE_MAP === {list}}
        onSelect={handleSetShow}
      />

      <div>
        
      </div>
    </div>
  );
};

export default App;
