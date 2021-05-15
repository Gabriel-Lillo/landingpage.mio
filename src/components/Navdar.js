export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/#">Start Bootstrap</a>
                <span class="navbar-text">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="/#" tabindex="-1" aria-disabled="true">Contact</a>
                            </li>
                        </ul>
                    </div>
                </span>
            </div>
        </nav>
    )
}