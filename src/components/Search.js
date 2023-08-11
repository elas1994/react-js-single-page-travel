import React from "react";
import "./css/Search.css";
import goldImg from "../assets/gold.png";

const Search = () => {
  return (
    <div name="book" className="search">
      <div className="container">
        <div className="left">
          <h3>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h3>
          <p>
            Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at Sandals Resorts. Oir luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curacao, feature unlimited gourmet dinning, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and paid certified
            scuba diving at most resorts. If you are planning a wedding, Sandals
            is the leader in Caribbean destination weddings and honeymoon
            packages.
          </p>

          <div className="search-col-2">
            <div className="box box1">
              <div className="goldImg">
                <img src={goldImg} alt="goldImg" />
              </div>

              <div className="goldImgText">
                <h3>WORLD'S LEADING</h3>
                <p>All-INCLUSIVE COMPANY 20 YEARS IN-A-ROW</p>
              </div>
            </div>

            <div className="box box2">
              <div>
                <h3>NO ONE INCLUDES MORE</h3>
                <p>CUSTOMERS ALWAYS IN THE FIRST PLACE</p>
              </div>
              <button>View Packages</button>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="promo">
            <h3 className="save">GET ADDITIONAL 7% OFF</h3>
            <p className="timer">12 HOURS LEFT!</p>
            <p className="offers">
              <a href="#">VIEW ALL CURRENT OFFERS</a>
            </p>
          </div>

          <form>
            <div className="input-wrap">
              <label>
                <p>Destination</p>
              </label>
              <select>
                <option value="1">Grande Antigua</option>
                <option value="1">Maldives</option>
                <option value="1">Emerald Bay</option>
                <option value="1">Barbados</option>
                <option value="1">Key West</option>
                <option value="1">Bora Bora</option>
                <option value="1">Mauritania</option>
              </select>
            </div>

            <div className="date">
              <div className="input-wrap">
                <label>Check-In</label>
                <input type="date" />
              </div>
              <div className="input-wrap">
                <label>Check-Out</label>
                <input type="date" />
              </div>
            </div>

            <button>Rates & Availabilities</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
