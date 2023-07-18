import React from "react";

const SpeakersToolbar = ({disp, setDisp, theme, setTheme}) => {

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
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
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