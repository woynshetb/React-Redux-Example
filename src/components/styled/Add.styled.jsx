import styled from "styled-components";
const AddStyled = styled.section`
align-items:center ;
width:40% ;

form {
 display:flex ;
   flex-direction:column;
   label {
    margin-bottom:10px ;
    gap:20px ;
    
    input{
        margin-right:0px;
        margin-left:50px ;
        margin-top:10px ;
        align-self:right ;
    height:30px ;
    width: 200px;
    border:0.1px solid grey;
   }
   }
   
}
button {
  background-color  :blue ;
  color:white ;
  border-radius:12px ;
  width:100px ;
  height:30px ;
  border:none ;
  align-self:center ;
  
  &:hover {
  background-color:purple ;
  color:white ;
  }
}
`;


export default AddStyled;


