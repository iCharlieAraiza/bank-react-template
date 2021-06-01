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
    max-width: 500px;
    width: 30%;

`

export const ColumnTitle = styled.h3`
    color: #3f3f3f;
    margin-bottom: 8px;
    font-size: 16px;
`;

export const DroppableColumn = styled.div`
    width: 100%;
    background-color: #ebecf0;
    padding: 10px;
`

export const Card = styled.div`
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgb(9 30 66 / 25%);
    cursor: pointer;
    font-size: 14px;
    padding: 10px;
    margin: 10px 0;

`;

export const InputWrapp = styled.div`

`;

export const Button = styled.button`

`;


export const Container = styled.div`
    @media screen and (min-width: 760px){
        margin: 0 auto;
        max-width: 980px;
    }

`