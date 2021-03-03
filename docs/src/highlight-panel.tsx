import React, { useEffect, useReducer, useRef } from "react";
import styled, { keyframes, css } from "styled-components";

const highlight = keyframes`
    from {
        background-color: yellow;
    }
    to {
        background-color: transparent;
    }
`;

const animation = css`
    animation: ${highlight} 0.5s linear;
`;

interface PanelProps {
    animate: boolean;
}

const Panel = styled.div<PanelProps>`
    border: 1px dashed black;
    position: relative;
    padding: 10px;
    margin: 10px 0;
    ${props => props.animate ? animation : null}
`;

const PanelTitle = styled.span`
    position: absolute;
    left: 20px;
    top: 0;
    transform: translateY(-50%);
    padding: 0 5px;
    background-color: white;
    font-weight: 800;
    color: darkred;
`;

interface Props {
    title: string;
}

export const HighlightPanel: React.FC<Props> = ({ children, title }) => {
    const [counter, forceUpdate] = useReducer((s) => s + 1, 0);
    const mounted = useRef(false);
    const prevCounter = useRef<number>(0);

    useEffect(() => {
        if (mounted.current && prevCounter.current === counter) {
            setTimeout(() => forceUpdate(), 0);
        }
    });

    useEffect(() => {
        if (mounted.current) {
            prevCounter.current = counter;
        }
    }, [counter]);

    useEffect(() => {
        mounted.current = true;
    }, []);

    return (
        <Panel animate={counter !== prevCounter.current}>
            <PanelTitle>{title}</PanelTitle>
            {children}
        </Panel>
    );
};
