import styled from "styled-components";

const Dynamic = styled.span`
    background-color: ${props => props.color < 2 ? 'red' : props.color > 4 ? '#26B737' : '#FAFA37'};
    font-size: ${props => props.size || '13px'};
    font-weight: 600;
`;

export default Dynamic;