import React from 'react';
import TrackCard from "./TrackCard";

const TracksList = ({results, playSong}) => {
    return (
        <div className="results">
            {results.map((song,key)=>{
                return <TrackCard key={key} {...song} playSong={playSong} fullSong={song}/>
            })}
        </div>

    )
};

export default TracksList;