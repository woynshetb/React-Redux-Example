import styled from "styled-components";

const ListStyled = styled.section`
width:50% ;
div {
   background-color:aliceblue ;
   display:flex ;
   justify-content:space-evenly ;
   align-items:center ;
}
.delete {
    background-color:red ;
    width:60px ;
    height:30px ;
    border:none ;
    border-radius:6px ;
    color:white ;
    &:hover{
        background-color:white;
        color:red ;
    }
    
}
`;

export default ListStyled;