import { useLocation } from "react-router-dom";
import {
  Checkbox,
  CheckboxWrapper,
  Checkmark,
  InputRow,
  PriceInput,
  Select,
  StyledSortComponent,
} from "./styles";

function Sorting() {
  const location = useLocation();

  const sales = location.pathname === "/all-sales";

  return (
    <StyledSortComponent>
      <InputRow>
        <label htmlFor="price">Price</label>
        <PriceInput type="number" placeholder="from" />
        <PriceInput type="number" placeholder="to" />
      </InputRow>

      {!sales && (
        <InputRow>
          <label htmlFor="discountedItems">Discounted items</label>
          <CheckboxWrapper>
            <Checkbox type="checkbox" />
            <Checkmark />
          </CheckboxWrapper>
        </InputRow>
      )}

      <InputRow>
        <label htmlFor="sorted">Sorted</label>
        <Select id="sorted">
          <option value="default">by default</option>
          <option value="ascending">ascending</option>
          <option value="descending">descending</option>
        </Select>
      </InputRow>
    </StyledSortComponent>
  );
}

export default Sorting;
