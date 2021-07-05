import React from 'react';
import './styles/Navbar.css';
import iconSearch from '../assets/images/icon-search.svg';
import iconModeLight from '../assets/images/icon-mode-light.svg';
import iconModeNight from '../assets/images/icon-mode-night.svg';
import iconFilter from '../assets/images/icon-filter.svg';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dark: false,
      icon: iconModeLight,
    };
  }

  handleMode = () => {
    this.setState({ dark: !this.state.dark });
    if (this.state.dark) this.setState({ icon: iconModeLight });
    else this.setState({ icon: iconModeNight });
  };

  handleChange = e => {
    // console.log(this.props);
    this.props.onChange(e.target.value);
  };

  render() {
    const query = this.props.query;
    if (this.state.dark) {
      document.documentElement.style.setProperty('--body-color', '#1f2d40');
      document.documentElement.style.setProperty('--text-color', '#ffffff');
      document.documentElement.style.setProperty('--card-color', '#394D6A');
      document.documentElement.style.setProperty('--border-color', '#000000');
    } else {
      document.documentElement.style.setProperty('--body-color', '#ffffff');
      document.documentElement.style.setProperty('--text-color', '#1f2d40');
      document.documentElement.style.setProperty('--card-color', '#f8f8f8');
      document.documentElement.style.setProperty('--border-color', '#dcdcdc');
    }
    return (
      <header className="navbar">
        <span>davidponc</span>
        <div className="navbar__search">
          <input type="text" placeholder="Search here..." value={query} onChange={this.handleChange} />
          <button>
            <img src={iconSearch} alt="icon-search" />
          </button>
        </div>
        <div className="navbar__options">
          <button onClick={this.handleMode}>
            <img src={this.state.icon} alt="icon-search" />
          </button>
        </div>
      </header>
    );
  }
}

export default Navbar;
