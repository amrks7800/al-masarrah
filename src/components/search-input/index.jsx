import "./index.css"
import searchIcon from "/icons/search.svg"

const SearchInput = () => {
  return (
    <div className="search-input">
      <img src={searchIcon} alt="Search icon" />
      <input type="text" placeholder="بحث" />
    </div>
  )
}
export default SearchInput
