import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <!-- Jumbotron for Title --> */}
        <div className="jumbotron">
          <h1 className="text-center">
            <strong>
              <i className="fa fa-newspaper-o" /> New York Times Search
            </strong>
          </h1>
        </div>

        {/* <!-- Row for Searching New York Times --> */}
        <div className="row">
          <div className="col-sm-12">
            <br />
            {/* <!-- First panel is for handling the search parameters --> */}
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <strong>
                    <i className="fa  fa-list-alt" /> Search Parameters
                  </strong>
                </h3>
              </div>
              <div className="panel-body">
                {/* <!-- Here we create an HTML Form for handling the inputs--> */}
                <form>
                  {/* <!-- Here we create the text box for capturing the search term--> */}
                  <div className="form-group">
                    <label htmlFor="search">Topic:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="search-term"
                    />
                  </div>

                  {/* <!-- Here we capture the number of records that the user wants to retrieve  --> */}
                  <div className="form-group">
                    <label htmlFor="pwd">Number of Records to Retrieve:</label>
                    <select className="form-control" id="article-count">
                      <option value="1">1</option>
                      {/* <!-- Setting the option for 5 as default --> */}
                      <option value="5" selected>
                        5
                      </option>
                      <option value="10">10</option>
                    </select>
                  </div>

                  {/* <!-- Here we capture the Start Year Parameter--> */}
                  <div className="form-group">
                    <label htmlFor="start-year">Start Year (Optional):</label>
                    <input
                      type="text"
                      className="form-control"
                      id="start-year"
                    />
                  </div>

                  {/* <!-- Here we capture the End Year Parameter --> */}
                  <div className="form-group">
                    <label for="end-year">End Year (Optional):</label>
                    <input type="text" className="form-control" id="end-year" />
                  </div>

                  {/* <!-- Here we have our final submit button --> */}
                  <button
                    type="submit"
                    className="btn btn-default"
                    id="run-search"
                  >
                    <i className="fa fa-search" /> Search
                  </button>
                  <button
                    type="button"
                    className="btn btn-default"
                    id="clear-all"
                  >
                    <i className="fa fa-trash" /> Clear Results
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- This row will handle all of the retrieved articles --> */}
        <div className="row">
          <div className="col-sm-12">
            <br />

            {/* <!-- This panel will initially be made up of a panel and wells for each of the articles retrieved --> */}
            <div className="panel panel-primary">
              {/* <!-- Panel Heading for the retrieved articles box --> */}
              <div className="panel-heading">
                <h3 className="panel-title">
                  <strong>
                    <i className="fa fa-table" /> Top Articles
                  </strong>
                </h3>
              </div>

              {/* <!-- This main panel will hold each of the resulting articles --> */}
              <div className="panel-body" id="well-section" />
            </div>
          </div>
        </div>

        {/* <!-- Footer Region --> */}
        <div className="row">
          <div className="col-sm-12">
            {/* <!-- Line Break followed by closing --> */}
            <hr />
            <h5 className="text-center">
              <small>
                <i className="fa fa-heart" />
              </small>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
