// Write you Code here
import './index.css'

const Filters = props => {
  const {categoryData, levelsData, onChangeLevel, onChangeCategory} = props

  const onChangeLevelInFilters = event => {
    onChangeLevel(event.target.value)
  }

  const onChangeCategoryInFilters = event => {
    onChangeCategory(event.target.value)
  }

  return (
    <div className="filters-container">
      <div className="filter-container">
        <label htmlFor="language" className="filter-heading">
          LANGUAGE
        </label>
        <select
          id="language"
          className="options"
          onChange={onChangeCategoryInFilters}
        >
          {categoryData.map(eachCategory => (
            <option value={eachCategory.language} key={eachCategory.id}>
              {eachCategory.language}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-container">
        <label htmlFor="Level" className="filter-heading">
          DIFFICULTY LEVEL
        </label>
        <select
          id="Level"
          className="options"
          onChange={onChangeLevelInFilters}
        >
          {levelsData.map(eachLevel => (
            <option value={eachLevel.level} key={eachLevel.id}>
              {eachLevel.level}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Filters
