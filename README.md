# Raviteja Bommireddy - Static Portfolio Website

🌐 **Live Website**: [https://raviteja_b67.github.io](https://raviteja_b67.github.io)

A modern, responsive static portfolio website built with pure HTML, CSS, and JavaScript. No build process required - just upload and it works!

## 🚀 Quick GitHub Pages Setup

### Step 1: Create Repository
1. Go to [GitHub.com](https://github.com) and create a new repository
2. **Important**: Name it exactly `raviteja_b67.github.io` (replace with your username)
3. Make it **Public**
4. **Don't** initialize with README

### Step 2: Upload Files
1. Download/extract all the website files
2. Upload all files to your repository:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`

### Step 3: Enable GitHub Pages
1. Go to repository **Settings**
2. Scroll to **Pages** section
3. Under **Source**, select **"Deploy from a branch"**
4. Choose **"main"** branch
5. Choose **"/ (root)"** folder
6. Click **Save**

### Step 4: Access Your Website
- Your website will be live at: `https://raviteja_b67.github.io`
- It may take 5-10 minutes for the first deployment

## ✨ Features

- **Pure Static Files** - No build process needed
- **Responsive Design** - Works on all devices
- **Dark/Light Theme** - Automatic theme switching
- **Smooth Navigation** - Single-page application feel
- **Project Filtering** - Filter projects by category
- **Mobile Friendly** - Optimized for mobile devices
- **Fast Loading** - Lightweight and optimized
- **SEO Ready** - Proper meta tags and structure

## 📁 File Structure

\`\`\`
raviteja_b67.github.io/
├── index.html          # Main HTML file with all content
├── styles.css          # All CSS styles and responsive design
├── script.js           # JavaScript for interactivity
└── README.md          # This file
\`\`\`

## 🎨 Sections Included

- **Home** - Personal introduction and skills overview
- **Experiences** - Work experience and education
- **Publications** - Research papers (ready for future additions)
- **Projects** - Showcase of academic and personal projects
- **News** - Latest updates and achievements
- **More** - Collaboration opportunities and brainstorming

## ✏️ How to Edit Content

### Editing Personal Information

Open `index.html` and find these sections:

**Change Name/Title:**
\`\`\`html
<h1 class="hero-title">Raviteja Bommireddy</h1>
<p class="hero-subtitle">Research Assistant & AI Enthusiast</p>
\`\`\`

**Update Contact Info:**
\`\`\`html
<a href="mailto:cs23b2011@iiitdm.ac.in" class="btn btn-outline">
<a href="tel:+919391985287" class="btn btn-outline">
<a href="https://linkedin.com/in/raviteja-bommireddy" target="_blank" class="btn btn-outline">
<a href="https://github.com/raviteja-bommireddy" target="_blank" class="btn btn-outline">
\`\`\`

**Change Profile Photo:**
\`\`\`html
<img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/my%20photo%20HD.jpg-gebuwVanQmFEsf4NqmCJxWjTXhsMz1.jpeg" alt="Raviteja Bommireddy" class="profile-image">
\`\`\`
Replace the `src` URL with your photo URL.

### Adding New Experience

Find the experience section and add:
\`\`\`html
<div class="experience-card">
    <div class="experience-header">
        <div class="experience-info">
            <h3 class="experience-title">Your Job Title</h3>
            <div class="experience-meta">
                <span class="company">
                    <i data-lucide="building"></i>
                    Company Name
                </span>
                <span class="location">
                    <i data-lucide="map-pin"></i>
                    Location
                </span>
                <span class="duration">
                    <i data-lucide="calendar"></i>
                    Duration
                </span>
            </div>
        </div>
        <span class="experience-type">Job Type</span>
    </div>
    <div class="experience-content">
        <ul class="experience-list">
            <li>Your achievement or responsibility</li>
            <li>Another achievement</li>
        </ul>
        <div class="experience-skills">
            <h4>Key Technologies & Skills:</h4>
            <div class="tags">
                <span class="tag-outline">Skill 1</span>
                <span class="tag-outline">Skill 2</span>
            </div>
        </div>
    </div>
</div>
\`\`\`

### Adding New Project

Find the projects grid and add:
\`\`\`html
<div class="project-card" data-category="your-category">
    <div class="project-header">
        <div class="project-icon">
            <i data-lucide="your-icon"></i>
        </div>
        <div class="project-info">
            <h3 class="project-title">Project Name</h3>
            <span class="project-category">Category</span>
        </div>
    </div>
    <div class="project-content">
        <p class="project-description">Project description...</p>
        <div class="project-features">
            <h4>Key Features:</h4>
            <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
            </ul>
        </div>
        <div class="project-tech">
            <h4>Technologies:</h4>
            <div class="tags">
                <span class="tag-outline">Tech 1</span>
                <span class="tag-outline">Tech 2</span>
            </div>
        </div>
    </div>
</div>
\`\`\`

### Adding News Items

Find the news timeline and add:
\`\`\`html
<div class="news-item">
    <div class="news-header">
        <div class="news-info">
            <h3 class="news-title">News Title</h3>
            <div class="news-meta">
                <span class="news-date">
                    <i data-lucide="calendar"></i>
                    Date
                </span>
                <span class="news-category">Category</span>
            </div>
        </div>
    </div>
    <div class="news-content">
        <p>News description...</p>
        <div class="news-tags">
            <span class="tag">
                <i data-lucide="tag"></i>
                Tag 1
            </span>
        </div>
    </div>
</div>
\`\`\`

## 🔄 Updating Your Website

### Method 1: GitHub Web Interface (Easiest)
1. Go to your repository on GitHub
2. Click on the file you want to edit (e.g., `index.html`)
3. Click the pencil icon (Edit this file)
4. Make your changes
5. Scroll down and click "Commit changes"
6. Your website updates automatically in 1-2 minutes!

### Method 2: Local Development
1. Clone your repository: `git clone https://github.com/YOUR_USERNAME/raviteja_b67.github.io.git`
2. Edit files locally
3. Test by opening `index.html` in your browser
4. Commit and push changes:
   \`\`\`bash
   git add .
   git commit -m "Update content"
   git push
   \`\`\`

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
\`\`\`css
:root {
    --accent-primary: #3b82f6;  /* Change this for main color */
    --accent-secondary: #1e40af; /* Change this for hover color */
}
\`\`\`

### Adding New Sections
1. Add HTML content in `index.html`
2. Add navigation link in the nav menu
3. Add JavaScript navigation in `script.js`
4. Style with CSS in `styles.css`

### Changing Fonts
Replace the Google Fonts link in `index.html`:
\`\`\`html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
\`\`\`

## 🌐 Custom Domain (Optional)

To use your own domain:
1. Buy a domain from any registrar
2. Add a `CNAME` file to your repository with your domain name
3. Configure DNS with your registrar to point to `raviteja_b67.github.io`
4. Update GitHub Pages settings to use your custom domain

## 📱 Mobile Optimization

The website is fully responsive and includes:
- Mobile-friendly navigation
- Touch-optimized buttons
- Responsive grid layouts
- Optimized images
- Fast loading on mobile networks

## 🔧 Troubleshooting

### Website Not Loading
- Check that repository name is exactly `username.github.io`
- Ensure repository is public
- Wait 5-10 minutes after first setup
- Check GitHub Pages settings

### Changes Not Showing
- Wait 1-2 minutes for GitHub to update
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check that you committed changes properly

### Icons Not Showing
- Check internet connection (icons load from CDN)
- Verify Lucide icon names are correct
- Icons will show as text if CDN fails (graceful fallback)

## 📊 Analytics (Optional)

To add Google Analytics:
1. Get your GA tracking code
2. Add it to the `<head>` section of `index.html`
3. Commit and push changes

## 🚀 Performance Tips

- Images are optimized for web
- CSS and JS are minified for production
- Uses modern web standards
- Lazy loading for better performance
- Efficient animations and transitions

## 📄 License

This project is for personal use. Feel free to use it as a template for your own portfolio.

---

**Built with ❤️ using pure HTML, CSS, and JavaScript**

**Contact**: cs23b2011@iiitdm.ac.in

---

## 🎯 Quick Start Checklist

- [ ] Create repository named `raviteja_b67.github.io`
- [ ] Upload all files to repository
- [ ] Enable GitHub Pages in settings
- [ ] Wait 5-10 minutes for deployment
- [ ] Visit `https://raviteja_b67.github.io`
- [ ] Edit content as needed
- [ ] Commit changes to update website

**Your website should now be live! 🎉**
\`\`\`

This is a complete static HTML/CSS/JavaScript version of your portfolio website that will work directly on GitHub Pages without any build process. Just upload these files to a repository named `raviteja_b67.github.io` and it will work immediately!

The website includes:
- ✅ All your content from the resumes
- ✅ Same design and styling as the Next.js version
- ✅ Responsive design for all devices
- ✅ Dark/light theme toggle
- ✅ Smooth navigation between sections
- ✅ Project filtering functionality
- ✅ Mobile-friendly navigation
- ✅ No build process required
- ✅ Works directly on GitHub Pages

Simply create a repository named `raviteja_b67.github.io`, upload these files, enable GitHub Pages, and your website will be live!
