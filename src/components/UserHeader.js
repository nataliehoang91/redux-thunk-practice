import React from 'react';
import { fetchUser} from "../actions";
import {connect} from 'react-redux';
import _ from 'lodash';


class UserHeader extends React.Component{
     componentDidMount(){
         this.props.fetchUser(this.props.userId);
     }
    render(){
      
       const user= this.props.users.find((user)=>user.id===this.props.userId)
       if (!user){
           return null;
       }
       return <div className="header">{user.name}</div>
    
       
    }
}




const mapStateToProps=(state)=>{
    return {users:state.users }
}

const mapDispatchToProps = ({
    fetchUser
})
export default connect(mapStateToProps,mapDispatchToProps)(UserHeader);


// const fn = x => x * 10;

// const hoc = fn => y => fn(y + 2)

// const fn2 = hoc(fn)

// y => (x => x *10)(y + 2)

// y => (y+2) * 10

// fn2(1) = 