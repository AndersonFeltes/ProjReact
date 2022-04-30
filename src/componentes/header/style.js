import style from 'styled-components';

export const AreaHeader = style.div`
    height: 100px;
    background-image: linear-gradient(to right, #fe5d26, #370d44);
    color: #fff;

    .container{
        display: flex;
        align-items: center;
        padding: 5px 20px;
    }

        .logo{
            flex: 1;

            img{
                width: 80px;
            }
        }

        nav{
            ul{
                display:flex;
            }
                li{
                    list-style: none;
                    margin-left: 20px;
                    cursor: pointer;

                    a{
                        text-decoration: none;
                        color: #fff;

                        &:hover{
                            color: #f5bb00;
                        }
                    }
                }
        }
`