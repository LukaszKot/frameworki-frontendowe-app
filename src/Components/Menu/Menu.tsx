import { FC } from "react";
import { Link } from "react-router-dom";

export const Menu: FC = props => {
    return (<div>
        <Link to="/" >Home</Link>
        <Link to="/profile" >Profile</Link>
    </div>)
}