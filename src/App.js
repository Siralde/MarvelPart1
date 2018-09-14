import React, { Component } from 'react';
import './App.css';
import List from './List';
import Comics from './Comics';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        selected: []
    };
    this.handleSelection = this.handleSelection.bind(this);
  }

  render() {

      const comics = Comics().data.results;
      const { selected } = this.state;
      const selectedComics = comics.filter(comic => selected.indexOf(comic.id) !== -1);

      // Index es el numero de indice dentro del array
      handleSelection(whichList, comicId) {

          console.log(whichList);
          console.log(comicId);

          // Busca dentro si el elemento esta o no
          if(whichList === "AllComics" && this.state.selected.indexOf(comicId) === -1)
          {
              // Si no esta lo anado
              this.setState({
                  selected: this.state.selected.concat(comicId)
                  // selected: this.state.selected.concat(Comics().data.results[index])
              });
          }
          else
          {
              // Si esta en el array construyo un nuevo array
              const newArray = this.state.selected.slice();

              // Elimino del nuevo array ese elemento
              newArray.splice(newArray.indexOf(comicId), 1);

              // Hago que selected sea ese nuevo array
              this.setState({
                  selected: newArray
              });
          }
      }

        return (
          <div>

            <div className="store-container">

                <h1>All Comics: {comics.length} Available</h1>

                <List
                    comics={comics}
                    onSelect={this.handleSelection.bind(this, "AllComics")}
                />

            </div>


            <div className="owned-container">

                <h1>My Comics: {this.state.selected.length} Selected</h1>

                {/*Aqui muestra la misma lista que la primera*/}
                <List
                    comics={selectedComics}
                    onSelect={this.handleSelection.bind(this, "SelectedComics")}
                />

            </div>
          </div>
        );
      }

}

export default App;