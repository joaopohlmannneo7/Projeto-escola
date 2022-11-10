import styled from "styled-components";

export const ContainerCardF = styled.div`
border-radius: 5px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  padding: 30px;
  margin: 50px 670px;
  width: 600px;
  transition: all 0.3s ease-out;
background: ${({ theme }) => theme.background};
color: ${({ theme }) => theme.text};
height:700px;
label{
    display: flex;
    font-size: 29px;
    font-weight: bold;
    padding-bottom: 5px;
    padding-top: 20px;
    align-items: center;
    color: ${({ theme }) => theme.text};
    margin: 10px 10px 20px 10px;
    
    
  }
  div{
    
  }
  #login{
    h2{
        position: relative;
        left:  220px;
        font-size: 30px;
    }
  }
  p{
  position: relative;
  top: 30px;
  left: 220px;
}
input{
    color: ${({ theme }) => theme.text};;
    box-sizing: border-box;
    width: 540px;
    height: 38px;
    padding: 15px;
    outline: none;
    resize: none;
    font-family: 'Times New Roman', Times, serif;
    font-size: 16px;
    
  
}
h1{
    color: ${({ theme }) => theme.text};
    display: flex;
    text-align: center;
    justify-content: center;
    font-size: 40px;
}
Button{
    display: inline;
    justify-content: space-around;
  width:125px;
  margin: 40px 210px 10px;
  height: 35px;
}
`

export const Container = styled.div`
width: 100%;
height: 80px;
background: ${({ theme }) => theme.background};
`
export const Nav = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
    h1{
        font: 1rem;
        color: ${({ theme }) => theme.text};
    }
`
export const Link = styled.div`
  color: ${({ theme }) => theme.text};
`

const Input = ({ type, placeholder, value, onChange }) => {
  return (
      <Input value={value} onChange={onChange} type={type} placeholder={placeholder}/>
   );
};



export default Input;
