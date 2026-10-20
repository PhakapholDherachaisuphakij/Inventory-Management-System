import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Product } from "../types";

function DashboardPage() {
  
  const [product , setProduct] = useState<Product[]>([]);

 
  useEffect(() => {
    async function fetchDashboard(){
    try{
      const res = await fetch('http://localhost:3000/products');
      const product : Product[] = await res.json();
      setProduct(product)
      
    }
    catch (err){
      console.error("Load Fail");
      throw err;
    }
    finally {
      
    }
    
  }
  fetchDashboard()

  } , [])
  return (
    <>
      <section className="page-intro">
        <div>
          <h2>Inventory Overview</h2>
          <p>Manage products, stock levels, and product information.</p>
        </div>
        <a className="button primary" href="/products/new">
          + Add Product
        </a>
      </section>
      <section className="summary-grid">
        <div className="summary-card">
          <span>Total Products</span>
          <strong>{product.length}</strong>
        </div>
        <div className="summary-card">
          <span>Total Stock</span>
          
          <strong>{product.reduce((acc , i) => { return acc + i.stock} , 0)}</strong>
        </div>
        <div className="summary-card warning">
          <span>Low Stock</span>
          <strong>{product.filter((item) =>item.stock <= 0).length}</strong>
        </div>
        <div className="summary-card">
          <span>Inventory Value</span>
          <strong>48,290 THB</strong>
        </div>
      </section>
      <section className="section-card">
        <div className="section-heading">
          <div>
            <h2>Recently Added Products</h2>
            <p>A quick look at your product catalog.</p>
          </div>
          <a className="button secondary" href="/products">
            View All Products
          </a>
        </div>
        <div className="product-grid">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </>
  );
}

export default DashboardPage;
