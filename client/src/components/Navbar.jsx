import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 60px;
    font-family: 'Lato', sans-serif;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Center = styled.div`
    flex: 1;
    display: flex;
    text-align: center;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: center;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    width: 25vw;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;

const Navbar = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <Left>
                        <Link to="/">
                        <Logo>CRAFTY LIPAYON</Logo>
                        </Link>
                    </Left>
                    <Center>
                        <SearchContainer>
                            <Input placeholder="Search" />
                            <Search style={{ color: "gray", fontSize: 16 }} />
                        </SearchContainer>
                    </Center>
                    <Right>
                        <Link to="/signup">
                        <MenuItem>Register</MenuItem>
                        </Link>
                        <Link to="/login">
                        <MenuItem>Sign in</MenuItem>
                        </Link>
                        <Link to="/cart">
                        <MenuItem>
                            <Badge color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                        </Link>
                    </Right>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Navbar;