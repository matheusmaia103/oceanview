import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        list-style: none;
    }

    header{
        width: 100%;
        height: 500px;

        background-color: darkgrey;
        color: white;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        flex-wrap: wrap;
        color: black;        
    }

    article{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        //background-color: #272838;
    }

    main{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        padding: 20px;

        width: 100%;
        max-width: 800px;
        background-color: white;

        .infos{
        display: flex;
        flex-direction: row;
        margin: 15px;
        text-align: center;
        
        width: 100%;
        
        border: 1px solid lightgray;
        border-radius: 10px;
        overflow: hidden;

        transition: all 0.5s ease;

            .text{
                width: 55%;

                padding: 10px;
                padding-bottom: 20px;
            }
            .img{
                width: 45%;
                background-color: darkgray;
            }
        }

        .infos:nth-child(odd){
            flex-direction: row-reverse;
        }

        .examples{
            width: 100%;

            padding-top: 40px;
            padding-bottom: 20px;
            padding-left: 30px;

            margin-top: 15px;
            margin-bottom: 15px;            

            background-color: #0193C1;
            //border-radius: 40px 0 0 40px;

            color: white;

            //overflow: hidden;
            ul{
                display: -webkit-inline-box;
                overflow-x: scroll;

                width: 100%;
                padding:0;
                

                li{
                margin: 5px;
                margin-right: 20px;
                width: 200px;
                height: 300px;
                background-color: darkgrey;

                padding-left: 5px;
                display: flex;
                justify-content: flex-start;
                align-items: flex-end;

                text-align: center;

                cursor: pointer;
                }

                li:nth-child(even){
                    background-color: #3a3a3a;
                }
                li:nth-child(odd){
                    background-color: #5e5d5d;
                }
            }
        }

        .examples:nth-child(odd){
            background-color: darkgreen;
        }

        #feedback{
            background-color: #00648A;
            width: 100%;

            padding-top: 40px;
            padding-bottom: 20px;
            padding-left: 30px;

            margin-top: 15px;
            margin-bottom: 15px; 

            color: white;

           ul{
                display: flex;
                justify-content: center;
                align-items: center;

                margin: 0;
                padding: 0;

               li{
                   text-align: center;
                   width: 200px;
                   height: 300px;

                   margin-right: 10px;
                   margin-top: 20px;
                   padding: 20px;

                   border: 1px solid darkgray;
                   border-radius: 10px;

                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                    .img{
                        width: 100px;
                        height: 100px;
                        border-radius: 100%;


                        background-color: darkgray;
                    }
               }
           }
        }
    }
`;

export default GlobalStyles;
