// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, activeLangId, updateActiveFilter} = props
  const {id, language} = languageDetails

  const filterClassName = id === activeLangId ? 'active-filter' : 'filter'
  const onClickSelectFilter = () => {
    updateActiveFilter(id)
  }

  return (
    <li onClick={onClickSelectFilter}>
      <button type="button" className={filterClassName}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
