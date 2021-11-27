import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    
    display: flex;
    align-content: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40% auto;
    margin: 10px 0;
    padding: 10px;
    border-radius: 200px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Sign in</Title>
                <Form>
                    <Input placeholder="Username" />
                    <Input placeholder="Password" />
                    <Button>Sign in</Button>
                    <Link>Forgot your password?</Link>
                    <Link>Register</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login;