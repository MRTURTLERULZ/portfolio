import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <section className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Mahdi Islam
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Mechanical Engineering student @ CCNY. CAD design, 3D printing, Unity development, and startup founder. 
                Passionate about combining engineering principles with modern technology to create innovative solutions.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a 
                className="group relative rounded-2xl px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200" 
                href="/projects"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </a>
              <a 
                className="group rounded-2xl px-6 py-3 border-2 border-slate-300 text-slate-700 font-medium hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200" 
                href="/files"
              >
                Downloads
              </a>
              <a 
                className="group rounded-2xl px-6 py-3 border-2 border-slate-300 text-slate-700 font-medium hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200" 
                href="/about"
              >
                About
              </a>
            </div>
          </div>

          {/* Profile Photo and Resume Download */}
          <div className="space-y-6">
            {/* Profile Photo */}
            <div className="relative group">
              <div className="w-full rounded-3xl overflow-hidden border-2 border-slate-200 aspect-square shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                <Image 
                  src="/images/mahdi_crossarms.jpg" 
                  alt="Mahdi Islam - Mechanical Engineering Student" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
            </div>

            {/* Resume Download */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/20 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Download Resume</h3>
              <p className="text-slate-600 text-sm mb-4">Get my complete professional background</p>
              <a 
                href="/documents/resume.pdf" 
                download
                className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium hover:from-green-700 hover:to-emerald-700 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Combining mechanical engineering principles with modern technology, game development, and entrepreneurial thinking to create innovative solutions
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">CAD & Design</h3>
              <p className="text-slate-600 leading-relaxed">
                Autodesk Inventor, AutoCAD, Onshape, Revit - Professional-grade 3D modeling, technical drawing, and rapid prototyping.
              </p>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Programming & Development</h3>
              <p className="text-slate-600 leading-relaxed">
                C++, C#, Python, JavaScript, MATLAB - Unity game development, 2D physics engines, and data analysis.
              </p>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation & Leadership</h3>
              <p className="text-slate-600 leading-relaxed">
                Startup founder (QuickBites), hackathon finalist, peer tutor, and team leader in high-pressure environments.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects Preview */}
        <section className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A glimpse into my latest work combining multiple disciplines
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.slice(0, 2).map((project, index) => (
              <div key={project.slug} className="group bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-white/20 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={project.cover} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs font-medium rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-3 py-1.5 border border-blue-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                  >
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 border-2 border-slate-300 text-slate-700 font-medium hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200"
            >
              View All Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mt-24">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing Together</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              I'm always interested in new challenges and collaborations. Whether you have an engineering project, need a Unity developer, or want to discuss startup ideas, let's talk!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/about"
                className="rounded-2xl px-6 py-3 bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-200"
              >
                Learn More About Me
              </Link>
              <a 
                href="mailto:mahdiislam0829@gmail.com"
                className="rounded-2xl px-6 py-3 border-2 border-white text-white font-medium hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
