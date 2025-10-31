# Product Listing Page - E-Commerce Store

A modern, responsive product listing page built with React (Next.js) featuring dynamic product loading, filtering, sorting, and SEO optimization.

## 🚀 Features

- **Dynamic Product Loading**: Fetches products from Fake Store API
- **Interactive Filtering**: Customizable product filter
- **Sorting Options**: Sort by Recommended, Newest, Popular, Price (High/Low)
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, and Schema.org JSON-LD
- **Accessible**: ARIA labels, keyboard navigation, semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: CSS Grid & Flexbox
- **SEO**: react-helmet-async
- **API**: Fake Store API (https://fakestoreapi.com)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment

### Deploy to Netlify

1. **Option A: Git Integration (Recommended)**
   - Push your code to GitHub
   - Connect repository to Netlify
   - Netlify will auto-detect Next.js settings

2. **Option B: Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod
   ```

3. **Option C: Manual Deploy**
   - Build the project: `npm run build`
   - Drag `.next` folder to Netlify

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

## 📱 Responsive Breakpoints

- **Desktop** (>1200px): 3-column grid
- **Tablet** (768px-1200px): 2-column grid
- **Mobile** (<480px): 1-column (stacked)

## 🔍 SEO Features

- Dynamic meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card support
- Schema.org JSON-LD structured data
- Semantic HTML markup

## 🧪 Testing

Test the application on different devices:
- Mobile: Use Chrome DevTools mobile emulation
- Tablet: Test at 768px width
- Desktop: Test at 1200px+ width

Validate SEO:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

## 📁 Project Structure

```
├── components/
│   ├── Filters/
│   │   └── FilterSidebar.js
│   ├── Layout/
│   │   ├── Navigation.js
│   │   └── Footer.js
│   └── Product/
│       ├── ProductCard.js
│       └── ProductGrid.js
├── lib/
│   └── api.js
├── pages/
│   ├── _app.js
│   └── index.js
├── styles/
│   └── globals.css
├── netlify.toml
├── next.config.js
└── package.json
```

## 🎨 Features in Detail

### Product Grid
- Responsive CSS Grid layout
- Lazy loading images
- Out of stock indicators
- Favorite/wishlist functionality

### Filtering
- Customizable products filter
- Real-time product count updates
- Smooth UI interactions

### Sorting
- Multiple sort options
- Dropdown menu with keyboard navigation
- Click-outside to close

## 🔧 Configuration

### API Configuration
The app uses Fake Store API by default. To change:
1. Update `lib/api.js`
2. Ensure CORS is enabled for your domain

### Build Configuration
- Next.js config: `next.config.js`
- Netlify config: `netlify.toml`

## 📝 License

This project is created for evaluation purposes.

## 👤 Author

Created as part of Appscrip Assignment

## 🙏 Acknowledgments

- Fake Store API for providing test data
- Next.js team for the amazing framework
- React community for excellent documentation
