import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faStackExchange } from "@fortawesome/free-brands-svg-icons";
import { faCalendarPlus } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBox = () => {
    return (
        <div className='searchbox px-4 py-4 bg-dark'>
            <div className="row container">
                <div className="col-3 dd-search">
                    <div className="dd-search__title py-2"><FontAwesomeIcon icon={faUser} />&nbsp; Role</div>
                    <div class="dropdown">
                        <button class="btn btn-dd-search dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Role
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Frontend</a></li>
                            <li><a class="dropdown-item" href="#">Backend</a></li>
                            <li><a class="dropdown-item" href="#">Analytics</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-3 dd-search">
                    <div className="dd-search__title py-2"><FontAwesomeIcon icon={faLocationDot} />&nbsp; Location</div>
                    <div class="dropdown">
                        <button class="btn btn-dd-search dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Location
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">India</a></li>
                            <li><a class="dropdown-item" href="#">US</a></li>
                            <li><a class="dropdown-item" href="#">UK</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-3 dd-search">
                    <div className="dd-search__title py-2"><FontAwesomeIcon icon={faStackExchange} />&nbsp; Technology</div>
                    <div class="dropdown">
                        <button class="btn btn-dd-search dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Technology
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">JavaScript</a></li>
                            <li><a class="dropdown-item" href="#">Python</a></li>
                            <li><a class="dropdown-item" href="#">SQL</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-3 dd-search">
                    <div className="dd-search__title py-2"><FontAwesomeIcon icon={faCalendarPlus} />&nbsp; Experience Level</div>
                    <div class="dropdown">
                        <button class="btn btn-dd-search dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Experience Level
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">0</a></li>
                            <li><a class="dropdown-item" href="#">2</a></li>
                            <li><a class="dropdown-item" href="#">4</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row container mt-5 mb-2">
                <div className="btn btn-search p-2">Search</div>
            </div>
        </div>
    );
};

export default SearchBox;