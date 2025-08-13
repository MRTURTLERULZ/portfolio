import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
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
            My Projects
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A collection of mechanical engineering projects combining CAD, 3D printing, electronics, and code.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, index) => (
            <Link 
              key={p.slug} 
              href={`/projects/${p.slug}`} 
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={p.cover} alt={p.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {p.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4 line-clamp-2">
                  {p.summary}
                </p>
                
                {/* Technical Skills Preview */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-1">
                    {p.technicalSkills.slice(0, 3).map((skill, index) => (
                      <span key={index} className="text-xs font-medium rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-2 py-1 border border-green-200">
                        {skill}
                      </span>
                    ))}
                    {p.technicalSkills.length > 3 && (
                      <span className="text-xs text-slate-500">+{p.technicalSkills.length - 3} more</span>
                    )}
                  </div>
                </div>

                {/* Project Tags */}
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs font-medium rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-3 py-1.5 border border-blue-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
