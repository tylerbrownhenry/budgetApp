import styled from 'styled-components';
import { hot } from 'react-hot-loader';

/**
 * Component defined using styled components
 */
const StyledComponent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto 0px;
    max-width: 50em;
    padding-left: 15px;
    padding-right: 15px;
    align-items: center;
    color: gray;
    border:1px solid black;
    padding: 5px;
    background: #eee;
    border-radius:5px;
    justify-content: center
`;

export default hot(module)(StyledComponent);