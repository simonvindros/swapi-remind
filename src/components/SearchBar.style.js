import styled from 'styled-components'

export const StyledSearch = styled.input`
    color: black;
    margin-top: 15px;
    width: 190px;
    height: 25px;
    border: 0;
    box-shadow: 0px 0px 2px 2px #8f8f8f;
    background-image: radial-gradient(circle at center, rgba(143, 143, 143, 0.1), 
                                                        rgba(143, 143, 143, 0.6));

        &:focus {
            outline: 0;
            background-image: radial-gradient(circle at center, rgba(143, 143, 143, 0.1), 
                                                        rgba(143, 143, 143, 0.3));
        }                      
`