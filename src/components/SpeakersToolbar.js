import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"
import { SpeakerFilterContext } from "../context/SpeakerFilterContext";

const SpeakersToolbar = () => {

  const {theme, setTheme } = useContext(ThemeContext);
  const {
    showSessions: disp, setShowSessions: setDisp,
    searchQuery, setSearchQuery,
    eventYear, setEventYear,
    EVENT_YEARS,
  } = useContext(SpeakerFilterContext);

  console.log(searchQuery);

  return (
    <div className="toolbar dark-theme-header">
      <div className="container">
        <div className="justify-content-between">
          <ul
            className="toolrow d-flex flex-column flex-lg-row">
            <li className="d-flex flex-column flex-md-row align-items-center">
              <b>Show Sessions &nbsp;&nbsp;</b>
              <label className="fav">
                <input 
                  type="checkbox"
                  checked={disp}
                  onChange={(event) => { setDisp(event.target.checked) }}
                />
                <span className="switch"></span>
              </label>
            </li>
            <li className="d-flex flex-column flex-md-row ml-sm-5 ml-0 align-items-center">
              <strong>Theme</strong>
              <label>
                <select
                  className="form-control theme" value={theme} onChange={(event) => { setTheme(event.target.value) }}>
                    <option value="light">Light Mode</option>
                    <option value="dark">Dark Mode</option>
                </select>
              </label>
            </li>
            <li>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search..."
                  onChange={(event) => { setSearchQuery(event.target.value) }} value={searchQuery} />
                <div className="input-group-append">
                  <button className="btn btn-secondary" type="button">
                    <i className="fa fa-search"></i>
                  </button>  
                </div>  
              </div>
            </li>
            <li className="d-flex flex-column flex-md-row">
              <strong>Year</strong>
              <label className="dropmenu">
                <select className="form-control" value={eventYear} 
                  onChange = {(event) => {
                    setEventYear(event.target.value)
                  }}>
                    {
                      EVENT_YEARS.map((year) => <option value={year} key={year}>{year}</option>)
                    }
                  </select>
              </label>

            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default SpeakersToolbar;