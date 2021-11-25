import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    
    display: flex;
    align-content: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%auto;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;


const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>LOGIN</Title>
                <Form>
                    <Input placeholder="Username or Email" />
                    <Input placeholder="Password" />
                    <Button>LOGIN</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login;