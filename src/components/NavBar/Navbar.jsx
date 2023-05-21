import React from 'react';
import styled from 'styled-components';



function Navbar() {
  return (
    <>
        <NavContainer>
            <h2>Todo <span>List</span></h2>
            <div>
                <a href="">Home</a>
                <a href="">Go to PokeAPI</a>
            </div>
        </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
    h2 {
        color: white;
        font-weight: 200;
    }
    span {
        font-weight: bold;
    }
    

    padding: .4rem;
    background-color: rgb(130, 130, 130);
    display: flex;
    aling-items: center;
    justify-content: space-between;

    a {
        color: white;
        text-decoration: none;
        margin-right: 3rem;
    }
`