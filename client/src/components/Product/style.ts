import styled from "styled-components";

const Container = styled.div`

    width: 100%;
    max-width: 312px;
    margin: 10px 20px;

    & > img  {
        width: 312px;
        height: 152px;
        background: var(--grey7);
        border: 2px solid var(--grey7);
    }

    & > h4 {
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: var(--grey1);
      
        padding: 10px 0 15px 0;
    }

    & > p {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: var(--grey2);

        padding-bottom: 10px;
    }

    & > div {

        display: flex;
        flex-direction: row;
        align-items: center;

        padding-bottom: 10px;

        img {
            width: 32px;
            height: 32px;
            border-radius: 150px;

            background-color: var(--brand2);
        }

        h6 {
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            color: var(--grey2);
            margin-left: 8px;
        }

        div {

            display: flex;
            flex-direction: row;
            justify-content: space-between;

            width: 100%;
            max-width: 113px;

            p {
                background: var(--brand4);
                border-radius: 4px;
                padding: 4px 8px;
                width: 51px;
                height: 32px;

                font-weight: 500;
                font-size: 14px;
                line-height: 24px;
                color: var(--brand1);
            }
        }

        span {
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            color: var(--grey1);
        }
    }

    .divKmYearPrice {
        justify-content: space-between;
    }
`

export { Container }
