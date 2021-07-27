import React from 'react'
import styled from 'styled-components'

const Input = ({type, label, placeholder}) => {
    return (
        <Container>
            
                <input type={type} placeholder={placeholder} label={label} type={type} />
           
        </Container>
    )
}

export const Container = styled.input`
	padding: 0.5em;

	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

export default Input
