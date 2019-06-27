import React from 'react';
import { fetchPost, fetchPostsAndUsers } from "../actions";
import {connect} from 'react-redux';
import UserHeader from './UserHeader'

class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPostsAndUsers();
    }

    renderList=()=>{
      if (!this.props.posts){
        return <div></div>
      }
      else{
        return this.props.posts.map(item => {
          return (
            
            <div className="item" key={item.id}>
              <i className="large middle aligned icon user" />
              <div className="content">
                <div className="description">
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </div>
                <UserHeader userId={item.userId}/>
              </div>
            </div>
          );
        });
    }}
    render(){
        console.log(this.props.posts)
        return (
          <div className="ui divided relaxed list">
            
            {this.renderList()}
          </div>
        );
    }
}

const mapStateToProps = (state)=> {
    return {posts: state.posts}
};

export default connect(mapStateToProps, {fetchPostsAndUsers})(PostList);