import React, { Component } from 'react';
import Saved from './Saved';
import Search from './Search';
import Results from './Results';
import API from '../utils/api';

class Main extends Component {
  state = {
    topic: '',
    startYear: '',
    endYear: '',
    articles: [],
    saved: []
  };

  componentDidMount() {
    this.getSavedArticles();
  }

  getSavedArticles = () => {
    API.getArticle().then(res => {
      this.setState({ saved: res.data });
    });
  };

  renderArticles = () => {
    return this.state.articles.map(article => (
      <Results
        _id={article._id}
        key={article._id}
        title={article.headline.main}
        date={article.pub_date}
        url={article.web_url}
        handleSaveButton={this.handleSaveButton}
        getSavedArticles={this.getSavedArticles}
      />
    ));
  };

  renderSaved = () => {
    return this.state.saved.map(save => (
      <Saved
        _id={save._id}
        key={save._id}
        title={save.title}
        date={save.date}
        url={save.url}
        handleDeleteButton={this.handleDeleteButton}
        getSavedArticles={this.getSavedArticles}
      />
    ));
  };

  handleTopicChange = event => {
    this.setState({ topic: event.target.value });
  };

  handleStartYearChange = event => {
    this.setState({ startYear: event.target.value });
  };

  handleEndYearChange = event => {
    this.setState({ endYear: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log('Fetching Articles');
    console.log('this.state.topic: ', this.state.topic);
    console.log('this.state.startYear: ', this.state.startYear);
    console.log('this.state.endYear: ', this.state.endYear);
    API.searchNYT(
      this.state.topic,
      this.state.startYear,
      this.state.endYear
    ).then(res => {
      this.setState({ articles: res.data.response.docs });
      console.log('this.state.articles: ', this.state.articles);
    });
  };

  handleSaveButton = id => {
    const findArticleById = this.state.articles.find(el => el._id === id);
    console.log('findArticleById: ', findArticleById);
    const newSave = {
      title: findArticleById.headline.main,
      date: findArticleById.pub_date,
      url: findArticleById.web_url
    };
    API.saveArticle(newSave).then(this.getSavedArticles());
  };

  handleDeleteButton = id => {
    API.deleteArticle(id).then(this.getSavedArticles());
  };

  render() {
    return (
      <div className="main-container">
        <div className="container">
          {/* Jumbotron */}
          <div className="jumbotron">
            <h1 className="text-center">
              <strong>New York Times Article Search</strong>
            </h1>
            <h2 className="text-center">
              Search for and save articles of interest.
            </h2>
          </div>
          {/* Search Form and Results Section */}
          <Search
            handleTopicChange={this.handleTopicChange}
            handleStartYearChange={this.handleStartYearChange}
            handleEndYearChange={this.handleEndYearChange}
            handleFormSubmit={this.handleFormSubmit}
            renderArticles={this.renderArticles}
          />
          {/* Saved Articles Section */}
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      <strong>
                        <i className="fa fa-download" aria-hidden="true" />{' '}
                        Saved Articles
                      </strong>
                    </h3>
                  </div>
                  <div className="panel-body">
                    <ul className="list-group">{this.renderSaved()}</ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <hr />
            <p className="pull-right">
              <i className="fa fa-github" aria-hidden="true" />
              Built with React.js
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Main;
