import React, { useState } from "react";
export default function App() {
    const [activeTab, setActiveTab] = useState("all");

    const studentData = {
        name: "Rakesh Panchariya",
        role: "BBA Business Analytics & FinTech Student",
        university: "MIT Vishwaprayag University, Solapur",
        about: "An ambitious business administration student bridging the gap between core management strategies and modern data analytics. Passionate about financial modeling, digital business transformation, and creating data-driven corporate solutions.",
        skills: {
            management: [
                "Strategic Planning",
                "Market Research",
                "Financial Accounting",
                "Operations Management",
                "Business Communication",
            ],
            analytics: [
                "Data Visualization",
                "Advanced Excel (Workshop Certified)",
                "Python for Finance",
                "SQL Fundamentals",
                "Business Statistics",
            ],
        },
        projects: [
            {
                id: 1,
                title: "Agro-Export Market Feasibility Analysis",
                category: "analytics",
                description:
                    "A comprehensive business analytics project evaluating supply chain bottlenecks and demand forecasting for cold-chain diagnostic reagents and local agricultural exports from the Solapur region.",
                tags: [
                    "Data Analytics",
                    "Market Research",
                    "Excel Forecasting",
                ],
            },
            {
                id: 2,
                title: "FinTech Digital Payments Case Study",
                category: "fintech",
                description:
                    "Analyzed consumer adoption rates and risk mitigation structures in digital peer-to-peer payment infrastructures in Tier-2 cities under the NSE Academy curriculum guidelines.",
                tags: ["FinTech", "Risk Assessment", "Financial Modeling"],
            },
            {
                id: 3,
                title: "Retail Brand Identity & E-Commerce Strategy",
                category: "management",
                description:
                    "Developed a complete go-to-market business blueprint, cost sheets, and a mock web-ordering layout for a regional quick-service food brand startup ('SandWitch').",
                tags: ["Brand Strategy", "Costing", "E-Commerce Architecture"],
            },
        ],
        education: [
            {
                degree: "Bachelor of Business Administration (BBA)",
                spec: "Specialization in Business Analytics & FinTech (In collaboration with NSE Academy)",
                inst: "MIT Vishwaprayag University (MIT VPU), Solapur",
                duration: "2025 - 2028 (Expected)",
                details:
                    "Focusing on data-driven management frameworks, econometrics, macroeconomics, and computational business tools within a state-of-the-art 100-acre digital infrastructure.",
            },
        ],
    };

    const filteredProjects =
        activeTab === "all"
            ? studentData.projects
            : studentData.projects.filter((p) => p.category === activeTab);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-indigo-500 selection:text-white">
            {/* HEADER / NAVIGATION */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <span className="text-xl font-bold bg-gradient-to-r flow-root from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                        {studentData.name}
                    </span>
                    <div className="flex gap-6 text-sm font-medium text-slate-600">
                        <a
                            href="#about"
                            className="hover:text-indigo-600 transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#education"
                            className="hover:text-indigo-600 transition-colors"
                        >
                            Education
                        </a>
                        <a
                            href="#projects"
                            className="hover:text-indigo-600 transition-colors"
                        >
                            Projects
                        </a>
                        <a
                            href="#skills"
                            className="hover:text-indigo-600 transition-colors"
                        >
                            Skills
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-indigo-600 transition-colors"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </nav>

            {/* HERO SECTION */}
            <header
                id="about"
                className="relative py-20 bg-white overflow-hidden"
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-12 gap-12 items-center">
                        <div className="md:col-span-7">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 mb-4 border border-indigo-200">
                                {studentData.university}
                            </span>
                            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4 leading-tight">
                                Shaping Business Decisions Through{" "}
                                <span className="text-indigo-600 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                                    Data & Strategy
                                </span>
                            </h1>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {studentData.about}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#contact"
                                    className="px-6 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all hover:shadow-lg shadow-sm"
                                >
                                    Get In Touch
                                </a>
                                <a
                                    href="#projects"
                                    className="px-6 py-3 rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-slate-200 transition-all"
                                >
                                    View My Work
                                </a>
                            </div>
                        </div>
                        <div className="md:col-span-5 flex justify-center relative">
                            {/* Photo Container with beautiful glowing effects and premium border */}
                            <div className="relative group w-72 h-72 sm:w-80 sm:h-80 md:w-full md:h-[400px] max-w-sm rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] border-4 border-white bg-slate-50">
                                {/* Soft gradient backdrop blur overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-violet-500/10 mix-blend-overlay z-10 pointer-events-none" />
                                <img
                                    src="/src/assets/rakesh.png"
                                    alt={studentData.name}
                                    className="w-full h-full object-contain object-center relative z-0 transition-transform duration-700 group-hover:scale-105"
                                    onError={(e) => {
                                        // Fallback gracefully in case image hasn't been added yet or path is different
                                        e.target.style.display = "none";
                                        e.target.nextSibling.style.display =
                                            "flex";
                                    }}
                                />
                                {/* Elegant placeholder in case image doesn't load or hasn't been uploaded yet */}
                                <div className="hidden absolute inset-0 flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-violet-100 text-slate-400 p-6 text-center select-none">
                                    <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4 shadow-sm border border-indigo-200/50">
                                        <svg
                                            className="w-8 h-8"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="font-semibold text-slate-800 text-sm">
                                        {studentData.name}
                                    </span>
                                    <span className="text-xs text-slate-500 mt-1 max-w-[200px]">
                                        Add your headshot photo at
                                        src/assets/aditya.png to display it here
                                    </span>
                                </div>
                            </div>

                            {/* Decorative modern background elements behind the photo frame */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-full blur-2xl opacity-30 -z-10 group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-300 rounded-full blur-3xl opacity-40 -z-10 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                    </div>
                </div>
                {/* Subtle geometric background decoration */}
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
            </header>

            {/* EDUCATION SECTION */}
            <section
                id="education"
                className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-2">
                    <svg
                        className="w-6 h-6 text-indigo-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="12 14l9-5-9-5-9 5 9 5z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                    </svg>
                    Academic Background
                </h2>
                {studentData.education.map((edu, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">
                                    {edu.degree}
                                </h3>
                                <p className="text-indigo-600 font-medium text-sm mt-0.5">
                                    {edu.spec}
                                </p>
                            </div>
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200 self-start sm:self-auto">
                                {edu.duration}
                            </span>
                        </div>
                        <p className="text-slate-700 text-sm font-semibold mb-2">
                            {edu.inst}
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            {edu.details}
                        </p>
                    </div>
                ))}
            </section>

            {/* CORE SKILLS SECTION */}
            <section
                id="skills"
                className="py-16 bg-white border-y border-slate-200"
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-2">
                        <svg
                            className="w-6 h-6 text-indigo-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        Competency Blueprint
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h3 className="font-bold text-slate-900 mb-4 text-lg border-b border-slate-200 pb-2">
                                Business & Management
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {studentData.skills.management.map(
                                    (skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 bg-white rounded-lg text-sm font-medium text-slate-700 border border-slate-200 shadow-sm"
                                        >
                                            {skill}
                                        </span>
                                    ),
                                )}
                            </div>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h3 className="font-bold text-slate-900 mb-4 text-lg border-b border-slate-200 pb-2">
                                Analytics & Technology
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {studentData.skills.analytics.map(
                                    (skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 bg-indigo-600 rounded-lg text-sm font-medium text-white border border-indigo-700 shadow-sm"
                                        >
                                            {skill}
                                        </span>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECTS SECTION */}
            <section
                id="projects"
                className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                        <svg
                            className="w-6 h-6 text-indigo-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                        </svg>
                        Case Studies & Projects
                    </h2>
                    {/* Tabs */}
                    <div className="flex bg-slate-200/60 p-1 rounded-xl text-xs font-semibold border border-slate-300/40">
                        {["all", "management", "analytics", "fintech"].map(
                            (tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-3 py-1.5 rounded-lg capitalize transition-all ${
                                        activeTab === tab
                                            ? "bg-white text-slate-900 shadow-sm"
                                            : "text-slate-600 hover:text-slate-900"
                                    }`}
                                >
                                    {tab}
                                </button>
                            ),
                        )}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-indigo-300 transition-colors group"
                        >
                            <div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-1.5 pt-2">
                                {project.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="text-[11px] font-medium px-2 py-0.5 bg-slate-100 text-slate-600 rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="py-16 bg-slate-950 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-black mb-4">
                        Let's Discuss Opportunities
                    </h2>
                    <p className="text-slate-400 max-w-lg mx-auto mb-8 text-sm sm:text-base">
                        Open for corporate internships, management trainee
                        programs, and analytical research collaborations.
                    </p>
                    <div className="inline-flex flex-col sm:flex-row items-center gap-6 justify-center bg-slate-900 border border-slate-800 p-4 sm:p-6 rounded-2xl max-w-xl mx-auto w-full">
                        <div className="flex items-center gap-2.5 text-sm text-slate-300">
                            <svg
                                className="w-5 h-5 text-indigo-400 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            <span>rakeshpanchariya51@gmail.com</span>
                        </div>
                        <div className="hidden sm:block h-6 w-px bg-slate-800" />
                        <div className="flex items-center gap-2.5 text-sm text-slate-300">
                            <svg
                                className="w-5 h-5 text-indigo-400 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <span>Solapur, Maharashtra</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            {/* <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-xs text-slate-600">
                <p>
                    © 2026 Aditya Dhanshetti. Built with React and Tailwind CSS.
                </p>
            </footer> */}
        </div>
    );
}
