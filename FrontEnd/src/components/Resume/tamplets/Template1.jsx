import React from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';

const Template1 = ({ data }) => {
  const { personalInfo, experience, education, projects, skills, certifications, strengths } = data;

  return (
    <div className="p-10 font-serif text-gray-900 h-full">
      {/* Header */}
      <header className="border-b-2 border-gray-800 pb-6 mb-6">
        <h1 className="text-4xl font-bold uppercase tracking-wide text-gray-900">{personalInfo?.fullName}</h1>
        <p className="text-xl text-gray-700 mt-2 font-medium">{personalInfo?.jobTitle}</p>
        
        <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
          {personalInfo?.email && <div className="flex items-center gap-1"><Mail size={14}/> {personalInfo.email}</div>}
          {personalInfo?.phone && <div className="flex items-center gap-1"><Phone size={14}/> {personalInfo.phone}</div>}
          {personalInfo?.linkedin && <div className="flex items-center gap-1"><Linkedin size={14}/> {personalInfo.linkedin}</div>}
          {personalInfo?.github && <div className="flex items-center gap-1"><Github size={14}/> {personalInfo.github}</div>}
        </div>
      </header>

      {/* Summary */}
      {personalInfo?.summary && (
        <section className="mb-6">
          <h3 className="font-bold text-lg uppercase tracking-wider border-b border-gray-300 mb-3 pb-1">Professional Summary</h3>
          <p className="text-gray-700 leading-relaxed text-sm">{personalInfo.summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience?.length > 0 && (
        <section className="mb-6">
          <h3 className="font-bold text-lg uppercase tracking-wider border-b border-gray-300 mb-3 pb-1">Experience</h3>
          {experience.map((exp, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h4 className="font-bold text-md">{exp.title}</h4>
                <span className="text-sm text-gray-600 font-medium">{exp.year}</span>
              </div>
              <p className="text-gray-800 italic text-sm mb-1">{exp.company}</p>
              <p className="text-sm text-gray-700 whitespace-pre-line">{exp.desc}</p>
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects?.length > 0 && (
        <section className="mb-6">
          <h3 className="font-bold text-lg uppercase tracking-wider border-b border-gray-300 mb-3 pb-1">Projects</h3>
          {projects.map((proj, i) => (
            <div key={i} className="mb-3">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-md">{proj.title}</h4>
                {proj.link && <span className="text-xs text-blue-800 flex items-center gap-1"><ExternalLink size={10}/> {proj.link}</span>}
              </div>
              <p className="text-sm text-gray-700 mt-1">{proj.desc}</p>
            </div>
          ))}
        </section>
      )}

      {/* Grid for compact sections */}
      <div className="grid grid-cols-2 gap-6">
        
        {/* Education */}
        {education?.length > 0 && (
          <section>
            <h3 className="font-bold text-lg uppercase tracking-wider border-b border-gray-300 mb-3 pb-1">Education</h3>
            {education.map((edu, i) => (
              <div key={i} className="mb-2">
                <div className="flex justify-between text-sm">
                  <span className="font-bold">{edu.school}</span>
                  <span className="text-gray-500">{edu.year}</span>
                </div>
                <p className="text-sm">{edu.degree}</p>
              </div>
            ))}
          </section>
        )}

        {/* Certifications */}
        {certifications?.length > 0 && (
          <section>
            <h3 className="font-bold text-lg uppercase tracking-wider border-b border-gray-300 mb-3 pb-1">Certifications</h3>
            {certifications.map((cert, i) => (
              <div key={i} className="mb-2">
                 <div className="flex justify-between text-sm">
                  <span className="font-bold">{cert.name}</span>
                  <span className="text-gray-500">{cert.year}</span>
                </div>
                <p className="text-sm text-gray-600">{cert.issuer}</p>
              </div>
            ))}
          </section>
        )}
      </div>

      {/* Skills & Strengths */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills?.length > 0 && (
          <div>
            <h3 className="font-bold text-lg uppercase tracking-wider border-b border-gray-300 mb-3 pb-1">Technical Skills</h3>
            <p className="text-sm leading-relaxed">{skills.join(', ')}</p>
          </div>
        )}
        
        {strengths?.length > 0 && (
          <div>
            <h3 className="font-bold text-lg uppercase tracking-wider border-b border-gray-300 mb-3 pb-1">Key Strengths</h3>
            <div className="flex flex-wrap gap-2">
              {strengths.map((str, i) => (
                <span key={i} className="text-sm bg-gray-100 px-2 py-1 rounded border">{str.name}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Template1;