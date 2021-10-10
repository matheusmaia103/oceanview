import { createGlobalStyle } from "styled-components";
import {
  canada,
  peru,
  rio,
  italia,
  resort1,
  resort2,
  mergulho,
  trilha,
  cityTour,
  camelo,
  girl2,
  guy1,
  guy2,
} from "./images";

const GlobalStyles = createGlobalStyle`

    *{
        list-style: none;
        background-size: 100%;
        background-repeat: no-repeat;
    }

    header{
        width: 100%;
        height: 90vw;
        min-height: 660px;
        max-height: 700px;

        color: white!important;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        flex-wrap: wrap;
        color: black;  
        
        background-image:  linear-gradient(179deg,rgba(0,0,0,62) -5%,rgba(255,255,255,0) 90%),url(${peru});
        background-size: cover;
        background-position: center bottom;
        position: relative;
        overflow: hidden !important;

        text-align: center;

        button{
            backdrop-filter: blur(3px);
        }

    }

    article{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        //background-color: #272838;
    }

    .divider{
        width: 100% !important;
    }

    main{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        padding: 20px;
        padding-top: 35px;

        width: 100%;
        max-width: 1000px;

        overflow: hidden;


        .infos{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 15px;
        margin-top: 85px;
        text-align: center;
        
        width: 100%;
        height: 400px;
        
        overflow: hidden;

        transition: all 0.5s ease;

            .text{                
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 45%;

                padding: 10px;
                padding-bottom: 20px;
            }
            .img{
                width: 45%;
                background-image: url(${resort1});
                background-size: 150%;
                background-position: bottom left;
                transform: scaleX(-1);
                
                transition: 1s ease;
            }
            .toLeft{
                background-position: bottom left;
            }
            .toRight{
                background-position: bottom right;
            }

            h6{
                font-weight: 10px !important;
            }
        }

        .infos:nth-child(odd){
            flex-direction: row-reverse;
            background-position: bottom right;
            margin-top: 85px;
            margin-bottom: 100px;

            .img{
                background-image: url(${resort2});
            }
        }

        .examples{
            background-color: #0089e3;
            border-right: 20px solid #0089e3;

            width: 100%;

            padding-top: 40px;
            padding-bottom: 20px;
            padding-left: 20px;

            margin-top: 15px;
            margin-bottom: 15px;            

            //border-radius: 40px 0 0 40px;
            border-radius: 40px;
            
            color: white;

            //overflow: hidden;
            ul{
                display: -webkit-inline-box;
                overflow-x: scroll;

                width: 100%;
                padding:0;
                

                li{
                    margin: 5px;
                    margin-right: 40px;
                    margin-bottom: 10px;

                    width: 250px;
                    height: 400px;
                    background-color: darkgrey;

                    border-radius: 20px;

                    padding-left: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;

                    position: relative;

                    text-align: center;

                    cursor: pointer;

                    background-size: contain;
                    }

                    li:nth-child(1){
                        background-image:   linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 25%), url(${rio})
                    }

                    li:nth-child(2){
                        background-image:   linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 25%), url(${peru})
                    }

                    li:nth-child(3){
                        background-image:   linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 25%), url(${canada})
                    }

                    li:nth-child(4){
                    background-image:   linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 25%), url(${italia});
                    }

                    li{
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    }

                    li:last-child{
                        margin-right: 10px;
                    }


            }
        }

        .examples:nth-child(odd){
            background-color: #3fa341;
            border-right: 20px solid #3fa341;
            

                    li:nth-child(1){
                        background-image:  linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 25%), url(${trilha})
                    }

                    li:nth-child(2){
                        background-image:  linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 25%), url(${mergulho})
                    }

                    li:nth-child(3){
                        background-image:  linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 25%), url(${cityTour})
                    }

                    li:nth-child(4){
                    background-image:  linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 25%), url(${camelo});
                    }

        }

        #feedback{
            background-color: #00648A;
            width: 100%;

            padding-top: 40px;
            padding-bottom: 40px;
            padding-left: 20px;

            margin-top: 15px;
            margin-bottom: 15px;
            
            border-radius: 40px;
            border: 20px solid #00648A;

            color: white;

            overflow: hidden;


            
            ul{
                width: 100%;
                display: -webkit-inline-box;

                overflow-x: scroll;

                margin: 0;
                padding: 0;

               li{
                   text-align: center;
                   width: 200px;
                   height: 350px;

                   margin-right: 40px;
                    margin-bottom: 10px;
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

               
                    li:nth-child(1){
                        .img{
                        background-image: url(${guy2});
                        }
                    }
                    li:nth-child(2){
                        .img{
                        background-image: url(${guy1});
                        }
                    }
                    li:nth-child(3){
                        .img{
                        background-image: url(${girl2});
                        }
                    }
                    li:nth-child(4){
                        .img{
                        background-image: url(${guy2});
                        }
                    }
           }
        }
    }

    #faq{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;


    }

    @media screen and (max-width: 600px) {
        main {
            z-index: 5;
            background: white;
            border-radius: 25px;
            
            margin-top: -30px;
        }

    }
`;

export default GlobalStyles;
