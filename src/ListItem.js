import React, { Component } from 'react';
//import './ListItem.css';


class ListItem extends Component {
    // tengo que borrar el constructor
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
        selected: false
    };
  }

  render() {
    const metaData = this.props.comic;
    const {thumbnail, issueNumber, pageCount, dates, prices} = metaData;

    return (

        <div

            // className={`comic ${this.props.isSelected ? "selected" : ""}`}

            className={`comic ${this.state.selected ? "selected" : ""}`}
            onClick={this.handleClick}
        >

            <div className="comic-thumbnail-container">
                {/*Primer Error le falta un alt*/}
                {/*<img className="comic-thumbnail" src={`${thumbnail.path}.${thumbnail.extension}`}/>*/}
                <img className="comic-thumbnail" src={`${thumbnail.path}.${thumbnail.extension}`} alt={metaData.title}/>
            </div>
            <div className="comic-data-container">
                <h2>{metaData.title}</h2>
                <p>Issue: {issueNumber}</p>
                <p>Pages: {pageCount}</p>
                <p>Date: {new Date(dates[0].date).toLocaleDateString()}</p>
                <p>Price: ${prices[0].price}</p>
            </div>

        </div>
    );
  }

  handleClick() {
    if(this.props.onSelect)
    {
        // Segundo error estaba props key pero es image
        // this.props.onSelect(this.props.key);
        // this.props.onSelect(this.props.indice);
        this.props.onSelect(this.props.comic.id);

    }
    this.setState({
        selected: !this.state.selected,
    });
  }
}

export default ListItem;