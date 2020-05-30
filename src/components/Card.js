import React from 'react';
import './styles/Card.css';
import iconUp from '../assets/images/icon-up.svg';
import iconDead from '../assets/images/icon-dead.svg';
import iconRecovered from '../assets/images/icon-recovered.svg';

class Card extends React.Component {
  toFormatNumber(value) {
    return value.toLocaleString('es-mx', { maximumFractionDigits: 1 });
  }

  toKFormat(value) {
    if (value > 999999) {
      return `${this.toFormatNumber(Math.abs(value / 999999))}M`;
    }
    if (value > 999) {
      return `${this.toFormatNumber(Math.abs(value / 999))}k`;
    }
    return this.toFormatNumber(value);
  }

  render() {
    return (
      <div className="card">
        <span className="card__header">
          <p>{this.props.country.Country}</p>
          <p>{this.props.country.CountryCode}</p>
        </span>
        <p className="card__body">{this.toFormatNumber(this.props.country.TotalConfirmed)}</p>
        <div className="card__footer">
          <p>
            <img src={iconUp} alt="icon-up" />
            {this.toKFormat(this.props.country.NewConfirmed)}
          </p>
          <p>
            <img src={iconDead} alt="icon-up" />
            {this.toKFormat(this.props.country.TotalDeaths)}
          </p>
          <p>
            <img src={iconRecovered} alt="icon-up" />
            {this.toKFormat(this.props.country.TotalRecovered)}
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
