import { Link } from "react-router-dom";
export function NavigationComponent({ name, age }) {
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>Your age is {age}.</p>

            <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/react/home" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/react/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/react/contact">Contact</Link>
                    </li>
                </ul>
        </div>
    );
}


