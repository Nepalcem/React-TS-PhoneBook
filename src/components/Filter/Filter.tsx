import { ChangeEvent } from "react";
import { FilterStyled, FilterBlock } from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import { filterItems } from "redux/slices/filterSlice";
import { getFilter } from "redux/selectors";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const changeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(filterItems(e.currentTarget.value.trim()));
  };
  return (
    <FilterBlock>
      <h2>Contacts List:</h2>
      <FilterStyled>
        <label>
          Search by name:
          <input
            className="filter-input"
            type="text"
            value={filter}
            onChange={changeFilter}
          />
        </label>
      </FilterStyled>
    </FilterBlock>
  );
};

export default Filter;
