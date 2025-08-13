import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/projects" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors duration-200 hover:bg-white/50 px-3 py-2 rounded-xl">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Back to Projects
          </Link>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">{project.summary}</p>

          <div className="flex flex-wrap gap-3">
            {project.tags.map(t => (
              <span key={t} className="text-sm font-medium rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 border border-blue-200">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl mb-8">
          <Image src={project.cover} alt={project.title} fill className="object-cover" />
        </div>

        {/* Project Description */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Project Description</h2>
          <p className="text-slate-600 leading-relaxed text-lg mb-6">{project.description}</p>
          
          {/* Technical Skills */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Technical Skills Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technicalSkills.map((skill, index) => (
                <span key={index} className="text-sm font-medium rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-3 py-1.5 border border-green-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Keywords */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {project.keywords.map((keyword, index) => (
                <span key={index} className="text-sm font-medium rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 py-1.5 border border-purple-200">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Challenges & Outcomes */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {/* Challenges */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/20">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              Challenges Faced
            </h3>
            <ul className="space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="text-slate-600 text-sm flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0"></span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          {/* Outcomes */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/20">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              Key Outcomes
            </h3>
            <ul className="space-y-2">
              {project.outcomes.map((outcome, index) => (
                <li key={index} className="text-slate-600 text-sm flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          {project.assets?.map((a, i) => {
            if (a.type === "image") {
              return (
                <div key={i} className="relative aspect-[16/10] rounded-3xl overflow-hidden border-2 border-white/20 shadow-lg">
                  <Image src={a.url} alt={a.caption ?? project.title} fill className="object-cover" />
                </div>
              );
            }
            if (a.type === "model") {
              return (
                <div key={i} className="rounded-3xl overflow-hidden border-2 border-white/20 shadow-lg" style={{ height: 420 }}>
                  {/* @ts-expect-error web component */}
                  <model-viewer src={a.url} camera-controls auto-rotate style={{ width: "100%", height: "100%", background: "white" }} />
                </div>
              );
            }
            return (
              <div key={i} className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/20 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-lg">{a.filename}</div>
                  <div className="text-sm text-slate-500">{a.url}</div>
                </div>
                <a className="rounded-2xl px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl" href={a.url} download>Download</a>
              </div>
            );
          })}
        </div>

        {(project.repo || project.live) && (
          <div className="mt-8 flex gap-4">
            {project.repo && (
              <a className="rounded-2xl px-6 py-3 border-2 border-slate-300 text-slate-700 font-medium hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 flex items-center gap-2" href={project.repo} target="_blank">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Source Code
              </a>
            )}
            {project.live && (
              <a className="rounded-2xl px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2" href={project.live} target="_blank">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
