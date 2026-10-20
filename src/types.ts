export type ProductStatus = 'In Stock' | 'Low Stock' | 'Out of Stock'

export type Product = {
  id: string
  name: string
  sku: string
  category: string
  price: number
  stock: number
  reorderLevel: number
  status: ProductStatus
  description: string
  color: string
  accent: string
  updatedAt: string
}
