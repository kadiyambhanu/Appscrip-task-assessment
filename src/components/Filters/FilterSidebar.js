export default function FilterSidebar({ itemCount = 0, isCustomizable = false, onCustomizableChange, showFilters = true, onToggleFilters }) {
  const filterOptions = [
    'IDEAL FOR',
    'OCCASION',
    'WORK',
    'FABRIC',
    'SEGMENT',
    'SUITABLE FOR',
    'RAW MATERIALS',
    'PATTERN'
  ];

  const handleCheckboxChange = (e) => {
    if (onCustomizableChange) {
      onCustomizableChange(e.target.checked);
    }
  };

  const handleToggleClick = (e) => {
    e.preventDefault();
    if (onToggleFilters) {
      onToggleFilters();
    }
  };

  return (
    <aside className={`filters-sidebar ${showFilters ? '' : 'filters-hidden'}`}>
      <h2 className="sr-only">Product Filters</h2>
      <div className="filter-header">
        <span className="item-count">{itemCount} ITEMS</span>
        <button 
          type="button"
          className="hide-filter-link"
          onClick={handleToggleClick}
          aria-label={showFilters ? "Hide filters" : "Show filters"}
          aria-expanded={showFilters}
        >
          {showFilters ? '< HIDE FILTER' : '> SHOW FILTER'}
        </button>
      </div>
      
      {showFilters && (
        <>
          <div className="filter-group">
            <label className="checkbox-label">
              <input 
                type="checkbox" 
                className="checkbox-input"
                checked={isCustomizable}
                onChange={handleCheckboxChange}
              />
              <span>CUSTOMIZABLE</span>
            </label>
          </div>

          {filterOptions.map((filterLabel) => (
            <div key={filterLabel} className="filter-group">
              <div className="filter-dropdown">
                <span className="filter-label">{filterLabel}</span>
                <select className="filter-select">
                  <option>All</option>
                </select>
              </div>
            </div>
          ))}
        </>
      )}
    </aside>
  );
}

