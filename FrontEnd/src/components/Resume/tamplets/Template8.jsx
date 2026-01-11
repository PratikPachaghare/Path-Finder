import React from 'react';

const Template8 = ({ data }) => {
  const { personalInfo, experience, education, projects, skills } = data;

  return (
    <div className="p-12 font-serif text-gray-900 h-full">
      
      {/* Centered Header */}
      <header className="text-center border-b-2 border-black pb-4 mb-6">
        <h1 className="text-3xl font-bold uppercase mb-2">{personalInfo?.fullName}</h1>
        <div className="flex justify-center items-center gap-2 text-sm">
          <span>{personalInfo?.email}</span>
          <span>•</span>
          <span>{personalInfo?.phone}</span>
          <span>•</span>
          <span>{personalInfo?.linkedin}</span>
        </div>
      </header>

      {/* Summary */}
      {personalInfo?.summary && (
        <section className="mb-6 text-center max-w-2xl mx-auto">
           <p className="text-sm leading-relaxed">{personalInfo.summary}</p>
        </section>
      )}

      {/* Education First (Academic Style) */}
      {education?.length > 0 && (
        <section className="mb-6">
          <h3 className="text-sm font-bold uppercase border-b border-black mb-3 pb-1 tracking-wider">Education</h3>
          {education.map((edu, i) => (
            <div key={i} className="flex justify-between items-end mb-2">
              <div>
                <span className="font-bold">{edu.school}</span>, <span className="italic">{edu.degree}</span>
              </div>
              <span className="text-sm">{edu.year}</span>
            </div>
          ))}
        </section>
      )}

      {/* Experience */}
      {experience?.length > 0 && (
        <section className="mb-6">
          <h3 className="text-sm font-bold uppercase border-b border-black mb-3 pb-1 tracking-wider">Experience</h3>
          {experience.map((exp, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between items-baseline mb-1">
                <div className="font-bold">{exp.company}</div>
                <div className="text-sm italic">{exp.year}</div>
              </div>
              <div className="italic text-sm mb-1">{exp.title}</div>
              <p className="text-sm leading-relaxed text-justify">{exp.desc}</p>
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects?.length > 0 && (
        <section className="mb-6">
          <h3 className="text-sm font-bold uppercase border-b border-black mb-3 pb-1 tracking-wider">Relevant Projects</h3>
          {projects.map((proj, i) => (
            <div key={i} className="mb-2">
              <span className="font-bold text-sm">{proj.title}:</span> <span className="text-sm">{proj.desc}</span>
            </div>
          ))}
        </section>
      )}

      {/* Skills - Simple List */}
      {skills?.length > 0 && (
        <section>
          <h3 className="text-sm font-bold uppercase border-b border-black mb-3 pb-1 tracking-wider">Skills</h3>
          <p className="text-sm">{skills.join(', ')}</p>
        </section>
      )}

    </div>
  );
};

export default Template8;