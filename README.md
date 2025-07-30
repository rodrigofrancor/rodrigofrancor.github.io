# Professional Economist Website

A modern, bilingual (English/Spanish) professional website for economists built with React, Tailwind CSS, and shadcn/ui components.

## Features

- 🌐 **Bilingual Support**: Complete English and Spanish translations
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile
- 🎨 **Modern UI**: Professional design with smooth animations
- 📄 **Complete Sections**: About, Research, CV, and Contact
- 🔗 **Easy Navigation**: Smooth scrolling between sections
- 💼 **Professional**: Perfect for academic and professional use

## GitHub Pages Setup Instructions

### Option 1: Using GitHub Actions (Recommended)

1. **Create a new GitHub repository**:
   - Go to GitHub and create a new repository
   - Name it `[your-username].github.io` (replace with your actual GitHub username)
   - Make it public
   - Don't initialize with README (we'll upload our files)

2. **Upload your files**:
   - Download all files from this project
   - Upload them to your new repository (you can drag and drop in GitHub web interface)

3. **Enable GitHub Pages**:
   - Go to your repository Settings
   - Scroll down to "Pages" section
   - Under "Source", select "GitHub Actions"
   - GitHub will automatically detect this is a React app and suggest a workflow

4. **Create GitHub Actions workflow**:
   Create a file `.github/workflows/deploy.yml` with this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

5. **Your website will be live at**: `https://[your-username].github.io`

### Option 2: Manual Build Upload

1. **Build the project locally**:
   ```bash
   npm install
   npm run build
   ```

2. **Create repository and upload dist folder**:
   - Create a new repository named `[your-username].github.io`
   - Upload only the contents of the `dist` folder to the repository
   - Enable GitHub Pages in Settings > Pages > Source: "Deploy from a branch" > Branch: "main"

## Customization Guide

### 1. Personal Information
Edit the content object in `src/App.jsx`:

- Replace `[Your Name]` with your actual name
- Update research areas and specializations
- Add your actual contact information
- Update education and experience details
- Modify research papers and publications

### 2. Profile Photo
- Replace `src/assets/profile.jpg` with your professional photo
- Recommended size: 400x400px or larger, square aspect ratio

### 3. CV and Documents
- Add your CV PDF to `public/` folder
- Update download links in the component
- Add links to your research papers

### 4. Social Media Links
Update the social media links in the contact section:
- LinkedIn profile
- Twitter/X handle
- ORCID ID
- Personal website

### 5. Colors and Styling
The website uses a professional blue and gray color scheme. To customize:
- Edit CSS variables in `src/App.css`
- Modify Tailwind classes in `src/App.jsx`

## Content Sections

### About Section
- Personal introduction and background
- Research interests and methodology
- Professional highlights

### Research Section
- Working papers
- Published articles
- Work in progress
- Each paper includes title, authors, journal, year, and abstract

### CV Section
- Education history
- Professional experience
- Skills and expertise
- Downloadable CV link

### Contact Section
- Email address
- Phone number
- Office address
- Social media links

## Technical Details

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Responsive**: Mobile-first design
- **Languages**: English and Spanish support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is open source and available under the MIT License.

## Support

If you need help customizing the website or setting up GitHub Pages, refer to:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)

