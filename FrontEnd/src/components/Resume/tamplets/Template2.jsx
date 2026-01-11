import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Template2 = ({ data }) => {
  const { personalInfo, experience, education, projects, skills, certifications, strengths } = data;

  return (
    <div className="flex h-full font-sans text-gray-800">
      
      {/* LEFT SIDEBAR (30%) */}
      <aside className="w-[32%] bg-slate-800 text-white p-6 flex flex-col gap-6">
        
        {/* Contact Info */}
        <div className="space-y-3 text-sm">
          {personalInfo?.email && <div className="flex items-center gap-2"><Mail size={16} className="text-blue-300"/> <span className="break-all">{personalInfo.email}</span></div>}
          {personalInfo?.phone && <div className="flex items-center gap-2"><Phone size={16} className="text-blue-300"/> {personalInfo.phone}</div>}
          {personalInfo?.linkedin && <div className="flex items-center gap-2"><Linkedin size={16} className="text-blue-300"/> <span className="truncate">LinkedIn</span></div>}
          {personalInfo?.github && <div className="flex items-center gap-2"><Github size={16} className="text-blue-300"/> <span className="truncate">GitHub</span></div>}
        </div>

        {/* Education */}
        {education?.length > 0 && (
          <div>
            <h3 className="text-lg font-bold border-b border-slate-600 pb-2 mb-3 text-blue-300">Education</h3>
            {education.map((edu, i) => (
              <div key={i} className="mb-4 text-sm">
                <p className="font-bold text-white">{edu.degree}</p>
                <p className="text-slate-300">{edu.school}</p>
                <p className="text-slate-400 text-xs">{edu.year}</p>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {skills?.length > 0 && (
          <div>
             <h3 className="text-lg font-bold border-b border-slate-600 pb-2 mb-3 text-blue-300">Skills</h3>
             <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span key={i} className="bg-slate-700 text-xs px-2 py-1 rounded text-slate-200">{skill}</span>
                ))}
             </div>
          </div>
        )}

         {/* Strengths */}
         {strengths?.length > 0 && (
          <div>
             <h3 className="text-lg font-bold border-b border-slate-600 pb-2 mb-3 text-blue-300">Strengths</h3>
             <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                {strengths.map((str, i) => (
                  <li key={i}>{str.name}</li>
                ))}
             </ul>
          </div>
        )}

      </aside>

      {/* RIGHT CONTENT (70%) */}
      <main className="w-[68%] p-8 bg-white">
        
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-slate-800 uppercase leading-tight">{personalInfo?.fullName}</h1>
          <p className="text-xl text-blue-600 font-medium mt-1">{personalInfo?.jobTitle}</p>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">{personalInfo?.summary}</p>
        </header>

        {/* Experience */}
        {experience?.length > 0 && (
          <section className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 border-b-2 border-slate-100 pb-2 mb-4">Work Experience</h3>
            {experience.map((exp, i) => (
              <div key={i} className="mb-6 relative pl-4 border-l-2 border-slate-200">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-200 border-2 border-white"></div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-lg text-slate-700">{exp.title}</h4>
                  <span className="text-sm text-slate-500 font-medium bg-slate-50 px-2 py-0.5 rounded">{exp.year}</span>
                </div>
                <p className="text-blue-600 font-medium text-sm mb-2">{exp.company}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </section>
        )}

        {/* Projects */}
        {projects?.length > 0 && (
           <section className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 border-b-2 border-slate-100 pb-2 mb-4">Projects</h3>
            <div className="grid grid-cols-1 gap-4">
              {projects.map((proj, i) => (
                <div key={i} className="bg-gray-50 p-3 rounded border border-gray-100">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-slate-700">{proj.title}</h4>
                    {proj.link && <span className="text-xs text-blue-500 bg-white border px-1 rounded">{proj.link}</span>}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{proj.desc}</p>
                </div>
              ))}
            </div>
           </section>
        )}

        {/* Certifications */}
        {certifications?.length > 0 && (
           <section>
            <h3 className="text-xl font-bold text-slate-800 border-b-2 border-slate-100 pb-2 mb-4">Certifications</h3>
             <ul className="space-y-2">
              {certifications.map((cert, i) => (
                <li key={i} className="text-sm text-gray-700 flex justify-between">
                  <span><strong className="text-slate-600">{cert.name}</strong> — {cert.issuer}</span>
                  <span className="text-gray-400">{cert.year}</span>
                </li>
              ))}
             </ul>
           </section>
        )}

      </main>
    </div>
  );
};

export default Template2;