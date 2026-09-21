import { Breadcrumb } from "antd";
import styled from "styled-components";

export const CategoriesPage = styled.section`
  margin: 0 40px;
`;

export const StyledBreadCrumb = styled(Breadcrumb)`
  margin: 40px 0;
  li .ant-breadcrumb-link {
    font-size: 16px;
    font-weight: 500;
    width: fit-content;
    padding: 8px 16px;
    border: 1px solid rgba(221, 221, 221, 1);
    border-radius: 6px;
  }

  .separator {
    display: inline-block;
    width: 16px;
    height: 1px;
    background: rgba(221, 221, 221, 1);
    vertical-align: middle;
    margin: -8px;
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  margin-bottom: 80px;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
`;
