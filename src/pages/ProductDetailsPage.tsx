function ProductDetailsPage() {
  // TODO: Read the product id with useParams and fetch product details.
  return (
    <>
      <section className="page-intro">
        <div>
          <p className="breadcrumb">Products / Product Details</p>
          <h2>Aurora Wireless Headphones</h2>
          <p>Detailed information for one product.</p>
        </div>
        <a className="button secondary" href="/products">
          Back to Products
        </a>
      </section>
      <section className="details-page section-card">
        <div className="detail-image">◒</div>
        <div className="details-placeholder">
          <h3>Aurora Wireless Headphones</h3>
          <p>SKU: AUD-2048</p>
          <p>Category: Electronics</p>
          <p>Price: 89.99 THB</p>
          <p>Current stock: 42 units</p>
          <p>Reorder level: 12 units</p>
          <p>Wireless over-ear headphones with noise cancellation.</p>
          <div>
            <a className="button primary" href="/products/p-1001/edit">
              Edit Product
            </a>
            <button className="button danger">Delete Product</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetailsPage;
