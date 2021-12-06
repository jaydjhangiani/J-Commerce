import styled from "styled-components";
import Image from "next/image";
import { mobile, tablet } from "../utils/responsive";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <ImageDiv>
        <Image
          src={item.img}
          alt={item.title}
          objectFit="cover"
          layout="fill"
        />
      </ImageDiv>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const ImageDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  ${tablet({ height: "30vh" })}
  ${mobile({ height: "50vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  text-align: center;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;
