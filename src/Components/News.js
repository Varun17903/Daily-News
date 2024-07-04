// -----------------------------------------------the first way to make the code using next and previous buttton------------------------------------
// import React, { Component } from 'react';
// import NewsItem from './NewsItem';
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'


// export class News extends Component {
//   static defaultProps = {
//     country: 'in',
//     pageSize: 8,
//     category: 'general'
//   }

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string
//   }
//   capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//     }

//     constructor(props) {
//         super(props);
//         console.log("Hii This is a news which you want to see.");
//         this.state = {
//             articles: [],
//             loading: false,
//             page: 1
//         };
//         document.title=`${this.capitalizeFirstLetter(this.props.category)} -Daily News`;
//     }
    

//     async updateNews(){
//          this.setState({ loading: true }); 

//         console.log("The latest news you always found here only");
//         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=08af7bc070e04f8d83c630db6db3a805&page=${this.state.page}&pagesize=${this.props.pageSize}`;
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         console.log(parsedData);
//         this.setState({ articles: parsedData.articles,
//           totalResults:parsedData.totalResults,
//           loading:false
//         });
//     }

//     async componentDidMount() {
//         this.setState({ loading: true }); 

//         console.log("The latest news you always found here only");
//         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=08af7bc070e04f8d83c630db6db3a805&page=1&pagesize=${this.props.pageSize}`;
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         console.log(parsedData);
//         this.setState({ articles: parsedData.articles,
//           totalResults:parsedData.totalResults,
//           loading:false
//         });
//     }

//     handlepreclick = async () => {
//         console.log("Previous page");
//         // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=08af7bc070e04f8d83c630db6db3a805&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
//         // let data = await fetch(url);
//         // this.setState({loading:true});
//         // let parsedData = await data.json();
//         // console.log(parsedData);
//         // this.setState({
//         //     page: this.state.page - 1,
//         //     articles: parsedData.articles,
//         //     loading:false
//         // });
//         this.setState({page: this.state.page - 1});
//         this.updateNews();
//     }

//     handlenextclick = async () => {
//         console.log("Next page");
//         // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
//         //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=08af7bc070e04f8d83c630db6db3a805&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//         // let data = await fetch(url);
//         // this.setState({loading:true});
//         // let parsedData = await data.json();
//         // console.log(parsedData);
//         // this.setState({
//         //     page: this.state.page + 1,
//         //     articles: parsedData.articles,
//         //     loading:false
//         // });
//         this.setState({page: this.state.page + 1});
//         this.updateNews()
        
        
//     }

//     render() {
//         return (
//             <div>
//                 <div className="container">
//                     {/* This is a news component */}
//                     <div className="text-center" style={{margin:"30px 0px"}}><h2>Top Newsline - {this.capitalizeFirstLetter(this.props.category)}</h2></div>
//                     {this.state.loading && <Spinner />}
//                     <div className="row mx-3 my-3">
//                         {!this.state.loading && this.state.articles.map((element) => {
//                             return <div className="col-md-4" key={element.url}>
//                                 <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                             </div>
//                         })}
//                     </div>
//                 </div>
//                 <div className="container">
//                     <div className="d-flex justify-content-between">
//                         <button disabled={this.state.page <= 1} type="button" className="btn btn-outline-dark my-3" onClick={this.handlepreclick}>&larr; Previous</button>
//                         <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-outline-dark my-3" onClick={this.handlenextclick}>Next &rarr;</button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default News;


import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    console.log("Hi, this is the news you want to see.");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - Daily News`;
  }

  async updateNews() {
    this.setState({ loading: true });

    console.log("The latest news you always find here only");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=08af7bc070e04f8d83c630db6db3a805&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 }, async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=08af7bc070e04f8d83c630db6db3a805&page=${this.state.page}&pagesize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
      });
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="text-center" style={{ margin: "30px 0px" }}>
            <h2>Top Newsline - {this.capitalizeFirstLetter(this.props.category)}</h2>
          </div>
          {this.state.loading && <Spinner />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="row mx-3 my-3">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4  my-1" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={element.description ? element.description : ""}
                      imageurl={element.urlToImage}
                      newsurl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default News;
