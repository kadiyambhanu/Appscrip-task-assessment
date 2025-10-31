# Quick Deployment Steps

## ✅ Build Status
The application has been successfully built. Run `npm run build` again if needed.

## 🚀 Deployment Steps

### 1. Push to GitHub

```bash
# If you haven't created a GitHub repository yet:
# 1. Go to https://github.com/new
# 2. Create a new repository (name it: Appscrip-task-[your-name])
# 3. Don't initialize with README

# Then run:
git remote add origin https://github.com/YOUR_USERNAME/Appscrip-task-YOUR_NAME.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Netlify

#### Option A: Git Integration (Recommended - Auto Deploy)

1. Go to [app.netlify.com](https://app.netlify.com/)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** and authorize netlify
4. Select your repository: `Appscrip-task-[your-name]`
5. Netlify will auto-detect settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Node version:** 18
6. Click **"Deploy site"**
7. Wait for build to complete (~2-3 minutes)
8. Your site will be live at: `https://[random-name].netlify.app`

#### Option B: Manual Deploy (Quick Test)

1. Go to [app.netlify.com](https://app.netlify.com/)
2. Click **"Add new site"** → **"Deploy manually"**
3. Make sure you've run `npm run build` locally
4. Zip the entire project folder (including `.next` folder)
5. Drag and drop the zip file
6. Netlify will extract and deploy

**Note:** Option A is better for Next.js as Netlify needs source files to build properly.

### 3. Share Your Links

Once deployed, share:
- **GitHub Repository:** `https://github.com/YOUR_USERNAME/Appscrip-task-YOUR_NAME`
- **Netlify URL:** `https://[your-site].netlify.app`

## 🔍 Testing Checklist

After deployment, verify:
- [ ] Site loads without errors
- [ ] Products display from API
- [ ] Filter checkbox works
- [ ] Sort dropdown works
- [ ] Mobile responsive (test on phone or Chrome DevTools)
- [ ] SEO meta tags present (View Page Source → search for "mettä muse")
- [ ] Schema.org JSON-LD present (View Page Source → search for "schema.org")

## 🐛 Troubleshooting

### CORS Issues
The Fake Store API supports CORS, so it should work. If you see CORS errors:
- Check browser console
- Verify API endpoint is accessible
- Test API directly: https://fakestoreapi.com/products

### Build Fails on Netlify
- Check Node.js version (should be 18 - set in netlify.toml)
- Ensure all dependencies are in package.json
- Check Netlify build logs for specific errors

### Images Not Loading
- Images are loaded from Fake Store API (should work)
- Placeholder images are used as fallback
- Check image domains in next.config.js

## 📝 Notes

- The application uses **client-side rendering** with `useEffect` for API calls
- SEO is handled via `react-helmet-async`
- All styling is done with CSS (no UI libraries)
- Responsive breakpoints: 480px (mobile), 768px (tablet), 1200px+ (desktop)

