const React = require('react');

class Spaceship extends React.Component {
  render(){
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <h3>Speed: {this.props.speed}</h3>
        <h2>Rockets: {this.props.hasRockets}</h2>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  name: "Millennium Falcon",
  speed: 500,
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship;
