import { useState, useRef } from "react";
import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from "react-icons/hi2";


function NewsItem({ item }) {
  const websiteUrl = item.url;
  const website = websiteUrl.split("https://").pop().split("/")[0];

  const date = item.publishedAt;
  const formatDate = date.replace("T", "");
  const formatTime = formatDate.replace("Z", "");

  const [speechPlaying, setSpeechPlaying] = useState(false);
  const synth = useRef(window.speechSynthesis);

  const startSpeech = () => {
    if (!synth.current.speaking) {
      const utterance = new SpeechSynthesisUtterance(item.title);
      utterance.rate = 1.5;
      synth.current.speak(utterance);
      setSpeechPlaying(true);
    }
  };

  const stopSpeech = () => {
    synth.current.cancel();
    setSpeechPlaying(false);
  };

  return (
    <div className="article">
      <a href={item.url} className="article-link">
        <div className="article-image">
          <img src={item.urlToImage} alt={item.title} />
        </div>
        <div className="article-content">
          <div className="article-source">
            <img
              src={`https://www.google.com/s2/favicons?domain=${website}&sz=16`}
              alt={item.source.id}
            />
            <span>{item.source.name}</span>
          </div>
          <div className="article-title">
            <h2>{item.title}</h2>
          </div>
          <p className="article-description">{item.description}</p>
          <div className="article-details">
            <small>
              <b>Published At: </b>
              {formatTime}
            </small>
          </div>
        </div>
      </a>
      <div className="article-audio">
        <HiMiniSpeakerWave
          onClick={() => {
            startSpeech();
          }}
        />
        <HiMiniSpeakerXMark 
         onClick={()=> {
            stopSpeech(); 
         }}
        />
      </div>
    </div>
  );
}

export default NewsItem;
