import styled from "styled-components";
import { Badge, IconButton } from "@material-ui/core";
import { CameraAlt, Search, ShoppingCartOutlined } from "@material-ui/icons";
import { mobile, tablet } from "../utils/responsive";

const Navbar = () => {
  return (
    <Container>
      <Wrappper>
        <FirstRow>
          <Left>
            <Logo>el Cart.</Logo>
          </Left>
          <Center>
            <Language>India's Fashion Expert</Language>
          </Center>
          <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>LOGIN</MenuItem>

            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Right>
        </FirstRow>
        <SecondRow>
          <CameraDiv>
            <Button>
              <span>Upload an image </span>
              <CameraAlt
                style={{ color: "white", fontSize: 16, margin: "0 5px" }}
              />
              <span> to search</span>
            </Button>
          </CameraDiv>
          <SearchDiv>
            <SearchContainer>
              <Input placeholder="Search for products, brands and more" />
              <IconButton>
                <Search style={{ color: "gray", fontSize: 16 }} />
              </IconButton>
            </SearchContainer>
          </SearchDiv>
        </SecondRow>
      </Wrappper>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: 100%;
`;

const Wrappper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid whitesmoke;
  ${mobile({ padding: "10px 0px" })}
`;

const FirstRow = styled.div`
  padding: 10px 50px;
  justify-content: space-between;
  display: flex;
  width: 100%;
  ${mobile({ padding: "10px 10px" })}
`;

const SecondRow = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 60px;
  justify-content: center;
  ${mobile({
    flexDirection: "column",
    padding: "10px 0px 0px 0px",
  })}/* justify-content: space-between; */
`;

const CameraDiv = styled.div`
  display: flex;
  margin: 0px 5px;
  flex: 1;
  /* border: 1px solid black; */
  padding: 0px 60px;
  ${mobile({
    padding: "0px 10px",
    margin: "0px auto",
  })}
  ${tablet({
    width: "100%",
    padding: "0px 10px",
    // margin: "10px auto 0 auto",
  })}
`;

const SearchDiv = styled.div`
  display: flex;
  flex: 1;
  margin: 0px 5px;
  align-items: center;
  /* border: 1px solid black; */
  padding: 0px 60px;
  ${mobile({
    padding: "0px 10px",
    fontSize: "5px",
    margin: "10px auto 0 auto",
  })}
  ${tablet({
    width: "100%",
    padding: "0px 10px",
    // margin: "10px auto 0 auto",
  })}
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ display: "none" })}/* border: 1px solid black; */
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  font-style: italic;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  border-radius: 5px;
  /* margin-left: 25px; */
  padding: 0px 5px;
  /* border: 1px solid black; */
`;

const Input = styled.input`
  border: none;
  width: 100%;
  padding: 0px 2px;
  height: 100%;
  &:focus {
    outline: none;
  }
  /* ${mobile({ width: "50px" })} */
`;

const Left = styled.div`
  flex: 1;
  ${mobile({ textAlign: "center" })}
`;

const Logo = styled.h1`
  font-family: "Pacifico", cursive;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: 25px;
  ${tablet({ fontSize: "15px" })}
  ${mobile({ fontSize: "15px", marginLeft: "10px" })}
`;

const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  outline: none;
  font-weight: 600;
  border-radius: 5px;
`;
