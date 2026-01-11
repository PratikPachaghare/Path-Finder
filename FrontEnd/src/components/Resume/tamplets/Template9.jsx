import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Template9 = ({ data }) => {
  const { personalInfo, experience, education, projects, skills, certifications } = data;

  return (
    <div className="flex h-full font-sans text-gray-800">
      
      {/* MAIN CONTENT (Left - 66%) */}
      <main className="w-2/3 p-8 pr-12">
        
        <div className="mb-10">
          <h1 className="text-5xl font-light text-teal-800 tracking-tight mb-2">{personalInfo?.fullName}</h1>
          <p className="text-xl text-gray-500 uppercase tracking-widest">{personalInfo?.jobTitle}</p>
        </div>

        {/* Experience */}
        {experience?.length > 0 && (
          <section className="mb-10">
            <h3 className="text-teal-800 font-bold uppercase tracking-widest mb-6 text-sm border-b-2 border-teal-800 pb-2 w-12">Work</h3>
            {experience.map((exp, i) => (
              <div key={i} className="mb-8 border-l-2 border-gray-200 pl-4">
                <div className="flex justify-between items-baseline mb-1">
                   <h4 className="font-bold text-lg">{exp.title}</h4>
                   <span className="text-sm text-gray-400 font-mono">{exp.year}</span>
                </div>
                <p className="text-teal-700 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </section>
        )}

        {/* Projects */}
        {projects?.length > 0 && (
          <section>
            <h3 className="text-teal-800 font-bold uppercase tracking-widest mb-6 text-sm border-b-2 border-teal-800 pb-2 w-12">Work</h3>
            <div className="grid grid-cols-1 gap-4">
              {projects.map((proj, i) => (
                <div key={i} className="mb-2">
                  <h4 className="font-bold text-gray-800">{proj.title}</h4>
                  <p className="text-sm text-gray-600">{proj.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

      </main>

      {/* RIGHT SIDEBAR (33%) */}
      <aside className="w-1/3 bg-teal-50 p-8 border-l border-teal-100">
        
        {/* Contact */}
        <div className="mb-10 space-y-2 text-sm text-teal-900">
          {personalInfo?.email && <div className="flex items-center gap-2"><Mail size={14}/> {personalInfo.email}</div>}
          {personalInfo?.phone && <div className="flex items-center gap-2"><Phone size={14}/> {personalInfo.phone}</div>}
          {personalInfo?.linkedin && <div className="flex items-center gap-2"><ExternalLink size={14}/> LinkedIn</div>}
        </div>

        {/* Summary */}
        {personalInfo?.summary && (
          <div className="mb-10">
            <h3 className="font-bold text-teal-900 mb-3">About Me</h3>
            <p className="text-xs leading-relaxed text-teal-800">{personalInfo.summary}</p>
          </div>
        )}

        {/* Skills */}
        {skills?.length > 0 && (
          <div className="mb-10">
             <h3 className="font-bold text-teal-900 mb-3">Expertise</h3>
             <div className="flex flex-wrap gap-2">
               {skills.map((skill, i) => (
                 <span key={i} className="bg-white border border-teal-200 text-teal-800 px-2 py-1 rounded text-xs">
                   {skill}
                 </span>
               ))}
             </div>
          </div>
        )}

        {/* Education */}
        {education?.length > 0 && (
          <div className="mb-10">
            <h3 className="font-bold text-teal-900 mb-3">Education</h3>
            {education.map((edu, i) => (
              <div key={i} className="mb-4 text-sm">
                <p className="font-bold text-teal-800">{edu.degree}</p>
                <p className="text-teal-600 text-xs">{edu.school}</p>
                <p className="text-gray-400 text-xs">{edu.year}</p>
              </div>
            ))}
          </div>
        )}

      </aside>
    </div>
  );
};

export default Template9;