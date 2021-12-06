import styled from "styled-components";
import { categories } from "../assets/data";
import CategoryItem from "./CategoryItem";
import { mobile, tablet } from "../utils/responsive";

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
  ${tablet({ flexDirection: "column" })}
`;
