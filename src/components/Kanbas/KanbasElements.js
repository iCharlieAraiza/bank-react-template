import styled from 'styled-components'

export const KanbasWrap = styled.div`
    display: flex;
    width: 100%;
    max-width: 900px;
    justify-content: space-around;
    box-sizing: border-box;
    padding-top: 1rem;
    margin: 0 auto;

    @media screen and (max-width: 760px){
        margin: 0;
    }
`

export const Column = styled.div`
    max-width: 480px;
    width: 30%;

`

export const ColumnTitle = styled.h3`
    color: black;
`;

export const DroppableColumn = styled.div`
    width: 100%;
    background-color: gray;
    padding: 10px;
`

export const Card = styled.div`
    padding: 5px;
`;