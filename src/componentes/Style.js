import style from 'styled-components'

export const BtnDefaultIcons = style.button`
    display: flex;
    align-items: center;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    border: 0px;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    transition: 0.4s;
    cursor: pointer;
    
    &:hover{
        background-color: #ccc;
    }

    .center{
        text-align: center;
        width: 100%
    }
`

export const BtnDefault = style(BtnDefaultIcons)`
    background-color: #7d2ae8;
    color: #fff;
    display: inline;

    &:hover{
        background-color: #4e129c;
    }

        a{
            text-decoration: none;
            color: #fff;
        }
`