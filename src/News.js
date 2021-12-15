import React, { useContext, useState } from 'react'
import { NewsContext } from './Context'
import NewsArticle from './NewsArticle'
import './App.css';
import styled from 'styled-components'
import HeadLines from './HeadLines'

function News() {
    const { data } = useContext(NewsContext);
    const [searchTerm, setSearchTerm]= useState("");

    return (
        <div >
            <div className="header">
                <Header>
                    <HeaderLogo>NewsApp</HeaderLogo>
                    <SearchForm>
                        <input type='text' placeholder='Search' onChange={event=>{setSearchTerm(event.target.value)}} />
                    </SearchForm>
                </Header>
            </div>
            <div className="news-container">
                <div className="news-headlines">
                    <div className='headlines_header'>Top Headlines</div>
                    <div className="headlines_content">
                    {data ? data.articles.map(news => 
                    <HeadLines data={news.title}/>) : "Loading"}
                    </div>
                    
                </div>

                <div className="news">
                    {data ? data.articles.filter(news => 
                        {
                            if(searchTerm===""){
                                return news
                            }else if(news.title.toLowerCase().includes(searchTerm.toLowerCase())||news.description.toLowerCase().includes(searchTerm.toLowerCase())){
                                // console.log(news.title);
                                return news;
                            }
                        }).map((news)=>{
                            return <NewsArticle data={news} key={news.url}/>
                        }):"Loading..."}
                </div>
            </div>

        </div>
    )
}

export default News

const Headlines = styled.p`
    width:29%;
    padding:5px;
    margin:2px;
    background-color:rgb(151, 155, 158);

`


const Header = styled.div`
  position:fixed;
  display: flex;
  align-items:center;
  min-height: 60px;
  background-color: rgb(26, 24, 24);
  margin-bottom:20px;
  padding-bottom:10px;
  top:0;
  left:0;
  right:0;
  z-index:1;
`
const HeaderLogo = styled.div`
  font-size: 40px;
  color:white;
  margin: 0 20px;
`
const SearchForm = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:300px;
height:30px;

input{
    width:290px;
    height:29px;

}
input:focus{
    outline:none;
}

`