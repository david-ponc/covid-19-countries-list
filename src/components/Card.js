import React from 'react';
import './styles/Card.css';
import iconUp from '../assets/images/icon-up.svg';
import iconDead from '../assets/images/icon-dead.svg';
import iconRecovered from '../assets/images/icon-recovered.svg';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <span className="card__header">
          <p>{this.props.country.Country}</p>
          <p>{this.props.country.CountryCode}</p>
        </span>
        <p className="card__body">{this.props.country.TotalConfirmed}</p>
        <div className="card__footer">
          <p>
            <img src={iconUp} alt="icon-up" />
            {this.props.country.NewConfirmed}
          </p>
          <p>
            <img src={iconDead} alt="icon-up" />
            {this.props.country.TotalDeaths}
          </p>
          <p>
            <img src={iconRecovered} alt="icon-up" />
            {this.props.country.TotalRecovered}
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
