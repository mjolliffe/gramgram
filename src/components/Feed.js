import Card from './Card';
import Instafeed from 'react-instafeed';
var React = require('react');

class Feed extends React.Component {
  render() {
    const instafeedTarget = 'instafeed';


    return (
        <div id={instafeedTarget}>
          <Instafeed
            limit='5'
            ref='instafeed'
            resolution='standard_resolution'
            sortBy='most-recent'
            target={instafeedTarget}
            template=''
            userId='22107223'
            clientId='f0d8c10cf88844ca9056cf3311dc12ad'
            accessToken='
22107223.f0d8c10.b8b0481c066b4e22ab3c371e08b00bea'
          />
        </div>
      )
  }
}




export default Feed;
