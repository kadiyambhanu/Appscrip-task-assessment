# Project Structure

This document describes the organized project structure for clarity and maintainability.

## 📂 Directory Structure

```
Appscrip-task-yourname/
│
├── public/                          # Static assets and files
│   └── index.html                   # Original HTML foundation (reference)
│
├── src/                             # Source code directory
│   │
│   ├── components/                  # Reusable React components
│   │   ├── Header.js               # Main header/navigation component
│   │   ├── Filters/                 # Filter-related components
│   │   │   └── FilterSidebar.js    # Sidebar with filters
│   │   ├── Layout/                 # Layout components
│   │   │   ├── Navigation.js      # Navigation bar
│   │   │   └── Footer.js           # Footer component
│   │   └── Product/                # Product-related components
│   │       ├── ProductCard.js      # Individual product card
│   │       └── ProductGrid.js      # Product grid layout
│   │
│   ├── pages/                       # Next.js pages (routing)
│   │   ├── _app.js                 # App wrapper (HelmetProvider)
│   │   └── index.js                # Main product listing page
│   │
│   ├── lib/                        # Utility functions and helpers
│   │   └── api.js                  # API integration (Fake Store API)
│   │
│   └── styles/                     # Stylesheets
│       ├── globals.css             # Global styles (main stylesheet)
│       ├── App.css                 # App-level styles
│       └── legacy.css              # Original CSS foundation
│
├── .gitignore                      # Git ignore rules
├── .eslintrc.json                  # ESLint configuration
├── netlify.toml                    # Netlify deployment configuration
├── next.config.js                  # Next.js configuration
├── package.json                    # Dependencies and npm scripts
└── README.md                       # Project documentation
```

## 🎯 Component Organization

### Components (`src/components/`)

**Header.js**
- Main header component wrapping Navigation
- Provides semantic `<header>` element

**Filters/FilterSidebar.js**
- Sidebar with product filters
- Handles customizable filter checkbox
- Displays item count

**Layout/Navigation.js**
- Top navigation bar
- Logo, icons (search, heart, bag, user)
- Language dropdown
- Bottom navigation links

**Layout/Footer.js**
- Footer with multiple sections
- Newsletter subscription
- Links and contact information
- Social media icons
- Payment methods

**Product/ProductCard.js**
- Individual product display
- Product image with lazy loading
- Product name and price
- Favorite button
- Out of stock indicator

**Product/ProductGrid.js**
- Grid layout for products
- Responsive grid system
- Maps products to ProductCard components

## 📄 Pages (`src/pages/`)

**`_app.js`**
- Next.js app wrapper
- Sets up HelmetProvider for SEO
- Imports global styles

**`index.js`**
- Main product listing page
- State management (products, filters, sorting)
- API integration with useEffect
- SEO meta tags and Schema.org JSON-LD
- Assembles all components

## 🔧 Utilities (`src/lib/`)

**`api.js`**
- `getAllProducts()` - Fetch all products from API
- `getProductById(id)` - Fetch single product
- `formatPrice(price)` - Format price as currency

## 🎨 Styles (`src/styles/`)

**`globals.css`**
- All global styles
- Responsive breakpoints
- Component styles
- Mobile, tablet, desktop layouts

**`App.css`**
- App-level styles
- Container layouts

**`legacy.css`**
- Original CSS foundation (reference)

## 📦 Static Files (`public/`)

**`index.html`**
- Original HTML foundation
- Reference for structure
- Used for static deployment if needed

## 🏗️ Why This Structure?

### ✅ Modularity
- Components are separated by feature/function
- Easy to find and modify specific parts
- Clear separation of concerns

### ✅ Scalability
- Easy to add new components
- New features can be added without restructuring
- Follows React/Next.js best practices

### ✅ Maintainability
- Clear file organization
- Related files grouped together
- Easy for new developers to understand

### ✅ Next.js Compatibility
- Follows Next.js conventions
- `pages/` directory for routing
- `public/` for static assets
- `src/` directory supported by Next.js

## 🔄 Import Paths

All imports use relative paths from their location:

```javascript
// From pages/index.js
import Header from '../components/Header';
import { getAllProducts } from '../lib/api';

// From components/Product/ProductCard.js
import { formatPrice } from '../../lib/api';

// From pages/_app.js
import '../styles/globals.css';
```

## 📝 Naming Conventions

- **Components**: PascalCase (e.g., `ProductCard.js`, `FilterSidebar.js`)
- **Files**: PascalCase for components, camelCase for utilities
- **CSS Classes**: kebab-case (e.g., `product-card`, `filter-sidebar`)
- **Functions**: camelCase (e.g., `getAllProducts`, `formatPrice`)

## 🚀 Adding New Features

### To add a new component:
1. Create file in appropriate `src/components/` subfolder
2. Export as default component
3. Import where needed

### To add a new page:
1. Create file in `src/pages/`
2. Next.js automatically creates route
3. Import components as needed

### To add new styles:
1. Add to `src/styles/globals.css` for global styles
2. Or create component-specific CSS file if needed

## 📚 Best Practices

1. **Keep components small and focused** - Each component should do one thing well
2. **Use semantic HTML** - Helps with SEO and accessibility
3. **Follow import order** - External → Internal → Relative
4. **Document complex logic** - Add comments where needed
5. **Keep styles organized** - Group related styles together

