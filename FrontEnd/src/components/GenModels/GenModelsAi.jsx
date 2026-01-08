import React, { useState } from 'react';
import { Briefcase, GraduationCap, LineChart, Brain } from 'lucide-react';
import { companies } from './data/companies';
import { colleges } from './data/colleges';

function GenModelsAi() {
  const [activeSection, setActiveSection] = useState('company');
  const [academicScore, setAcademicScore] = useState({
    tenth: '',
    twelfth: '',
    cgpa: ''
  });

  const [programmingSkills, setProgrammingSkills] = useState({
    Java: false,
    Python: false,
    JavaScript: false,
    'C++': false,
    '.NET': false,
    Ruby: false,
    Go: false
  });

  const [frameworks, setFrameworks] = useState({
    React: false,
    Angular: false,
    Vue: false,
    Spring: false,
    Django: false,
    'Node.js': false
  });

  const [databases, setDatabases] = useState({
    SQL: false,
    MongoDB: false,
    PostgreSQL: false,
    Oracle: false,
    Redis: false
  });

  const [cloudSkills, setCloudSkills] = useState({
    AWS: false,
    Azure: false,
    GCP: false,
    DevOps: false,
    Docker: false,
    Kubernetes: false
  });

  const [softSkills, setSoftSkills] = useState({
    communication: false,
    leadership: false,
    timeManagement: false,
    decisionMaking: false,
    problemSolving: false,
    teamwork: false
  });

  const [hasInternship, setHasInternship] = useState(false);
  const [responceses,setResponceses] = useState([]);
  const [examScore, setExamScore] = useState('');
  const [selectedExam, setSelectedExam] = useState('JEE Main');

  const getAllSelectedSkills = () => {
    return [
      ...Object.entries(programmingSkills).filter(([_, value]) => value).map(([key]) => key),
      ...Object.entries(frameworks).filter(([_, value]) => value).map(([key]) => key),
      ...Object.entries(databases).filter(([_, value]) => value).map(([key]) => key),
      ...Object.entries(cloudSkills).filter(([_, value]) => value).map(([key]) => key)
    ];
  };

  const predictComponyModel = async (req,res)=>{
    try {
      const responce = await fetch("http://localhost:3000/genrate/model/componey",{
        method:POST,
        body:{getAllSelectedSkills}
      });
      if(!responce){
        console.log("responce is empty");
        return;
      }

      setResponceses(responce);
      
    } catch (error) {
      console.log("error in the genrate model : ",error);
    }
  }

  const predictedCompanies = companies
    .filter(company => {
      const selectedSkills = getAllSelectedSkills();
      const meetsSkillRequirements = company.requiredSkills.some(skill => 
        selectedSkills.includes(skill)
      );
      return Number(academicScore.cgpa) >= company.minCGPA && meetsSkillRequirements;
    })
    .slice(0, 5);

  const predictedColleges = colleges.filter(college => 
    college.exam === selectedExam && 
    Number(examScore) >= college.minPercentile
  );

  const renderSkillsSection = (title, skills, setSkills) => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.entries(skills).map(([skill, checked]) => (
          <label key={skill} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setSkills(prev => ({ ...prev, [skill]: e.target.checked }))}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-gray-700">{skill}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Brain className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">CareerGuide Pro</h1>
          </div>
          <nav className="flex space-x-4">
            <button
              onClick={() => setActiveSection('company')}
              className={`px-4 py-2 rounded-md ${
                activeSection === 'company'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Briefcase className="inline-block h-5 w-5 mr-2" />
              Company Prediction
            </button>
            <button
              onClick={() => setActiveSection('college')}
              className={`px-4 py-2 rounded-md ${
                activeSection === 'college'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <GraduationCap className="inline-block h-5 w-5 mr-2" />
              College Prediction
            </button>
            <button
              onClick={() => setActiveSection('insights')}
              className={`px-4 py-2 rounded-md ${
                activeSection === 'insights'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <LineChart className="inline-block h-5 w-5 mr-2" />
              Insights
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeSection === 'company' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Academic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    10th Percentage
                  </label>
                  <input
                    type="number"
                    placeholder="Enter percentage"
                    className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                    value={academicScore.tenth}
                    onChange={(e) => setAcademicScore({ ...academicScore, tenth: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    12th Percentage
                  </label>
                  <input
                    type="number"
                    placeholder="Enter percentage"
                    className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                    value={academicScore.twelfth}
                    onChange={(e) => setAcademicScore({ ...academicScore, twelfth: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    BE/BTech CGPA
                  </label>
                  <input
                    type="number"
                    placeholder="Enter CGPA"
                    className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                    value={academicScore.cgpa}
                    onChange={(e) => setAcademicScore({ ...academicScore, cgpa: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {renderSkillsSection('Programming Languages', programmingSkills, setProgrammingSkills)}
            {renderSkillsSection('Frameworks', frameworks, setFrameworks)}
            {renderSkillsSection('Databases', databases, setDatabases)}
            {renderSkillsSection('Cloud & DevOps', cloudSkills, setCloudSkills)}

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Soft Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(softSkills).map(([key, value]) => (
                  <label key={key} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={(e) =>
                        setSoftSkills({ ...softSkills, [key]: e.target.checked })
                      }
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Experience</h2>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasInternship}
                  onChange={(e) => setHasInternship(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">
                  Previous Internship Experience
                </span>
              </label>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Top 5 Predicted Companies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {predictedCompanies.map((company) => (
                  <div
                    key={company.name}
                    className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">{company.name}</h3>
                        <p className="text-sm text-gray-600">Min CGPA: {company.minCGPA}</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">Required Skills:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {company.requiredSkills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'college' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Exam Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Exam
                  </label>
                  <select
                    className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                    value={selectedExam}
                    onChange={(e) => setSelectedExam(e.target.value)}
                  >
                    <option value="JEE Main">JEE Main</option>
                    <option value="JEE Advanced">JEE Advanced</option>
                    <option value="MHT-CET">MHT-CET</option>
                    <option value="GATE">GATE</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Percentile Score
                  </label>
                  <input
                    type="number"
                    placeholder="Enter your percentile"
                    className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                    value={examScore}
                    onChange={(e) => setExamScore(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Predicted Colleges</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {predictedColleges.map((college) => (
                  <div
                    key={college.name}
                    className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-semibold text-gray-900">{college.name}</h3>
                    <p className="text-sm text-gray-600">{college.location}</p>
                    <p className="text-sm text-gray-600">
                      Min Percentile: {college.minPercentile}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'insights' && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Career Insights</h2>
            <p className="text-gray-600">
              Coming soon! This section will provide detailed analytics and insights
              about career trends and opportunities.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default GenModelsAi;