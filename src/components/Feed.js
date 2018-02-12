import Card from './Card';
import fetchInstas from '../actions';
import {connect} from 'react-redux';
var React = require('react');

class Feed extends React.Component {
  componentDidMount() {
    this.props.fetchInstas();
  }

  render() {
    return (
      <div>
        <Card/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    instas: state.instas.data
  }
}

export default connect(mapStateToProps, {fetchInstas})(Feed);
