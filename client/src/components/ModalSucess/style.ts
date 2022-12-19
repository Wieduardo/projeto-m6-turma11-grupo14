import styled from "styled-components";

const Container = styled.div`

    width: 100%;
    max-width: 520px;
    height: 229px;
    
    background: #FFFFFF;
    border-radius: 8px;

    header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        height: 56px;
        padding: 16px 24px;

        p {
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            color: #212529;
            font-weight: bold;
        }

        img {
            cursor: pointer;
            padding: 5px;

            :hover {
                border-radius: 8px;
                border-color: rgba(0, 0, 0, 0.15);
                box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
                color: rgba(0, 0, 0, 0.65);
            }
        }
    }

    div {

        padding: 35px 20px 20px 20px;
        text-align: start;

        h5 {
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            color: #212529;
            
            padding-bottom: 30px;
            font-weight: bold;
        }

        p {
            font-weight: 400;
            font-size: 16px;
            line-height: 28px;
            color: #495057;
            
            width: 100%;
            max-width: 462px;
        }
    }

    @media (max-width: 768px) {
        
        div {

            h5, p {
                font-size: 14px;
            }
        }
    }

    @media (max-width: 375px) {

        div {

            padding-top: 20px;

            h5 {
                padding-bottom: 20px;
            }
        }
    }
`

export { Container }
