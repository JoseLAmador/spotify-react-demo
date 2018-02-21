import React from 'react';

const TrackDetail = ({album, name, duration_ms, popularity, artists}) => {
    return (
        <div className="song-detail">
            <div className="header">
                <img src={album?album.images[2].url:""}/>
                <span className="title">{name}</span>
                <span>Duration: {duration_ms }</span>
                <span>Popularity: {popularity}</span>
                <span>Album: {album?album.name:'No especificado'}</span>
                <span>{artists?artists[0].name:'Artista'}</span>
            </div>
        </div>
    )
};

export default TrackDetail;