import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from "./components/musicplayer/Search";
import TracksList from "./components/musicplayer/TracksList";
import TrackDetail from "./components/musicplayer/TrackDetail";

const audio = new Audio();

class App extends Component {

    constructor(){
        super({});
        this.state={
            song:{},
            results:[],
            music:false,
            search:""
        };
    }

    search=(event)=>{

        event.preventDefault();

        console.log("busqueda", this.state.search)
        fetch(`https://api.spotify.com/v1/search?q=${this.state.search}&type=track&market=MX`,{headers:{
            Authorization: 'Bearer BQDy7WQtaRJkx8CIgMT5o5F051ZDPSyT5mocB2nTDZbm7UYouEhjapQbZJ0UQEkqvvWo20LETTZ5zQ3nbEe6G0VLnA_QVN9hK-ASYpSxz2PhzmjLC6TgycIsBFdQSGUr1m3H0yu4oQ'
        }})
            .then((response)=>{

                return response.json()

            }).then((data)=>{


                console.log(data.tracks.items);
                this.setState({
                    results: data.tracks.items,
                    music: true
                })

        })//.catch(e=>{alert("No hay rolas homms")})


    };


    handleText=(event)=>{
      this.setState({search:event.target.value})
        console.log(this.state.search);
    };

    playSong=(song)=>{
        console.log("play")
        this.setState({song});
        //audio.pause();
        audio.src = song.preview_url;
        audio.play();
    }

  render() {

      let {song, results, music} = this.state;
    return (


          <section className="spotify-player">
              <Search handleText={this.handleText} search={this.search}/>

              <div className="player" style={music?{display:'block'}:{display:'none'}}>

                  <TracksList results={results} playSong={this.playSong}/>

                 <TrackDetail {...song}/>
              </div>


          </section>

    );
  }
}

export default App;
