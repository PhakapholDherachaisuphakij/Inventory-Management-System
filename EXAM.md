# INT251 React + TypeScript Practical Exam

## Inventory Management System

**Time limit: 180 minutes (3 hours)**  
**Total: 100 points**

You are given a Vite React + TypeScript starter for an inventory management system. The visual design and static mock data are provided. Your task is to turn the starter into a working single-page application using the course topics.

## General requirements

- Use React with TypeScript and functional components.
- Keep the existing visual design responsive and accessible.
- Use `json-server` with the provided `db.json` as the data source.
- Use the existing `npm run dev` and `npm run server` scripts in two terminals.
- Do not remove the supplied mock data, types, or page structure.

## Tasks and scoring

### 1. Routing and navigation — 15 points

- Configure React Router with routes for Dashboard, Product List, Product Details, Add Product, and Edit Product.
- Use `NavLink` for the sidebar so the active item is styled correctly.
- Use `useParams` for the product details and edit pages.
- Use `useNavigate` for page transitions after create, update, delete, and cancel actions.
- Add a useful not-found route.

### 2. Product list data and UI behavior — 25 points

- Load products from the REST API with `useEffect` and `fetch`.
- Display loading and error states that fit the existing UI.
- Implement search by product name and SKU.
- Implement category and stock-status filters. Multiple filters must work together.
- Implement sorting by name, price, stock, and newest.
- Keep the result count and pagination or visible-result messaging accurate.
- Use appropriate array methods, including `map`, `filter`, and `sort`.

### 3. CRUD operations — 25 points

- Create a product with POST.
- Read products and individual product details with GET.
- Update a product with PATCH.
- Delete a product with DELETE and provide a clear confirmation step.
- Refresh or update the visible UI after each mutation.
- Handle API failures without crashing the application.

### 4. Controlled product form and validation — 20 points

- Convert the add/edit form into a controlled form using `useState` or `react-hook-form`.
- Register fields with React Hook Form and expose validation errors in the UI.
- Validate required fields, positive numeric values, SKU format, and duplicate SKU cases.
- Display clear, field-level validation messages.
- Prevent submission when validation fails.
- Reuse the form for both add and edit modes.

### 5. Dashboard statistics — 10 points

- Calculate total products, total stock units, low-stock items, and inventory value from loaded data.
- Use `reduce` and derived values rather than hard-coded totals.
- Show the stock health breakdown and ensure it responds to the current product data.
- Use `useMemo` where it improves derived calculations.

### 6. Quality and accessibility — 5 points

- Preserve responsive behavior at mobile, tablet, and desktop widths.
- Add meaningful labels, keyboard focus styles, button labels, and accessible form feedback.
- Keep TypeScript errors and browser console errors at zero.

## Expected behavior

- The app opens on the Dashboard and the active sidebar navigation matches the current route.
- Products can be searched, filtered, sorted, viewed, added, edited, and deleted.
- Every API request shows appropriate loading and error feedback.
- Forms retain user input while validation messages are displayed.
- Dashboard numbers are derived from the same API data used by the product pages.
- Refreshing the browser does not require manually re-seeding the data.

## Suggested time allocation

- 0–15 min: inspect the starter and plan component/data flow
- 15–45 min: routing, shared layout, and API loading states
- 45–95 min: product list search, filters, sorting, and details
- 95–135 min: controlled add/edit form and validation
- 135–160 min: CRUD mutations and dashboard calculations
- 160–180 min: responsive/accessibility polish and testing

## Submission checklist

- The project starts with `npm run dev`.
- The API starts with `npm run server`.
- `npm run build` completes successfully.
- All required routes and CRUD interactions work.
- No solution code or hard-coded derived statistics remain.
