import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    body{
        background-color: #ffffff;
    }

    *{
        box-sizing: border-box;
        font-family: 'Poppins'
    }

    nav{
        background-color: black;
        color: white;

        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        position: fixed;
        top: 0;
        right:0;
        left: 0;

        z-index: 10;
        
        .hamburguer{
            display: none;
        }
        
        #logo{
            width: 30%;
            display: flex;
            justify-content: flex-start;
            align-items: center;

        }

        ul{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 60%;

            margin: 0;
            padding: 0;
            li{
                max-width: 30px;
                color: white !important;
            }
        }
    }

    #drawer{
        
        .MuiPaper-root{
            background-color: #000000b3;
            color: white;
            
        }

        .MuiIconButton-colorInherit {
            color: inherit;
            transform: rotate(
            90deg);
        }

        #close{
            .MuiSvgIcon-root{
                transform: rotateX(180) !important;
            }
        }
    }

    footer{
        background-color: black;
        color: #e1e1e1;
        font-size: 14px;

        width: 100%;
        min-height: 500px;

        overflow: hidden;

        #mail{
            
            display: flex;
            align-items: center;
            justify-content: center;

            text-align: center;

            .input{
                background-color: white;
                color: black;

                display: inline-grid;

                transform: scale(0.8)
            }

        }

        #social{
            display: flex;
            align-items: center;
            justify-content: center;

            text-align: center;

            #btns{
                display: flex;
                align-items: center;
                justify-content: space-evenly;

            }
        }

        #imgDiv{
            width: 100%;

            height:200px;

            display: flex;
            align-items: flex-end;
            justify-content: center;
            
            img{
                max-width: 150px;
            }
            
        }
    }

    
    @media screen and (max-width: 600px) {
        
        nav{
             ul{
                display: none;
            }

            #hamburguer{
                display: inline;
            }
        }
    
    }
    
    @media screen and (min-width: 600px) {
        
        nav{
             ul{
                display: flex;
            }

            #hamburguer{
                display: none !important;
            }
        }
    
    }


`;

export default GlobalStyle;
