import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/video";
import db from "./config/firebase";
import { collection, doc, getDocs } from "firebase/firestore/lite";

function App() {

  let maxHeight;
  if(window.innerHeight <= 800){
    maxHeight = window.innerHeight

  }

  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videoList = videosSnapshot.docs.map(doc => doc.data());
    setVideos(videoList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App" style={{maxHeight: maxHeight + "px"}}>
      <div className="app__videos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}

        {/* <Video 
          likes={1949}
          messages={325}
          shares={252}
          name="Lucas"
          description="Becker o goleiro"
          music="musica epica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z" */}

        {/* <Video 
          likes={632}
          messages={225}
          shares={25}
          name="Pedro"
          description="Bird olhando para a camera"
          music="clap yur hands" 
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"       
        /> */}
      </div>
    </div>
  );
}

export default App;