import React, { Component } from 'react'
// import axios from 'axios'
import {connect} from 'react-redux';
import {deletePost} from '../actions/postActions';

class Post extends Component {
  // state = {
  //   post: null
  // }
  // componentDidMount(){
  //   let id = this.props.match.params.post_id;
  //   axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
  //     .then(res => {
  //       this.setState({
  //         post: res.data
  //       });
  //     });
  // }
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="container">
        {this.props.post ? (
          <div className="post">
            <h4 className="center">{this.props.post.title}</h4>
            <p>{this.props.post.body}</p>
            <button className='center' onClick={this.handleClick}>Delete</button>
          </div>
        ) : (
          <div className="center">Loading...</div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  const finded = state.posts.find(element => element.id == id)
  return {
    post: finded
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // deletePost: (id) => dispatch({type: 'DELETE_POST', id: id})
    deletePost: (id) => {dispatch(deletePost(id))}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post);