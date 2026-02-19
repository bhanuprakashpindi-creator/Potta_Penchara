import { useRouteError } from "react-router";
const Error = () =>{
    const err=useRouteError();
    console.log(err);
    return (
        <div>
                    <h1>Oppsss!!!</h1>
                    <h1>Something Went Wrong</h1>
                    <h1>{err.status} : {err.statusText}</h1>
        </div>
    )
}
export default Error;