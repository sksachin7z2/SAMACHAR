import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';


export class News extends Component {
   
      constructor(){
        // console.log("helo");
        super();
        this.state={
          articles:[],
          loading:false,
          page:1,
          
        }
      }
      async componentDidMount(){
            
          let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b52ac02e639d49c9836f1f40154b16b2&page=1&pageSize=${this.props.pageSize}`;
          this.setState({loading:true});
          let data= await fetch(url);
          let parsedData= await data.json();
            this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
      }
      handleprevclick=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b52ac02e639d49c9836f1f40154b16b2&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data= await fetch(url);
        let parsedData= await data.json();
          this.setState({
            articles:parsedData.articles,
            page:this.state.page -1,
            loading:false
          })
          
      }
      handlenextclick=async()=>{
        
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b52ac02e639d49c9836f1f40154b16b2&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data= await fetch(url);
        let parsedData= await data.json();
          console.log(parsedData);
          this.setState({articles:parsedData.articles})

          this.setState({
            page:this.state.page +1,
            loading:false
          })
      }
    render() {
        return (
            <div className="container my-3">
               <h2 className="text-center">NewsMonkey - Top Headlines</h2>
           {this.state.loading && <Spinner/>}
               <div className="row">
               {!this.state.loading && this.state.articles.map((element)=>{
                   return  <div className="col-md-4 my-3"  key={element.url}>
                   <Newsitem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                   </div>
               })}
              
                </div>

               {!this.state.loading &&<div className="container d-flex justify-content-between">
                <button type="button" disabled={this.state.page<=1} onClick={this.handleprevclick} className="btn btn-dark">&larr;Previous</button>
                <button type="button" disabled={this.state.page +1 >Math.ceil(this.state.totalResults/20)?true:false} onClick={this.handlenextclick} className="btn btn-dark">Next&rarr;</button>
                </div>}
                </div>
               
              
        )
    }
}

export default News
