import React, { useEffect, useState, useMemo } from 'react';
import Header from './Components/Header.jsx';
import About from './Components/About.jsx';
import Projects from './Components/Projects.jsx';
import Skills from './Components/Skills.jsx';
import Education from './Components/Education.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
import Certificates from './Components/Certificates.jsx';
import { Helmet } from "react-helmet-async";

// Section Divider Component
const SectionDivider = ({ color = "text-gray-300" }) => (
  <div className="relative py-8">
    <div className="flex items-center justify-center gap-4">
      <div className={`h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-gray-300`}></div>
      <div className={`w-2 h-2 rounded-full ${color} bg-current`}></div>
      <div className={`w-3 h-3 rounded-full ${color} bg-current`}></div>
      <div className={`w-2 h-2 rounded-full ${color} bg-current`}></div>
      <div className={`h-px flex-1 bg-gradient-to-l from-transparent via-gray-300 to-gray-300`}></div>
    </div>
  </div>
);

function App() {
  const themes = useMemo(
    () => [
      {
        name: 'Sunrise',
        sections: {
          about: {
            bg: 'bg-muted-orange-50',
            pillBg: 'bg-muted-orange-200',
            pillBorder: 'border-muted-orange-300',
            pillText: 'text-muted-orange-700',
            accentText: 'text-muted-orange-600',
            primaryBg: 'bg-muted-orange-500',
            primaryHover: 'hover:bg-muted-orange-600',
            primaryBorder: 'border-muted-orange-600',
            secondaryBorder: 'border-muted-orange-300',
            secondaryHoverBorder: 'hover:border-muted-orange-500',
            secondaryHoverText: 'hover:text-muted-orange-600',
            secondaryHoverBg: 'hover:bg-muted-orange-100',
            ringBg: 'bg-muted-orange-200',
            ringBorder: 'border-muted-orange-300',
            avatarBorder: 'border-muted-orange-300',
            dot: 'text-muted-orange-400',
            thumb: '#ffa366',
            track: '#fff5e6',
          },
          projects: {
            bg: 'bg-muted-green-50',
            icon: 'text-muted-green-600',
            cardBorder: 'border-muted-green-200',
            cardHover: 'hover:border-muted-green-400',
            mediaBg: 'bg-muted-green-100',
            tagBg: 'bg-muted-green-100',
            tagText: 'text-muted-green-700',
            tagBorder: 'border-muted-green-200',
            link: 'text-muted-green-600',
            linkHover: 'hover:text-muted-green-700',
            dot: 'text-muted-green-400',
            thumb: '#7db67d',
            track: '#f0f7f0',
          },
          certificates: {
            bg: 'bg-muted-blue-50',
            icon: 'text-muted-blue-600',
            buttonBg: 'bg-muted-blue-500',
            buttonHover: 'hover:bg-muted-blue-600',
            buttonBorder: 'border-muted-blue-600',
            sideCardBorder: 'border-muted-blue-200',
            mainCardBorder: 'border-muted-blue-400',
            mediaBg: 'bg-muted-blue-100',
            navBg: 'bg-muted-blue-500',
            navHover: 'hover:bg-muted-blue-600',
            navBorder: 'border-muted-blue-600',
            dot: 'text-muted-blue-400',
            thumb: '#7d9fc1',
            track: '#f0f4f8',
          },
          skills: {
            bg: 'bg-muted-yellow-50',
            icon: 'text-muted-yellow-600',
            cardBorder: 'border-muted-yellow-200',
            cardHover: 'hover:border-muted-yellow-400',
            hoverText: 'group-hover:text-muted-yellow-700',
            dot: 'text-muted-yellow-400',
            thumb: '#fff166',
            track: '#fffef0',
          },
          education: {
            bg: 'bg-muted-purple-50',
            icon: 'text-muted-purple-600',
            cardBorder: 'border-muted-purple-200',
            cardHover: 'hover:border-muted-purple-400',
            yearText: 'text-muted-purple-600',
            dot: 'text-muted-purple-400',
            thumb: '#aa7dc1',
            track: '#f5f0f8',
          },
          contact: {
            bg: 'bg-muted-red-50',
            icon: 'text-muted-red-600',
            cardBorder: 'border-muted-red-200',
            cardHover: 'hover:border-muted-red-400',
            cardHoverBg: 'hover:bg-muted-red-100',
            textHover: 'group-hover:text-muted-red-700',
            dot: 'text-muted-red-400',
            thumb: '#f16666',
            track: '#fef0f0',
          },
        },
      },
      {
        name: 'Seaside',
        sections: {
          about: {
            bg: 'bg-muted-amber-50',
            pillBg: 'bg-muted-amber-200',
            pillBorder: 'border-muted-amber-300',
            pillText: 'text-muted-amber-700',
            accentText: 'text-muted-amber-600',
            primaryBg: 'bg-muted-amber-500',
            primaryHover: 'hover:bg-muted-amber-600',
            primaryBorder: 'border-muted-amber-600',
            secondaryBorder: 'border-muted-amber-300',
            secondaryHoverBorder: 'hover:border-muted-amber-500',
            secondaryHoverText: 'hover:text-muted-amber-600',
            secondaryHoverBg: 'hover:bg-muted-amber-100',
            ringBg: 'bg-muted-amber-200',
            ringBorder: 'border-muted-amber-300',
            avatarBorder: 'border-muted-amber-300',
            dot: 'text-muted-amber-400',
            thumb: '#ff9900',
            track: '#fff8e6',
          },
          projects: {
            bg: 'bg-muted-teal-50',
            icon: 'text-muted-teal-600',
            cardBorder: 'border-muted-teal-200',
            cardHover: 'hover:border-muted-teal-400',
            mediaBg: 'bg-muted-teal-100',
            tagBg: 'bg-muted-teal-100',
            tagText: 'text-muted-teal-700',
            tagBorder: 'border-muted-teal-200',
            link: 'text-muted-teal-600',
            linkHover: 'hover:text-muted-teal-700',
            dot: 'text-muted-teal-400',
            thumb: '#1d9b97',
            track: '#e6f6f5',
          },
          certificates: {
            bg: 'bg-muted-sky-50',
            icon: 'text-muted-sky-600',
            buttonBg: 'bg-muted-sky-500',
            buttonHover: 'hover:bg-muted-sky-600',
            buttonBorder: 'border-muted-sky-600',
            sideCardBorder: 'border-muted-sky-200',
            mainCardBorder: 'border-muted-sky-400',
            mediaBg: 'bg-muted-sky-100',
            navBg: 'bg-muted-sky-500',
            navHover: 'hover:bg-muted-sky-600',
            navBorder: 'border-muted-sky-600',
            dot: 'text-muted-sky-400',
            thumb: '#339cf5',
            track: '#eaf6ff',
          },
          skills: {
            bg: 'bg-muted-rose-50',
            icon: 'text-muted-rose-600',
            cardBorder: 'border-muted-rose-200',
            cardHover: 'hover:border-muted-rose-400',
            hoverText: 'group-hover:text-muted-rose-700',
            dot: 'text-muted-rose-400',
            thumb: '#f56f88',
            track: '#fff1f3',
          },
          education: {
            bg: 'bg-muted-olive-50',
            icon: 'text-muted-olive-600',
            cardBorder: 'border-muted-olive-200',
            cardHover: 'hover:border-muted-olive-400',
            yearText: 'text-muted-olive-600',
            dot: 'text-muted-olive-400',
            thumb: '#9aac45',
            track: '#f5f7e9',
          },
          contact: {
            bg: 'bg-muted-sand-50',
            icon: 'text-muted-sand-600',
            cardBorder: 'border-muted-sand-200',
            cardHover: 'hover:border-muted-sand-400',
            cardHoverBg: 'hover:bg-muted-sand-100',
            textHover: 'group-hover:text-muted-sand-700',
            dot: 'text-muted-sand-400',
            thumb: '#aa8f47',
            track: '#f7f2eb',
          },
        },
      },
      {
        name: 'Festival',
        sections: {
          about: {
            bg: 'bg-muted-coral-50',
            pillBg: 'bg-muted-coral-200',
            pillBorder: 'border-muted-coral-300',
            pillText: 'text-muted-coral-700',
            accentText: 'text-muted-coral-600',
            primaryBg: 'bg-muted-coral-500',
            primaryHover: 'hover:bg-muted-coral-600',
            primaryBorder: 'border-muted-coral-600',
            secondaryBorder: 'border-muted-coral-300',
            secondaryHoverBorder: 'hover:border-muted-coral-500',
            secondaryHoverText: 'hover:text-muted-coral-600',
            secondaryHoverBg: 'hover:bg-muted-coral-100',
            ringBg: 'bg-muted-coral-200',
            ringBorder: 'border-muted-coral-300',
            avatarBorder: 'border-muted-coral-300',
            dot: 'text-muted-coral-400',
            thumb: '#f77f66',
            track: '#fff0ec',
          },
          projects: {
            bg: 'bg-muted-aqua-50',
            icon: 'text-muted-aqua-600',
            cardBorder: 'border-muted-aqua-200',
            cardHover: 'hover:border-muted-aqua-400',
            mediaBg: 'bg-muted-aqua-100',
            tagBg: 'bg-muted-aqua-100',
            tagText: 'text-muted-aqua-700',
            tagBorder: 'border-muted-aqua-200',
            link: 'text-muted-aqua-600',
            linkHover: 'hover:text-muted-aqua-700',
            dot: 'text-muted-aqua-400',
            thumb: '#2bbfe8',
            track: '#e8fbff',
          },
          certificates: {
            bg: 'bg-muted-lilac-50',
            icon: 'text-muted-lilac-600',
            buttonBg: 'bg-muted-lilac-500',
            buttonHover: 'hover:bg-muted-lilac-600',
            buttonBorder: 'border-muted-lilac-600',
            sideCardBorder: 'border-muted-lilac-200',
            mainCardBorder: 'border-muted-lilac-400',
            mediaBg: 'bg-muted-lilac-100',
            navBg: 'bg-muted-lilac-500',
            navHover: 'hover:bg-muted-lilac-600',
            navBorder: 'border-muted-lilac-600',
            dot: 'text-muted-lilac-400',
            thumb: '#a782f5',
            track: '#f8f3ff',
          },
          skills: {
            bg: 'bg-muted-steel-50',
            icon: 'text-muted-steel-600',
            cardBorder: 'border-muted-steel-200',
            cardHover: 'hover:border-muted-steel-400',
            hoverText: 'group-hover:text-muted-steel-700',
            dot: 'text-muted-steel-400',
            thumb: '#758796',
            track: '#f2f5f7',
          },
          education: {
            bg: 'bg-muted-forest-50',
            icon: 'text-muted-forest-600',
            cardBorder: 'border-muted-forest-200',
            cardHover: 'hover:border-muted-forest-400',
            yearText: 'text-muted-forest-600',
            dot: 'text-muted-forest-400',
            thumb: '#678c69',
            track: '#ecf4ed',
          },
          contact: {
            bg: 'bg-muted-gold-50',
            icon: 'text-muted-gold-600',
            cardBorder: 'border-muted-gold-200',
            cardHover: 'hover:border-muted-gold-400',
            cardHoverBg: 'hover:bg-muted-gold-100',
            textHover: 'group-hover:text-muted-gold-700',
            dot: 'text-muted-gold-400',
            thumb: '#e99a22',
            track: '#fff8eb',
          },
        },
      },
    ],
    []
  );

  const [themeIndex, setThemeIndex] = useState(0);

  const cycleTheme = () => {
    setThemeIndex((current) => (current + 1) % themes.length);
  };

  useEffect(() => {
    const sectionColors = Object.fromEntries(
      Object.entries(themes[themeIndex].sections).map(([key, val]) => [key, { thumb: val.thumb, track: val.track }])
    );

    const root = document.documentElement;
    const setScrollbarColors = (thumb, track) => {
      root.style.setProperty('--scrollbar-thumb', thumb);
      root.style.setProperty('--scrollbar-track', track);
    };

    const observedSections = Object.keys(sectionColors)
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((s) => s.el);

    if (!observedSections.length) return undefined;

    // Set initial colors to the first section found
    const initial = observedSections[0];
    setScrollbarColors(
      sectionColors[initial.id].thumb,
      sectionColors[initial.id].track
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const centerY = window.innerHeight / 2;

        // Pick the observed section whose center is closest to the viewport center among visible ones
        const best = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => {
            const rect = entry.target.getBoundingClientRect();
            const distance = Math.abs(rect.top + rect.height / 2 - centerY);
            return { entry, distance };
          })
          .sort((a, b) => a.distance - b.distance)[0];

        const target = best?.entry;
        if (!target) return;

        const colors = sectionColors[target.target.id];
        if (colors) setScrollbarColors(colors.thumb, colors.track);
      },
      {
        rootMargin: '-10% 0px -10% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    observedSections.forEach(({ el }) => observer.observe(el));

    return () => observer.disconnect();
  }, [themeIndex, themes]);

  const current = themes[themeIndex].sections;

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        {/* Primary SEO */}
        <title>Parth Jadav | Full Stack Developer Portfolio</title>

        <meta
          name="description"
          content="Parth Jadav is a Full Stack Developer skilled in React, Node.js, MongoDB. Explore projects, skills, and certificates."
        />

        <meta
          name="keywords"
          content="Parth Jadav, Parth Jadav Portfolio, Parth Jadav Developer, Parth Jadav CodingGita"
        />

        <meta name="author" content="Parth Jadav" />

        {/* Viewport & Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://parth-jadav-portfolio.vercel.app/"
        />

        {/* Open Graph (for sharing) */}
        <meta property="og:title" content="Parth Jadav | Full Stack Developer Portfolio" />
        <meta
          property="og:description"
          content="Official portfolio of Parth Jadav, Full Stack Developer skilled in React, Node.js, MongoDB"
        />
        <meta
          property="og:url"
          content="https://parth-jadav-portfolio.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Parth Jadav Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content="https://parth-jadav-portfolio.vercel.app/portfolio-preview.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Parth Jadav | Full Stack Developer" />
        <meta
          name="twitter:description"
          content="Explore my portfolio showcasing full stack development projects and skills"
        />
        <meta
          name="twitter:image"
          content="https://parth-jadav-portfolio.vercel.app/portfolio-preview.jpg"
        />
        <meta name="twitter:creator" content="@parthjadav_2004" />

        {/* Profile Meta Tags */}
        <meta property="profile:first_name" content="Parth" />
        <meta property="profile:last_name" content="Jadav" />
        <meta property="profile:username" content="PARTH-JADAV20" />

        {/* Icons */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Parth Jadav",
          "url": "https://parth-jadav-portfolio.vercel.app/",
          "jobTitle": "Full Stack Developer",
          "image": "https://parth-jadav-portfolio.vercel.app/portfolio-preview.jpg",
          "sameAs": [
            "https://github.com/PARTH-JADAV20",
            "https://www.linkedin.com/in/jadav-parth/",
            "https://x.com/Parthjadav_2004",
            "https://leetcode.com/u/Jadav_Parth/"
          ],
          "knowsAbout": [
            "React",
            "Node.js",
            "MongoDB",
            "JavaScript",
            "Full Stack Development",
            "Web Development",
            "Backend Development"
          ]
        }
        `}
      </script>
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Parth Jadav",
          "url": "https://parth-jadav-portfolio.vercel.app/"
        }
        `}
        </script>
      </Helmet>

      <Header
        onThemeToggle={cycleTheme}
        themeName={themes[themeIndex].name}
        sectionsTheme={current}
      />
      <About theme={current.about} />
      <SectionDivider color={current.projects.dot} />
      <Projects theme={current.projects} />
      <SectionDivider color={current.certificates.dot} />
      <Certificates theme={current.certificates} />
      <SectionDivider color={current.skills.dot} />
      <Skills theme={current.skills} />
      <SectionDivider color={current.education.dot} />
      <Education theme={current.education} />
      <SectionDivider color={current.contact.dot} />
      <Contact theme={current.contact} />
      <Footer />
    </div>
  );
}

export default App;
