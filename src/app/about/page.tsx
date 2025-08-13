import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors duration-200 hover:bg-white/50 px-3 py-2 rounded-xl">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Back to Home
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">
            About Me
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Mechanical engineering student passionate about creating innovative solutions at the intersection of hardware and software.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <section className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                Background
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-4">
                I&apos;m a mechanical engineering student at CCNY with a passion for bringing ideas to life through 
                CAD design, 3D printing, electronics, and programming. I love working at the intersection of 
                hardware and software, creating practical solutions to real-world problems.
              </p>
            </section>

            <section className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                Skills & Interests
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200">
                  <h3 className="font-bold text-slate-900 mb-2">CAD & Design</h3>
                  <p className="text-slate-600">Autodesk Inventor, AutoCAD, Onshape, Revit - Professional-grade 3D modeling and technical drawing</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-200">
                  <h3 className="font-bold text-slate-900 mb-2">Programming & Analysis</h3>
                  <p className="text-slate-600">C++, C#, Python, JavaScript, MATLAB - Game development, data analysis, and engineering simulations</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-200">
                  <h3 className="font-bold text-slate-900 mb-2">Engineering Tools</h3>
                  <p className="text-slate-600">Unity, 3D printing (FDM), Excel VBA, rapid prototyping, and iterative design methodologies</p>
                </div>
              </div>
            </section>

            <section className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                Current Projects & Achievements
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-4 border border-orange-200">
                  <h3 className="font-bold text-slate-900 mb-2">QuickBites Startup</h3>
                  <p className="text-slate-600">Founded and leading a student-oriented food delivery startup, managing app development and logistics optimization</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-200">
                  <h3 className="font-bold text-slate-900 mb-2">Unity Game Development</h3>
                  <p className="text-slate-600">Building gameplay prototypes and developing a lightweight 2D physics engine for real-time collision detection</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200">
                  <h3 className="font-bold text-slate-900 mb-2">Hackathon Success</h3>
                  <p className="text-slate-600">Finalist at Cornell Digital Agriculture Hackathon and 2nd place at Zahn X Robin Hood Foundation Social Impact Innovation</p>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  </svg>
                </div>
                Education
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200">
                  <h3 className="font-bold text-slate-900 text-lg">City College of New York (CCNY)</h3>
                  <p className="text-slate-600 text-lg">Bachelor of Engineering in Mechanical Engineering</p>
                  <p className="text-slate-500 mt-2 font-medium">August 2022 - Est. May 2026</p>
                  <div className="mt-3 space-y-2">
                    <p className="text-sm text-slate-600"><span className="font-medium">Relevant Coursework:</span> Thermodynamics, Fluid Mechanics, Electrical Circuits</p>
                    <p className="text-sm text-slate-600"><span className="font-medium">Activities:</span> Member of Zahn Innovation Venture Incubator</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                  <h3 className="font-bold text-slate-900 text-lg">Stuyvesant High School</h3>
                  <p className="text-slate-600 text-lg">High School Diploma</p>
                  <p className="text-slate-500 mt-2 font-medium">September 2018 - June 2022</p>
                  <div className="mt-3">
                    <p className="text-sm text-slate-600"><span className="font-medium">Activities:</span> Varsity Football (Linebacker) - Developed quick decision-making and teamwork under pressure</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                Get In Touch
              </h2>
              <div className="space-y-4">
                <a 
                  href="mailto:mahdiislam0829@gmail.com" 
                  className="group block rounded-2xl px-6 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium text-center hover:from-pink-600 hover:to-rose-600 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    mahdiislam0829@gmail.com
                  </span>
                </a>
                <a 
                  href="https://github.com/mahdiislam0829" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group block rounded-2xl px-6 py-4 border-2 border-slate-300 text-slate-700 font-medium text-center hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    GitHub
                  </span>
                </a>
                <a 
                  href="https://linkedin.com/in/mahdiislam0829" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group block rounded-2xl px-6 py-4 border-2 border-slate-300 text-slate-700 font-medium text-center hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    LinkedIn
                  </span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 