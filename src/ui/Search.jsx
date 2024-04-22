import PropTypes from "prop-types";

const Search = ({
  placeholder = "Search...",
  query,
  setQuery,
  wrapperClass,
  cb_setParamsSearch,
}) => {
  return (
    <div className={`relative ${wrapperClass || ""}`}>
      <input
        className="field-input !pr-[60px]"
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            if (cb_setParamsSearch) cb_setParamsSearch();
          }
        }}
      />
      <button
        className={`field-btn text-red !right-[40px] transition ${
          query ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setQuery("")}
        aria-label="Clear all"
      >
        <i className="icon-xmark-regular" />
      </button>
      <button
        onClick={() => {
          if (cb_setParamsSearch) cb_setParamsSearch();
        }}
        className="field-btn icon"
        aria-label="Search"
      >
        <i className="icon-magnifying-glass-solid" />
      </button>
    </div>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
  query: PropTypes.string,
  setQuery: PropTypes.func,
  wrapperClass: PropTypes.string,
};

export default Search;
