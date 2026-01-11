import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

const Template5 = ({ data }) => {
  const { personalInfo, experience, education, projects, skills, certifications, strengths } = data;

  return (
    <div className="h-full bg-white font-sans text-gray-800">
      
      {/* Dark Header */}
      <header className="bg-slate-900 text-white p-8 pb-10">
        <h1 className="text-4xl font-bold uppercase tracking-wider mb-2">{personalInfo?.fullName}</h1>
        <p className="text-lg text-blue-400 font-medium mb-4">{personalInfo?.jobTitle}</p>
        
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          {personalInfo?.email && <div className="flex items-center gap-2"><Mail size={14}/> {personalInfo.email}</div>}
          {personalInfo?.phone && <div className="flex items-center gap-2"><Phone size={14}/> {personalInfo.phone}</div>}
          {personalInfo?.linkedin && <div className="flex items-center gap-2"><Linkedin size={14}/> LinkedIn</div>}
          {personalInfo?.github && <div className="flex items-center gap-2"><Github size={14}/> GitHub</div>}
        </div>
      </header>

      <div className="p-8 -mt-4">
        
        {/* Summary Card */}
        {personalInfo?.summary && (
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500 mb-6">
            <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6">
          
          {/* Experience */}
          {experience?.length > 0 && (
            <section>
              <h3 className="text-xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-4">Professional Experience</h3>
              {experience.map((exp, i) => (
                <div key={i} className="mb-5">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold text-lg">{exp.title}</h4>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">{exp.year}</span>
                  </div>
                  <p className="text-slate-600 italic mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </section>
          )}

          <div className="grid grid-cols-2 gap-8">
            {/* Education */}
            {education?.length > 0 && (
              <section>
                <h3 className="text-xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-4">Education</h3>
                {education.map((edu, i) => (
                  <div key={i} className="mb-3">
                    <p className="font-bold">{edu.school}</p>
                    <p className="text-sm text-gray-600">{edu.degree}</p>
                    <p className="text-xs text-gray-500">{edu.year}</p>
                  </div>
                ))}
              </section>
            )}

            {/* Skills */}
            {skills?.length > 0 && (
              <section>
                <h3 className="text-xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 border border-gray-300 px-2 py-1 rounded text-xs font-semibold">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template5;