import styled from "styled-components";

export const FormGroup = styled.form`
    display: block;
	width: 84%;
	//margin: 37px 33px;
    font-size: 16px;
    line-height: 19px;


    color: #424242;

`;

export const Label = styled.label`
	margin-bottom: 0.5em;
    display: block;
  

`;




export const Message = styled.label`
	margin-bottom: 0.5em;
    display: block;
`;

export const StyledInput = styled.input`
    display: block;
    width: 100%;
    height: 34px;
    border: 1px solid #C9CACC;
    //box-sizing: border-box;
    border-radius: 4px;
    margin-bottom: 20px;
`
export const StyledButton = styled.button`
width: 116px;
height: 34px;
font-size: 16px;
line-height: 19px;
color: #FFF;

background: linear-gradient(104.34deg, #3C4CAD -15.34%, #00C3FF 145.95%);
box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
border-radius: 4px;
border: none;
position: absolute;
right: 0%;
margin-right:33px;
margin-top: 5px;
&:hover {
    cursor: pointer;
    box-shadow: 0px 0px 4px #99A0A3;
  };



`
