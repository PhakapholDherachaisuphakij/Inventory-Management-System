import ProductFilters from "../components/ProductFilters";
import ProductCard from "../components/ProductCard";

function ProductListPage() {
  // TODO: Fetch products and implement search, filters, sorting, pagination, loading, and error states.
  return (
    <>
      <section className="page-intro">
        <div>
          <h2>Product List</h2>
          <p>Search, filter, sort, and manage your inventory.</p>
        </div>
        <a className="button primary" href="/products/new">
          + Add Product
        </a>
      </section>
      <section className="section-card">
        <div className="section-heading">
          <div>
            <h2>Products</h2>
            <p>24 products in your catalog.</p>
          </div>
        </div>
        <ProductFilters />
        <div className="product-grid">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </>
  );
}

export default ProductListPage;
