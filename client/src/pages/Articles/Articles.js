import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import Group from "../../components/Group";
import Div from "../../components/Div";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Articles extends Component {
  // Setting our component's initial state
  state = {
    articles: [],
    savedArticles: [],
    topic: "",
    startyear: "",
    endyear: "",

  };

  // When the component mounts, load all articles and save them to this.state.articles
  componentDidMount() {
    this.loadArticles();
  }

  // Loads all articles  and sets them to this.state.articles
  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data, title: "", url: "", date: Date.now() })
      )
      .catch(err => console.log(err));
  };

  // Deletes an article from the database with a given id, then reloads articles from the db
  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveArticle method to save the article data
  // Then reload articles from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic) {
      console.log("I'm scraping the NYT.");
      // console.log(this.state.topic);
      // console.log(this.state.startyear);
      // console.log(this.state.endyear);
      API.getArticles({
        title: this.state.topic,
        startyear: this.state.startyear,
        endyear: this.state.endyear
      })
        .then(res => {
            const resultingArticles = res.data.response.docs.filter(object => object.headline.print_headline)
            const topFiveArticles = resultingArticles.splice(0,5).map(object => JSON.stringify(object))
            this.setState({"articles": topFiveArticles})})
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>

        <Jumbotron>
          <h1>New York Times Article Scrubber</h1>
          <h3>Search for and annotate articles of interest!</h3>
        </Jumbotron>
        <Jumbotron>
          <h2>Search</h2>
        </Jumbotron>
        <Group>
          <form>
            <Input
              value={this.state.topic}
              onChange={this.handleInputChange}
              name="topic"
              placeholder="Topic (required)"
            />
            <Input
              value={this.state.startyear}
              onChange={this.handleInputChange}
              name="startyear"
              placeholder="Start Year"
            />
            <Input
              value={this.state.endyear}
              onChange={this.handleInputChange}
              name="endyear"
              placeholder="End Year"
            />
            <FormBtn
              disabled={!(this.state.startyear && this.state.endyear && this.state.topic)}
              onClick={this.handleFormSubmit}
            >
              Search
            </FormBtn>
          </form>
        </Group>

        <Jumbotron>
          <h1>Results</h1>
        </Jumbotron>
        <Group>
          {this.state.articles.length ? (
            <List>
              {this.state.articles.map(article => {
                return (
                  <ListItem key={article._id}>
                    <a href={"/articles/" + article._id}>
                      <strong>
                        {article.title} by {article.url}
                      </strong>
                    </a>
                    <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                  </ListItem>
                );
              })}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
          </Group>

          <Jumbotron>
            <h1>Saved Articles</h1>
          </Jumbotron>
          <Group>
          {this.state.articles.length ? (
            <List>
              {this.state.articles.map(article => {
                return (
                  <ListItem key={article._id}>
                    <a href={"/articles/" + article._id}>
                      <strong>
                        {article.title} by {article.url}
                      </strong>
                    </a>
                    <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                  </ListItem>
                );
              })}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Group>

      </Container>
    );
  }
}

export default Articles;
