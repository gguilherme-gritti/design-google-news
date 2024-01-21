import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  padding: 16px 64px;
  height: 84px;
  border-bottom: 1px solid #e5e7eb;

  justify-content: center;
  align-items: center;
  width: 100%;

  background-color: #f2f3f5;
`;

export const Content = styled.div`
  width: 80%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-height: 60px;
    max-width: 60px;
  }
`;

export const Img = styled.div`
  width: 50%;
`;

export const Navs = styled.div`
  float: right;
`;

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;

  li {
    a {
      display: block;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      transition: 0.8s;
      border-radius: 10px;
      margin-left: 15px;

      font-family: "Archivo";

      &:hover {
        background-color: black;
        color: white;
        cursor: pointer;
      }
    }
  }
`;
