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

function Sorting({
  minPrice,
  maxPrice,
  discountedOnly,
  sort,
  setMinPrice,
  setMaxPrice,
  setDiscountedOnly,
  setSort,
}) {
  const location = useLocation();

  const sales = location.pathname === "/all-sales";

  return (
    <StyledSortComponent>
      <InputRow>
        <label htmlFor="price">Price</label>

        <PriceInput
          type="number"
          placeholder="from"
          min="0"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <PriceInput
          type="number"
          placeholder="to"
          min="0"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </InputRow>

      {!sales && (
        <InputRow>
          <label htmlFor="discountedItems">Discounted items</label>

          <CheckboxWrapper>
            <Checkbox
              id="discountedItems"
              type="checkbox"
              checked={discountedOnly}
              onChange={(e) => setDiscountedOnly(e.target.checked)}
            />
            <Checkmark />
          </CheckboxWrapper>
        </InputRow>
      )}

      <InputRow>
        <label htmlFor="sorted">Sorted</label>

        <Select
          id="sorted"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">by default</option>
          <option value="ascending">ascending</option>
          <option value="descending">descending</option>
        </Select>
      </InputRow>
    </StyledSortComponent>
  );
}

export default Sorting;
