import ProductForm from "../components/ProductForm";

function ProductFormPage() {
  // TODO: Use the route id to decide between add and edit mode.
  return (
    <>
      <section className="page-intro">
        <div>
          <p className="breadcrumb">Products / Add Product</p>
          <h2>Add Product</h2>
          <p>Create a new product for the catalog.</p>
        </div>
        <a className="button secondary" href="/products">
          Cancel
        </a>
      </section>
      <ProductForm />
    </>
  );
}

export default ProductFormPage;
