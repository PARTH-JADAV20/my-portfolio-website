import React, { useState, useEffect } from 'react';

// Configuration for each section
const assistantSteps = [
  {
    id: 'welcome',
    sectionId: 'about',
    avatar: '👋',
    message: "Hi! I'm your portfolio guide. Let me walk you through Parth's work and achievements.",
    isWelcome: true,
  },
  {
    id: 'about',
    sectionId: 'about',
    avatar: '💼',
    message: "Meet Parth - a passionate Full Stack Developer with expertise in modern web technologies.",
  },
  {
    id: 'projects',
    sectionId: 'projects',
    avatar: '🚀',
    message: "Check out these projects showcasing real-world applications and problem-solving skills.",
  },
  {
    id: 'certificates',
    sectionId: 'certificates',
    avatar: '🏆',
    message: "Here are the professional certifications and achievements earned along the journey.",
  },
  {
    id: 'skills',
    sectionId: 'skills',
    avatar: '⚡',
    message: "Take a look at the technical skills and tools mastered over time.",
  },
  {
    id: 'education',
    sectionId: 'education',
    avatar: '🎓',
    message: "Educational background and academic achievements that built this foundation.",
  },
  {
    id: 'contact',
    sectionId: 'contact',
    avatar: '📬',
    message: "Ready to connect? Here's how you can get in touch. Let's build something great together!",
  },
];

const Assistant = ({ sectionsTheme }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Show assistant after a brief delay on every page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-detect current section based on scroll position
  useEffect(() => {
    if (!isVisible) return;

    const handleScroll = () => {
      const sections = ['about', 'projects', 'certificates', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          const stepIndex = assistantSteps.findIndex(step => step.sectionId === sections[i]);
          if (stepIndex !== -1 && stepIndex !== currentStep) {
            setCurrentStep(stepIndex);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, currentStep]);

  const handleNext = () => {
    if (currentStep < assistantSteps.length - 1) {
      setIsAnimating(true);
      
      // Fade out
      setTimeout(() => {
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);
        
        // Scroll to the next section
        const targetSection = document.getElementById(assistantSteps[nextStep].sectionId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        setIsAnimating(false);
      }, 200);
    } else {
      // Reached the end
      handleComplete();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setIsAnimating(true);
      
      // Fade out
      setTimeout(() => {
        const prevStep = currentStep - 1;
        setCurrentStep(prevStep);
        
        // Scroll to the previous section
        const targetSection = document.getElementById(assistantSteps[prevStep].sectionId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        setIsAnimating(false);
      }, 200);
    }
  };

  const handleComplete = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 200);
  };

  const handleSkip = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 200);
  };

  if (!isVisible) return null;

  const step = assistantSteps[currentStep];
  const isLastStep = currentStep === assistantSteps.length - 1;

  // Get theme colors for current section
  const getCurrentTheme = () => {
    const sectionId = step.sectionId;
    const theme = sectionsTheme[sectionId] || sectionsTheme.about;
    
    // Extract color from hex thumb value and convert to Tailwind classes
    // This ensures all sections have consistent button colors
    const getColorClasses = (hexColor) => {
      // Map hex colors to their section base color names
      const colorMap = {
        '#ffa366': { bg: 'bg-muted-orange-500', hover: 'hover:bg-muted-orange-600', border: 'border-muted-orange-600', progress: 'bg-muted-orange-600' },
        '#7db67d': { bg: 'bg-muted-green-500', hover: 'hover:bg-muted-green-600', border: 'border-muted-green-600', progress: 'bg-muted-green-600' },
        '#7d9fc1': { bg: 'bg-muted-blue-500', hover: 'hover:bg-muted-blue-600', border: 'border-muted-blue-600', progress: 'bg-muted-blue-600' },
        '#fff166': { bg: 'bg-muted-yellow-500', hover: 'hover:bg-muted-yellow-600', border: 'border-muted-yellow-600', progress: 'bg-muted-yellow-600' },
        '#aa7dc1': { bg: 'bg-muted-purple-500', hover: 'hover:bg-muted-purple-600', border: 'border-muted-purple-600', progress: 'bg-muted-purple-600' },
        '#f16666': { bg: 'bg-muted-red-500', hover: 'hover:bg-muted-red-600', border: 'border-muted-red-600', progress: 'bg-muted-red-600' },
        // Seaside theme
        '#ff9900': { bg: 'bg-muted-amber-500', hover: 'hover:bg-muted-amber-600', border: 'border-muted-amber-600', progress: 'bg-muted-amber-600' },
        '#1d9b97': { bg: 'bg-muted-teal-500', hover: 'hover:bg-muted-teal-600', border: 'border-muted-teal-600', progress: 'bg-muted-teal-600' },
        '#339cf5': { bg: 'bg-muted-sky-500', hover: 'hover:bg-muted-sky-600', border: 'border-muted-sky-600', progress: 'bg-muted-sky-600' },
        '#f56f88': { bg: 'bg-muted-rose-500', hover: 'hover:bg-muted-rose-600', border: 'border-muted-rose-600', progress: 'bg-muted-rose-600' },
        '#9aac45': { bg: 'bg-muted-olive-500', hover: 'hover:bg-muted-olive-600', border: 'border-muted-olive-600', progress: 'bg-muted-olive-600' },
        '#aa8f47': { bg: 'bg-muted-sand-500', hover: 'hover:bg-muted-sand-600', border: 'border-muted-sand-600', progress: 'bg-muted-sand-600' },
        // Festival theme
        '#f77f66': { bg: 'bg-muted-coral-500', hover: 'hover:bg-muted-coral-600', border: 'border-muted-coral-600', progress: 'bg-muted-coral-600' },
        '#2bbfe8': { bg: 'bg-muted-aqua-500', hover: 'hover:bg-muted-aqua-600', border: 'border-muted-aqua-600', progress: 'bg-muted-aqua-600' },
        '#a782f5': { bg: 'bg-muted-lilac-500', hover: 'hover:bg-muted-lilac-600', border: 'border-muted-lilac-600', progress: 'bg-muted-lilac-600' },
        '#758796': { bg: 'bg-muted-steel-500', hover: 'hover:bg-muted-steel-600', border: 'border-muted-steel-600', progress: 'bg-muted-steel-600' },
        '#678c69': { bg: 'bg-muted-forest-500', hover: 'hover:bg-muted-forest-600', border: 'border-muted-forest-600', progress: 'bg-muted-forest-600' },
        '#e99a22': { bg: 'bg-muted-gold-500', hover: 'hover:bg-muted-gold-600', border: 'border-muted-gold-600', progress: 'bg-muted-gold-600' },
      };
      return colorMap[hexColor] || { bg: 'bg-blue-500', hover: 'hover:bg-blue-600', border: 'border-blue-600', progress: 'bg-blue-600' };
    };
    
    const colors = getColorClasses(theme.thumb);
    
    return {
      buttonBg: colors.bg,
      buttonHover: colors.hover,
      buttonBorder: colors.border,
      progressBg: colors.progress,
      cardBorder: theme.cardBorder || theme.mainCardBorder || 'border-gray-300',
      bg: theme.bg || 'bg-white',
    };
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-md w-full mx-4">
      <div
        className={`rounded-lg shadow-2xl border-2 overflow-hidden transition-all duration-200 ${
          isAnimating ? 'opacity-0' : 'opacity-100'
        } ${getCurrentTheme().bg} ${getCurrentTheme().cardBorder}`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-sm font-medium text-gray-700">Portfolio Guide</span>
          </div>
          <button
            onClick={handleSkip}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            title="Skip guide"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex gap-3 mb-4">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 flex items-center justify-center text-2xl">
                {step.avatar}
              </div>
            </div>

            {/* Message */}
            <div className="flex-1 pt-1">
              <p className="text-gray-700 text-sm leading-relaxed">
                {step.message}
              </p>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="mb-3">
            <div className="flex gap-1">
              {assistantSteps.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    index <= currentStep ? getCurrentTheme().progressBg : 'bg-gray-200'
                  }`}
                ></div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-1 text-right">
              {currentStep + 1} of {assistantSteps.length}
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            {!isLastStep ? (
              <>
                {currentStep > 0 && (
                  <button
                    onClick={handlePrev}
                    className={`px-4 py-2 text-sm text-white rounded-md transition-all font-medium border-2 ${getCurrentTheme().buttonBg} ${getCurrentTheme().buttonHover} ${getCurrentTheme().buttonBorder}`}
                  >
                    ← Prev
                  </button>
                )}
                <button
                  onClick={handleSkip}
                  className="flex-1 px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
                >
                  Skip Guide
                </button>
                <button
                  onClick={handleNext}
                  className={`px-4 py-2 text-sm text-white rounded-md transition-all font-medium border-2 ${getCurrentTheme().buttonBg} ${getCurrentTheme().buttonHover} ${getCurrentTheme().buttonBorder}`}
                >
                  Next →
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handlePrev}
                  className={`px-4 py-2 text-sm text-white rounded-md transition-all font-medium border-2 ${getCurrentTheme().buttonBg} ${getCurrentTheme().buttonHover} ${getCurrentTheme().buttonBorder}`}
                >
                  ← Prev
                </button>
                <button
                  onClick={handleComplete}
                  className={`flex-1 px-4 py-2 text-sm text-white rounded-md transition-all font-medium border-2 ${getCurrentTheme().buttonBg} ${getCurrentTheme().buttonHover} ${getCurrentTheme().buttonBorder}`}
                >
                  Finish ✓
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistant;
