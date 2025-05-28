# Portfolio Website - Lyford Mwanza

## 🌟 Project Description

A modern, responsive portfolio website showcasing the work of Lyford Mwanza - Designer, Developer, and Brand Expert. This single-page application features:

- **Professional showcase** of skills and projects
- **Mobile-first design** with smooth animations
- **Contact form** integrated with Google Forms
- **Performance optimized** with React and Vite

## 🚀 Live Demo

[View Live Portfolio](lyfordmwanza.vercel.app)

## ✨ Key Features

- **Responsive Design**: Looks great on all devices
- **Project Showcase**: Detailed project pages with case studies
- **Contact System**: Form submissions via Google Forms integration
- **Performance**: Fast loading with optimized assets

## 🛠️ Tech Stack

- **Frontend**: React, Vite
- **Styling**: CSS with modern features (variables, grid, flexbox)
- **Routing**: React Router
- **Form Handling**: Google Forms integration
- **Deployment**: Netlify (or your hosting provider)

## 🏗️ Project Structure

```
src/
├── components/       # Reusable components
├── pages/            # Page components
├── data/             # Project data
├── styles/           # Global styles
├── utils/            # Utility functions
├── App.jsx           # Main app component
└── main.jsx          # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lyform/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## 🔧 Configuration

### Google Forms Integration

1. Create your form at [forms.google.com](https://forms.google.com)
2. Update these values in `Contact.jsx`:
   - `YOUR_FORM_ID` (from the form URL)
   - Field IDs (from form HTML or pre-filled link)

### Environment Variables

There are no Environment Variable

## 🎨 Customization

1. **Content**: Update project data in `src/data/projectsData.js`
2. **Styling**: Modify colors in `src/styles/variables.css`
3. **Images**: Replace placeholder images in `public/images/`

## 🌐 Deployment

### Netlify

1. Push your code to GitHub/GitLab
2. Connect your repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel

1. Import your Git repository
2. Keep default settings
3. Deploy!

## 📜 License

MIT License - see [LICENSE](LICENSE) for details.

---

💡 **Tip**: Remember to update the Google Form IDs and test form submissions after deployment!

---

**Created with ❤️ by Lyford Mwanza**  
[View Portfolio](https://alex-rivera-portfolio.netlify.app) | [Contact Me](mailto:lyfordsmwanza13@gmail.com)
