import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

export default function LargeButtonSecondary(props) {

    const { title, route, completed } = props;
    const history = useHistory();

    const nextPage = (e) => {
        e.preventDefault();
        history.push(`/${route}`)
    }

    if (completed === "true") {
        localStorage.setItem('completed', true);
    }
    else {
        localStorage.setItem('completed', false);
    }

    return (
        <Secondary onClick={nextPage}>{title}</Secondary>
    )
}

const Secondary = styled.button`
    width: 100%;
    height: 5.2rem;
    border: 1px solid #000000;
    border-radius: 0.6rem;
    background: #111111;
    margin: 0.5rem 0;
    color: #ffffff;
    font-family: 'Noto Serif JP', serif;
    font-size: 2.2rem;
    line-height: 2.4rem;
    letter-spacing: 0.25;
    transition: all 300ms;

    &:hover {
        cursor: pointer;
        transition: opacity 300ms;
        opacity: 0.9;
    }
`;