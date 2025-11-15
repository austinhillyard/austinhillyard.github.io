import { NavLink } from "react-router";
import './Home.css';

export default function Home() {
    return (<>
    <div className="nav-buttons">
        <NavLink to="/tictactoe" className="nav-button">
            tic tac toe
        </NavLink>
        <NavLink to="/scavenger" className="nav-button">
            Moon's Rare Books Scavenger Hunt
        </NavLink>
    </div>
    </>)
}