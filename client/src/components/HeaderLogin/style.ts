import styled from "styled-components"


const Container = styled.header`

    width: 100%;
    height: 80px;

    padding: 0 60px;

    background-color: #FDFDFD;
    border-bottom: 2px solid #DEE2E6;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > img {
        width: 100%;
        max-width: 153.02px;
    }

    .menuDefault {
    
        width: 100%;
        max-width: 592px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        & > nav {

            display: flex;
            align-items: center;

            p {
                font-weight: 600;
                font-size: 16px;
                color: #495057;

                padding: 0 18px;

                cursor: pointer;

                :hover {
                    color: #000;
                    text-decoration: underline;
                }
            }
        }

        & > hr {
            border: none;
            width: 2px;
            background-color: #DEE2E6;
        }

        & > div {

            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            p {
                font-weight: 600;
                font-size: 16px;
                color: #4529E6;

                padding-right: 30px;
                cursor: pointer;

                :hover {
                    text-decoration: underline;
                }
            }
        }
    }

    .menuIcon {

        display: none;
        margin: auto 0;

        z-index: 5px;

        & > nav {

            width: 100%;
            position: fixed;

            left: 0;
            top: 8.5%;
            
            background-color: #FDFDFD;
            filter: drop-shadow(0px 60px 40px rgba(0, 0, 0, 0.09));

            p {
                width: 100%;
                padding: 25px 15px;
            }

            & > div {

                padding: 0 15px 20px 15px;

                p {
                    padding-left: 0;
                }

                button {
                    width: 100%;
                    max-width: unset;
                }
            }
        }
    }

    @media (max-width: 1024px) {

        .menuDefault {
            display: none;
        }

        .menuIcon {
            display: block;
        }
    }

    @media (max-width: 375px) {

        padding: 0 20px;
    }
`

export { Container }
