import PropTypes from "prop-types";
import { Search } from "monday-ui-react-core";
import "monday-ui-react-core/dist/main.css";
import "./SeacrhBox.css"
const SearchBox = ({ updateSearchInputAction, searchInputValue }) => {
  const handleInputValue = (value) => {
    updateSearchInputAction(value.trim());
  };
  return (
    <div className="search">
      
      <Search
        placeholder="Seacrh Todo"
        onChange={handleInputValue}
        value={searchInputValue}
        
        wrapperClassName="monday-storybook-search_size"
      ></Search>
    </div>
  );
};
SearchBox.prototype = {
  updateSearchInputAction: PropTypes.func,
  searchInputValue: PropTypes.string,
};

export default SearchBox;
