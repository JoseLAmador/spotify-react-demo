import React from 'react';

const TrackCard = ({name, duration_ms, artists, playSong, fullSong}) => {
    return (
        <a className="song" onClick={()=>playSong(fullSong)}>
            <span className="title">{name}</span>
            <span>{duration_ms}</span>
            <span>{artists?artists[0].name:'El artista'}</span>
        </a>
    )
};

export default TrackCard;