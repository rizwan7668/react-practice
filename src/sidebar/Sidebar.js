import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark w-75 h-100">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none">
                    <svg className="bi pe-none me-2" width="40" height="32"><use/></svg>
                    <span className="fs-4">Sidebar</span>
                </a>
                <hr className="text-light"/>
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <Link to="/" href="#" className="nav-link link-light" aria-current="page">
                                <svg className="bi pe-none me-2" width="16" height="16"><use /></svg>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard" className="nav-link link-light">
                                <svg className="bi pe-none me-2" width="16" height="16"><use/></svg>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="nav-link link-light">
                                <svg className="bi pe-none me-2" width="16" height="16"><use  /></svg>
                                Orders
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link link-light">
                                <svg className="bi pe-none me-2" width="16" height="16"><use /></svg>
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link link-light">
                                <svg className="bi pe-none me-2" width="16" height="16"><use /></svg>
                                Customers
                            </a>
                        </li>
                    </ul>
                <hr/>
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center link-light text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>mdo</strong>
                    </a>
                    <ul className="dropdown-menu text-small shadow">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar;