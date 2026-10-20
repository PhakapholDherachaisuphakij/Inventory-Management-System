function ProductCard() { // TODO: Replace this static card with props and mock/API data.
  return <article className="product-card"><div className="product-image"><span>◒</span></div><div className="product-info"><h3>Aurora Wireless Headphones</h3><p className="muted">SKU: AUD-2048</p><p className="muted">Category: Electronics</p><div className="product-row"><strong>89.99 THB</strong><span className="status in-stock">In Stock</span></div><p className="stock-text">42 units in stock</p><div className="card-actions"><a className="button secondary" href="/products/p-1001">View Details</a><a className="button secondary" href="/products/p-1001/edit">Edit</a></div></div></article>
}

export default ProductCard
