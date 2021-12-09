import styled from "styled-components";
import { mobile, tablet } from "../utils/responsive";
import Link from "next/link";

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOGIN TO YOUR ACCOUNT</Title>
        <Form>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button>LOGIN</Button>
          <Agreement>
            Don&apos;t have an account?{" "}
            <Link href="/register">
              <u style={{ cursor: "pointer" }}>
                <b>REGISTER HERE!</b>
              </u>
            </Link>
          </Agreement>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/login.jpg/") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 30px 40px;
  background-color: white;
  opacity: 0.9;
  border-radius: 15px;
  ${tablet({ width: "75%", padding: "20px" })}
  ${mobile({ width: "90%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 0px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  margin: 20px auto 0px auto;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-radius: 5px;
`;
