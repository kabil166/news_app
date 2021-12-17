import React from 'react'
import styled from 'styled-components'
function NewsArticle(props) {
    return (
        <Article>
            <ArticleTitle>{props.data.title}</ArticleTitle>
            <ArticleImg
                style={{
                    backgroundImage: `url(${props.data.urlToImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            ></ArticleImg>
            <ArticleDesc>{props.data.description}<a href={props.data.url}>Read more...</a></ArticleDesc>
            <ArticleAuthor><b>Author-</b><i>{props.data.author}</i></ArticleAuthor>
            <PublisherDetails>{props.data.publishedAt} {props.data.source.name}</PublisherDetails>



        </Article>

    )
}
export default NewsArticle
const Article = styled.div`
    max-width:450px;
    min-width:350px;
    height:auto;
    margin:10px;
    padding:0 3px;
    border-radius: .5rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

`
const ArticleTitle = styled.h1`
    font-size:16px;
    padding:5px;
    background-color:rgb(234, 238, 20);
    color:black;
    height:fit-content;
`
const ArticleImg = styled.div`
    width:445px;
    height:400px;
`
const ArticleAuthor = styled.p`
    color:black;

`
const ArticleDesc = styled.p`
    color:red;

`
const PublisherDetails = styled.p`
    color:rgb(76, 82, 81);
`