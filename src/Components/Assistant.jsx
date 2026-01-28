import React, { useState, useEffect } from 'react';
import welcomeAvatar from '../images/avatar/welcome.png';
import aboutAvatar from '../images/avatar/about.png';
import projectsAvatar from '../images/avatar/projects.png';
import certificateAvatar from '../images/avatar/certificate.png';
import skillsAvatar from '../images/avatar/skills.png';
import educationAvatar from '../images/avatar/education.png';
import contactAvatar from '../images/avatar/contact section.png';

// Configuration for each section
const assistantSteps = [
    {
        id: 'welcome',
        sectionId: 'about',
        message: "Hey 👋 glad you’re here. Let me quickly show you around and highlight what matters most.",
        isWelcome: true,
    },
    {
        id: 'about',
        sectionId: 'about',
        message: "This is a bit about me — what I do, what I enjoy building, and how I think as a developer.",
    },
    {
        id: 'projects',
        sectionId: 'projects',
        message: "These are some projects I’ve built — each one taught me something new and solved a real problem.",
    },
    {
        id: 'certificates',
        sectionId: 'certificates',
        message: "These certifications reflect the areas I’ve focused on strengthening and learning deeply.",
    },
    {
        id: 'skills',
        sectionId: 'skills',
        message: "These are the tools and technologies I’m comfortable working with on a daily basis.",
    },
    {
        id: 'education',
        sectionId: 'education',
        message: "This is where my foundation comes from — the learning that shaped how I think and solve problems.",
    },
    {
        id: 'contact',
        sectionId: 'contact',
        message: "If you like what you’ve seen, let’s connect and build something meaningful together.",
    },
];

const avatarMap = {
    welcome: welcomeAvatar,
    about: aboutAvatar,
    projects: projectsAvatar,
    certificates: certificateAvatar,
    skills: skillsAvatar,
    education: educationAvatar,
    contact: contactAvatar,
};

const Assistant = ({ sectionsTheme }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [currentSectionId, setCurrentSectionId] = useState('about');
    const [welcomeShown, setWelcomeShown] = useState(false);

    useEffect(() => {
        // Show assistant after a brief delay on every page load
        const timer = setTimeout(() => {
            setIsOpen(true);
            setWelcomeShown(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // Auto-detect current section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'projects', 'certificates', 'skills', 'education', 'contact'];
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setCurrentSectionId(sections[i]);
                    const stepIndex = assistantSteps.findIndex(step => step.sectionId === sections[i]);
                    // Skip step 0 (welcome) if it has already been shown
                    if (stepIndex !== -1 && stepIndex !== currentStep) {
                        const targetStep = welcomeShown && stepIndex === 0 ? 1 : stepIndex;
                        setCurrentStep(targetStep);
                    }
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentStep]);

    const handleNext = () => {
        if (currentStep < assistantSteps.length - 1) {
            setIsAnimating(true);

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
            handleComplete();
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setIsAnimating(true);

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
            setIsOpen(false);
            setIsAnimating(false);
        }, 200);
    };

    const handleSkip = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsAnimating(false);
        }, 200);
    };

    const handleReopen = () => {
        setIsOpen(true);
    };

    const step = assistantSteps[currentStep];
    const avatarSrc = avatarMap[step.id] || avatarMap[step.sectionId] || avatarMap.welcome;
    const isLastStep = currentStep === assistantSteps.length - 1;

    // Get theme colors for current section
    const getCurrentTheme = () => {
        let sectionId = currentSectionId;
        
        if (isOpen) {
            sectionId = step.sectionId;
        } else {
            // When panel is closed, detect section at viewport center (most visible section)
            const sections = ['about', 'projects', 'certificates', 'skills', 'education', 'contact'];
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    sectionId = sections[i];
                    break;
                }
            }
        }
        
        const theme = sectionsTheme[sectionId] || sectionsTheme.about;

        const getColorClasses = (hexColor) => {
            const colorMap = {
                '#ffa366': { bg: 'bg-muted-orange-50', hover: 'hover:bg-muted-orange-600', border: 'border-muted-orange-600', progress: 'bg-muted-orange-600', btn: 'bg-muted-orange-500', text: 'text-muted-orange-600' },
                '#7db67d': { bg: 'bg-muted-green-50', hover: 'hover:bg-muted-green-600', border: 'border-muted-green-600', progress: 'bg-muted-green-600', btn: 'bg-muted-green-500', text: 'text-muted-green-600' },
                '#7d9fc1': { bg: 'bg-muted-blue-50', hover: 'hover:bg-muted-blue-600', border: 'border-muted-blue-600', progress: 'bg-muted-blue-600', btn: 'bg-muted-blue-500', text: 'text-muted-blue-600' },
                '#fff166': { bg: 'bg-muted-yellow-50', hover: 'hover:bg-muted-yellow-600', border: 'border-muted-yellow-600', progress: 'bg-muted-yellow-600', btn: 'bg-muted-yellow-500', text: 'text-muted-yellow-600' },
                '#aa7dc1': { bg: 'bg-muted-purple-50', hover: 'hover:bg-muted-purple-600', border: 'border-muted-purple-600', progress: 'bg-muted-purple-600', btn: 'bg-muted-purple-500', text: 'text-muted-purple-600' },
                '#f16666': { bg: 'bg-muted-red-50', hover: 'hover:bg-muted-red-600', border: 'border-muted-red-600', progress: 'bg-muted-red-600', btn: 'bg-muted-red-500', text: 'text-muted-red-600' },
                '#ff9900': { bg: 'bg-muted-amber-50', hover: 'hover:bg-muted-amber-600', border: 'border-muted-amber-600', progress: 'bg-muted-amber-600', btn: 'bg-muted-amber-500', text: 'text-muted-amber-600' },
                '#1d9b97': { bg: 'bg-muted-teal-50', hover: 'hover:bg-muted-teal-600', border: 'border-muted-teal-600', progress: 'bg-muted-teal-600', btn: 'bg-muted-teal-500', text: 'text-muted-teal-600' },
                '#339cf5': { bg: 'bg-muted-sky-50', hover: 'hover:bg-muted-sky-600', border: 'border-muted-sky-600', progress: 'bg-muted-sky-600', btn: 'bg-muted-sky-500', text: 'text-muted-sky-600' },
                '#f56f88': { bg: 'bg-muted-rose-50', hover: 'hover:bg-muted-rose-600', border: 'border-muted-rose-600', progress: 'bg-muted-rose-600', btn: 'bg-muted-rose-500', text: 'text-muted-rose-600' },
                '#9aac45': { bg: 'bg-muted-olive-50', hover: 'hover:bg-muted-olive-600', border: 'border-muted-olive-600', progress: 'bg-muted-olive-600', btn: 'bg-muted-olive-500', text: 'text-muted-olive-600' },
                '#aa8f47': { bg: 'bg-muted-sand-50', hover: 'hover:bg-muted-sand-600', border: 'border-muted-sand-600', progress: 'bg-muted-sand-600', btn: 'bg-muted-sand-500', text: 'text-muted-sand-600' },
                '#f77f66': { bg: 'bg-muted-coral-50', hover: 'hover:bg-muted-coral-600', border: 'border-muted-coral-600', progress: 'bg-muted-coral-600', btn: 'bg-muted-coral-500', text: 'text-muted-coral-600' },
                '#2bbfe8': { bg: 'bg-muted-aqua-50', hover: 'hover:bg-muted-aqua-600', border: 'border-muted-aqua-600', progress: 'bg-muted-aqua-600', btn: 'bg-muted-aqua-500', text: 'text-muted-aqua-600' },
                '#a782f5': { bg: 'bg-muted-lilac-50', hover: 'hover:bg-muted-lilac-600', border: 'border-muted-lilac-600', progress: 'bg-muted-lilac-600', btn: 'bg-muted-lilac-500', text: 'text-muted-lilac-600' },
                '#758796': { bg: 'bg-muted-steel-50', hover: 'hover:bg-muted-steel-600', border: 'border-muted-steel-600', progress: 'bg-muted-steel-600', btn: 'bg-muted-steel-500', text: 'text-muted-steel-600' },
                '#678c69': { bg: 'bg-muted-forest-50', hover: 'hover:bg-muted-forest-600', border: 'border-muted-forest-600', progress: 'bg-muted-forest-600', btn: 'bg-muted-forest-500', text: 'text-muted-forest-600' },
                '#e99a22': { bg: 'bg-muted-gold-50', hover: 'hover:bg-muted-gold-600', border: 'border-muted-gold-600', progress: 'bg-muted-gold-600', btn: 'bg-muted-gold-500', text: 'text-muted-gold-600' },
            };
            return colorMap[hexColor] || { bg: 'bg-white', hover: 'hover:bg-blue-600', border: 'border-blue-600', progress: 'bg-blue-600', btn: 'bg-blue-500', text: 'text-blue-600' };
        };

        const colors = getColorClasses(theme.thumb);

        return {
            bg: colors.bg,
            buttonBg: colors.btn,
            buttonHover: colors.hover,
            buttonBorder: colors.border,
            progressBg: colors.progress,
            text: colors.text,
            cardBorder: theme.cardBorder || theme.mainCardBorder || 'border-gray-300',
        };
    };

    const currentTheme = getCurrentTheme();

    return (
        <>
            {/* Floating Reopen Button */}
            {!isOpen && (
                <button
                    onClick={handleReopen}
                    className={`fixed bottom-6 right-6 z-50 p-2 rounded-full shadow-lg border-2 text-white transition-all hover:scale-110 ${currentTheme.buttonBg} ${currentTheme.buttonHover} ${currentTheme.buttonBorder}`}
                    title="Open Guide"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </button>
            )}

            {/* Blur Backdrop for Welcome */}
            {isOpen && currentStep === 0 && (
                <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-all duration-200"></div>
            )}

            {/* Main Assistant Panel */}
            {isOpen && (
                <div className={`fixed left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] sm:w-full sm:max-w-md mx-auto transition-all duration-300 ${
                    currentStep === 0 
                        ? 'top-1/2 -translate-y-1/2' 
                        : 'bottom-4 sm:bottom-6'
                }`}>
                    <div
                        className={`rounded-lg shadow-2xl border-2 overflow-hidden transition-all duration-200 ${isAnimating ? 'opacity-0' : 'opacity-100'
                            } ${currentTheme.bg} ${currentTheme.cardBorder}`}
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-200 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${currentTheme.buttonBg}`}></div>
                                <span className="text-xs sm:text-sm font-medium text-gray-700">Let me show you around</span>
                            </div>
                            <button
                                onClick={handleSkip}
                                className={`p-1 rounded-md border-2 transition-all ${currentTheme.bg} ${currentTheme.buttonBorder} ${currentTheme.text} hover:scale-110`}
                                title="Close guide"
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
                        <div className="p-3 sm:p-4">
                            <div className="flex gap-2 sm:gap-3 mb-3 sm:mb-4">
                                {/* Avatar */}
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 min-w-[3rem] min-h-[3rem] max-w-[3rem] max-h-[3rem]
     rounded-md border-2 overflow-hidden bg-white shadow-sm flex items-center justify-center">
                                        <img
                                            key={step.id}
                                            src={avatarSrc}
                                            alt="avatar"
                                            className="block w-full h-full object-contain"
                                            loading="eager"
                                            decoding="sync"
                                        />

                                    </div>
                                </div>

                                {/* Message */}
                                <div className="flex-1 pt-0 sm:pt-1">
                                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                                        {step.message}
                                    </p>
                                </div>
                            </div>

                            {/* Progress indicator - hidden for welcome */}
                            {currentStep > 0 && (
                            <div className="mb-3">
                                <div className="flex gap-1">
                                    {assistantSteps.slice(1).map((_, index) => (
                                        <div
                                            key={index}
                                            className={`h-1 flex-1 rounded-full transition-colors ${
                                                index + 1 <= currentStep ? currentTheme.progressBg : 'bg-gray-200'
                                            }`}
                                        ></div>
                                    ))}
                                </div>
                                <p className="text-[10px] sm:text-xs text-gray-500 mt-1 text-right">
                                    {currentStep} of {assistantSteps.length - 1}
                                </p>
                            </div>
                            )}

                            {/* Actions */}
                            <div className="flex gap-1 sm:gap-2">
                                {currentStep > 0 && (
                                    <button
                                        onClick={handlePrev}
                                        className={`px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-white rounded-md transition-all font-medium border-2 ${currentTheme.buttonBg} ${currentTheme.buttonHover} ${currentTheme.buttonBorder}`}
                                    >
                                        ← Prev
                                    </button>
                                )}
                                {!isLastStep ? (
                                    <>
                                        <button
                                            onClick={handleSkip}
                                            className={`flex-1 px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md border-2 transition-all ${currentTheme.bg} ${currentTheme.buttonBorder} ${currentTheme.text} hover:scale-105`}
                                        >
                                            Close
                                        </button>
                                        <button
                                            onClick={handleNext}
                                            className={`px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-white rounded-md transition-all font-medium border-2 ${currentTheme.buttonBg} ${currentTheme.buttonHover} ${currentTheme.buttonBorder}`}
                                        >
                                            Next →
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        onClick={handleComplete}
                                        className={`flex-1 px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-white rounded-md transition-all font-medium border-2 ${currentTheme.buttonBg} ${currentTheme.buttonHover} ${currentTheme.buttonBorder}`}
                                    >
                                        Finish ✓
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Assistant;
