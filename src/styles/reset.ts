import { createGlobalStyle } from "styled-components";

export const Reset= createGlobalStyle`
    :root {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 1.6rem;
        border: none;
        color: ${({ theme }) => theme.colors.dark};
        font-family: sans-serif;
    }

    button {
        background: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }


    .sronly{
        position: absolute;
        width: -0.1rem;
        height: -0.1rem;
        border-width: 0;
        overflow: hidden;
        color: transparent;
        clip: rect(0, 0, 0, 0);
    }

    .inputError {
        color: ${({ theme }) => theme.colors.light};
        font-size: 1.2rem;
        display: block;
        position: absolute;
        margin-top: 0.6rem;
        text-shadow: 1px 1px 1px #0008;
    }

    .loading{
        font-weight: 700;
        font-size: 1.6rem;
        color: lightgray;
        display: grid;
        place-content: center;
        position: absolute;
        inset: 0;
    }

    @media (min-width: 768px) {
        .loading{
            font-size: 2rem;
        }
    }
`;