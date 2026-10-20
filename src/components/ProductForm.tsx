function ProductForm() {
  /* TODO: Use React Hook Form, add validation, then connect POST/PATCH with Fetch API. */ return (
    <section className="section-card form-card">
      <div className="section-heading">
        <div>
          <h2>Add / Edit Product</h2>
          <p>Template for the controlled form.</p>
        </div>
      </div>
      <form>
        <label>
          Product Name
          <input placeholder="Enter product name" />
        </label>
        <label>
          SKU
          <input placeholder="Enter SKU" />
        </label>
        <label>
          Category
          <select defaultValue="">
            <option value="" disabled>
              Select category
            </option>
            <option>Electronics</option>
            <option>Home & Living</option>
            <option>Accessories</option>
            <option>Apparel</option>
          </select>
        </label>
        <div className="form-row">
          <label>
            Price
            <input type="number" placeholder="0.00" />
          </label>
          <label>
            Stock
            <input type="number" placeholder="0" />
          </label>
        </div>
        <label>
          Description
          <textarea rows={3} placeholder="Enter product description" />
        </label>
        <div className="form-actions">
          <button className="button secondary" type="button">
            Cancel
          </button>
          <button className="button primary" type="submit">
            Save Product
          </button>
        </div>
      </form>
    </section>
  );
}
export default ProductForm;
