import React from 'react';
import { fetchPost } from "../actions";
import {connect} from 'react-redux';

class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPost();
    }
    render(){
        console.log(this.props.posts)
        return (
          <div>
            <h3>Post List</h3>
          </div>
        );
    }
}

const mapStateToProps = (state)=> {
    return {posts: state.posts}
};

export default connect(mapStateToProps, {fetchPost})(PostList);