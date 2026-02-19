import React from "react";
class UserClass extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            count:0,
    };
    console.log("This is Child Constructor");
    }

    componentDidMount()
    {
           console.log("This is Child Constructor did Mount");

    }

    render(){
        const {location}=this.props;
        const {count}=this.state;
            console.log("This is Child Render");

        return(
            <div className="user-card">
                <h1>Name: Bhanu Prakash</h1>
                <h2>Location: {location}</h2>
                <h3>Count: {count}</h3>
                <button onClick={()=>{

                    this.setState({
                        count: this.state.count + 1,
                    });

                }}>Count +++</button>
              
            </div>
        )
    }
};
export default UserClass;