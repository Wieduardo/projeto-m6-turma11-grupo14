import styled from "styled-components";

const Container = styled.div`

    width: 100%;
    max-width: 520px;
    height: 354px;
    background: #fff;
    border-radius: 8px;

    header {
        width: 100%;
        height: 56px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 16px 24px;

        & > h2 {
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;

            color: #212529;
        }

        & > img {
            width: 24px;
            height: 24px;
        }
    }

    div {
        padding: 24px;

        div {
            width: 100%;
            max-width: 466px;
            height: 239px;

            background: #E9ECEF;
            border-radius: 4px;

            display: flex;
            justify-content: center;
            align-items: center;

            & > img {
                width: 100%;
                width: 380px;
                height: 125px;
                
                border-radius: 4px;
            }
        }
    }
`;

export { Container };
