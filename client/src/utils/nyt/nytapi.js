import axios from "axios";
// import key from "./key";
// console.log(key)

const apiKey = "8dff5b5313a14930b243b472fde5da4b";

export default {
  // Gets saved articles
  getSaved: function() {
    return axios.get("/api/articles/");
  },
  // Deletes saved article with the given id
  deleteSavedArticle: function(articleData) {
    return axios.delete(`/api/articles/${articleData._id}`);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles/", articleData);
  },

  getArticles: function(title, startYear, endYear) {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + title + "&be gin_date=" + startYear + "0101&end_date=" + endYear + "1231");
  }
};