function ProductFilters() {
  /* TODO: Add state and event handlers for search, category, status, and sorting. */ return (
    <div className="filters">
      <input
        className="search-input"
        placeholder="Search by product name or SKU"
      />
      <div className="filter-buttons">
        <button className="filter-button active">All</button>
        <button className="filter-button">Electronics</button>
        <button className="filter-button">Home & Living</button>
        <button className="filter-button">Low Stock</button>
      </div>
      <select className="sort-select" defaultValue="newest">
        <option value="newest">Sort: Newest</option>
        <option value="name">Sort: Name</option>
        <option value="price">Sort: Price</option>
        <option value="stock">Sort: Stock</option>
      </select>
    </div>
  );
}
export default ProductFilters;
