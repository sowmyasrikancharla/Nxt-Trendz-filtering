import {Component} from 'react'
import {FaSearch} from 'react-icons/fa'
import './index.css'

class FiltersGroup extends Component {
  render() {
    const {
      ratingsList,
      categoryOptions,
      changeSearchInput,
      changeCategory,
      changeRating,
      enterSearchInput,
      clear,
      searchInput,
    } = this.props
    const onChangeSearchInput = event => {
      changeSearchInput(event.target.value)
    }

    const onClickCategory = id => {
      changeCategory(id)
    }

    const onEnterSearchInput = event => {
      if (event.key === 'Enter') {
        console.log(event.key)
        enterSearchInput()
      }
      console.log(event.key)
    }

    const onClickRating = id => {
      changeRating(id)
    }

    const clearFilters = () => {
      clear()
    }

    return (
      <div className="filters-group-container">
        <div className="search-con">
          <input
            type="search"
            className="search"
            placeholder="Search"
            onChange={onChangeSearchInput}
          />
          <FaSearch />
        </div>
        <ul className="category-con">
          <h2 className="category-rating-head">Category</h2>
          {categoryOptions.map(eachCategory => (
            <button
              className="dummy-button"
              onClick={() => onClickCategory(eachCategory.categoryId)}
              onKeyDown={onEnterSearchInput}
              value={searchInput}
            >
              <p className="categories">{eachCategory.name}</p>
            </button>
          ))}
        </ul>
        <ul>
          <h2 className="category-rating-head">Rating</h2>
          {ratingsList.map(eachRating => (
            <div className="rating-text-con">
              <img
                onClick={() => onClickRating(eachRating.ratingId)}
                src={eachRating.imageUrl}
                className="rating-img"
                alt={`rating ${eachRating.ratingId}`}
              />
              <p className="categories">&up</p>
            </div>
          ))}
        </ul>
        <button className="clear-filters-button" onClick={clearFilters}>
          {' '}
          Clear Filters
        </button>
      </div>
    )
  }
}

export default FiltersGroup
