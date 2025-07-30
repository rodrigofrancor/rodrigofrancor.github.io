# Website Customization Guide

This guide will help you personalize your economist website with your own information.

## 🎯 Quick Start Checklist

- [ ] Replace profile photo
- [ ] Update personal information
- [ ] Add your research papers
- [ ] Update CV information
- [ ] Add contact details
- [ ] Upload your CV PDF
- [ ] Test both English and Spanish versions

## 📝 Step-by-Step Customization

### 1. Profile Photo
**File to edit**: `src/assets/profile.jpg`

- Replace the current photo with your professional headshot
- Recommended specifications:
  - Format: JPG or PNG
  - Size: 400x400px minimum
  - Aspect ratio: Square (1:1)
  - Quality: High resolution for crisp display

### 2. Personal Information
**File to edit**: `src/App.jsx`

Find the `content` object and update these sections:

#### Hero Section (Lines ~30-40)
```javascript
hero: {
  title: 'Dr. [Your Full Name]',  // Replace with your name
  subtitle: 'Economist & Researcher',  // Update your title
  description: 'Specializing in [Your Research Areas]...',  // Your specialization
}
```

#### About Section (Lines ~45-55)
```javascript
about: {
  title: 'About Me',
  content: `I am an economist with expertise in [your areas]...`  // Your bio
}
```

### 3. Research Papers
**File to edit**: `src/App.jsx` (Lines ~70-100)

Update the `papers` array with your actual research:

```javascript
papers: [
  {
    title: 'Your Actual Paper Title',
    authors: 'Your Name, Co-Author Names',
    journal: 'Journal Name or "Under Review"',
    year: '2024',
    abstract: 'Your paper abstract...',
    link: 'https://link-to-your-paper.com',  // Add actual link
    type: 'working' // or 'published'
  }
]
```

### 4. CV Information
**File to edit**: `src/App.jsx` (Lines ~110-150)

#### Education
```javascript
educationItems: [
  {
    degree: 'Ph.D. in Economics',
    institution: 'Your University Name',
    year: '2020',
    details: 'Dissertation: "Your Dissertation Title"'
  }
]
```

#### Experience
```javascript
experienceItems: [
  {
    position: 'Your Current Position',
    organization: 'Your Institution',
    period: '2020 - Present',
    description: 'Description of your role...'
  }
]
```

#### Skills
```javascript
skillsItems: [
  'Your Skill 1',
  'Your Skill 2',
  // Add your actual skills
]
```

### 5. Contact Information
**File to edit**: `src/App.jsx` (Lines ~160-170)

```javascript
contact: {
  title: 'Contact Information',
  email: 'your.actual.email@university.edu',
  phone: 'Your Phone Number',
  address: 'Your Department\nYour University\nYour Address',
  office: 'Office: Your Building, Room Number'
}
```

### 6. Spanish Translation
**File to edit**: `src/App.jsx` (Lines ~180-300)

Update the Spanish (`es`) section with translations of all your content:

```javascript
es: {
  hero: {
    title: 'Dr. [Tu Nombre]',
    subtitle: 'Economista e Investigador',
    // ... translate all content
  }
  // ... continue with all sections
}
```

### 7. CV PDF Upload
**Steps**:
1. Add your CV PDF file to the `public/` folder
2. Name it something like `cv-english.pdf` and `cv-spanish.pdf`
3. Update the download links in the component:

```javascript
// Find the CV download buttons and update the href
<Button href="/cv-english.pdf" download>
  Download CV
</Button>
```

### 8. Social Media Links
**File to edit**: `src/App.jsx` (Contact section)

Update the social media buttons with your actual profiles:

```javascript
<Button href="https://linkedin.com/in/your-profile">
  <Linkedin className="w-4 h-4 mr-2" />
  LinkedIn
</Button>
```

## 🎨 Design Customization

### Colors
**File to edit**: `src/App.css`

The website uses CSS custom properties. To change colors:

```css
:root {
  --primary: oklch(0.205 0 0);  /* Main blue color */
  --accent: oklch(0.97 0 0);    /* Light gray */
  /* Update these values for different colors */
}
```

### Fonts
The website uses system fonts. To change:

```css
body {
  font-family: 'Your Preferred Font', sans-serif;
}
```

## 🔗 Adding Your Research Papers

### For each paper, you'll need:
- **Title**: Full paper title
- **Authors**: All author names
- **Journal**: Publication venue or status
- **Year**: Publication year
- **Abstract**: Brief summary
- **Link**: URL to paper (SSRN, journal, personal site)
- **Type**: 'working', 'published', or 'progress'

### Example:
```javascript
{
  title: 'The Impact of Monetary Policy on Regional Employment',
  authors: 'Jane Smith, John Doe',
  journal: 'Journal of Economic Policy',
  year: '2023',
  abstract: 'This paper examines how monetary policy decisions affect regional employment patterns using a novel dataset spanning 20 years...',
  link: 'https://doi.org/10.1234/example',
  type: 'published'
}
```

## 📱 Testing Your Changes

After making changes:

1. **Local testing**:
   ```bash
   npm run dev
   ```
   Open http://localhost:5173 to see your changes

2. **Test both languages**: Click the language switcher (EN/ES)

3. **Test mobile**: Resize your browser window or use developer tools

4. **Test navigation**: Click all menu items to ensure smooth scrolling

## 🚀 Deployment Checklist

Before deploying to GitHub Pages:

- [ ] All personal information updated
- [ ] Profile photo replaced
- [ ] Research papers added
- [ ] CV information complete
- [ ] Contact details correct
- [ ] Spanish translations complete
- [ ] CV PDF uploaded
- [ ] Social media links updated
- [ ] Website tested locally
- [ ] Both languages tested

## 🆘 Common Issues

### Images not showing
- Ensure image files are in `src/assets/`
- Check file names match exactly (case-sensitive)
- Verify image formats (JPG, PNG, WebP supported)

### Content not updating
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check for JavaScript errors in browser console
- Ensure all quotes and brackets are properly closed

### Spanish characters not displaying
- Ensure your editor saves files in UTF-8 encoding
- Use proper HTML entities if needed (á = &aacute;)

## 📞 Need Help?

If you encounter issues:
1. Check the browser console for error messages
2. Verify all file paths are correct
3. Ensure all code syntax is valid
4. Test changes incrementally

Remember: Make small changes and test frequently to identify issues quickly!

