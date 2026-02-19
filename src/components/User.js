import { useState } from "react";
const User =({name})=>
{
    const [Count]=useState(0);
    const [Count2]=useState(2);
    return <div className="user-card">
        <h1>Name: {name}</h1>
        <h2>Location: JRG</h2>
        <h3>Count:{Count}</h3>
        <h3>Count:{Count2}</h3>
    </div>
}
export default User;
