import React from 'react'
import styled from 'styled-components'

function HeadLines({data}) {
    return (
        <div>
            <Title>{'>>'}{data}</Title>
        </div>
    )
}

export default HeadLines


const Title = styled.p`
    padding:2px;
    margin:2px 0;
    font-size: 16px;
    font-weight:600;
    margin: 10px 0;
`