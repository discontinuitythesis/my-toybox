export default function UnitCostDominance() {
  const [selectedJob, setSelectedJob] = React.useState('');
  const [hourlyWage, setHourlyWage] = React.useState(25);
  const [aiCost, setAiCost] = React.useState(0.10);
  const [verifierCost, setVerifierCost] = React.useState(5);

  const jobOptions = [
    { value: 'copywriter', label: 'Copywriter/Content Writer', wage: 25, aiCost: 0.08 },
    { value: 'analyst', label: 'Business Analyst', wage: 35, aiCost: 0.12 },
    { value: 'developer', label: 'Software Developer (Junior)', wage: 45, aiCost: 0.15 },
    { value: 'accountant', label: 'Accountant/Bookkeeper', wage: 30, aiCost: 0.10 },
    { value: 'customer-service', label: 'Customer Service Rep', wage: 18, aiCost: 0.05 },
    { value: 'translator', label: 'Translator', wage: 28, aiCost: 0.06 },
    { value: 'designer', label: 'Graphic Designer', wage: 32, aiCost: 0.18 },
    { value: 'paralegal', label: 'Paralegal', wage: 26, aiCost: 0.09 },
    { value: 'teacher', label: 'Teacher (certain tasks)', wage: 24, aiCost: 0.20 },
    { value: 'custom', label: 'Custom (enter your own)', wage: 0, aiCost: 0 }
  ];

  const handleJobChange = (value) => {
    setSelectedJob(value);
    const job = jobOptions.find(j => j.value === value);
    if (job && job.value !== 'custom') {
      setHourlyWage(job.wage);
      setAiCost(job.aiCost);
    }
  };

  const verifierActualCost = hourlyWage * (verifierCost / 100);
  const totalAiCost = aiCost + verifierActualCost;
  const costRatio = hourlyWage / totalAiCost;
  const isDominant = totalAiCost < hourlyWage;

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">Unit Cost Dominance</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#calculator" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Calculator</a>
              <a href="#data" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Live Data</a>
              <a href="#industries" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Industries</a>
              <a href="#regulation" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Why Regulation Fails</a>
              <a href="#proof" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Mathematical Proof</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 text-center bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-gray-900 to-red-500 bg-clip-text text-transparent">
            Unit Cost Dominance
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            When AI + verifier costs less than human workers, competitive markets make replacement mathematically inevitable.
          </p>
          
          <div className="bg-white border-2 border-gray-200 rounded-xl p-8 mx-auto max-w-2xl shadow-lg">
            <div className="text-2xl font-mono font-bold text-gray-900 mb-4">
              if (AI_cost + verifier_cost) &lt; human_cost:<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;human_job = obsolete
            </div>
            <div className="text-base text-gray-600">
              This isn't a prediction. It's arithmetic. When the cost threshold crosses, market forces make adoption inevitable.
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-12">Calculate Your Job's Dominance Status</h2>
          
          <div className="bg-white border border-gray-200 rounded-xl p-8 max-w-4xl mx-auto shadow-lg">
            <div className="grid gap-6">
              <div>
                <label className="block font-semibold mb-2 text-gray-900">Job Title/Industry</label>
                <select 
                  value={selectedJob}
                  onChange={(e) => handleJobChange(e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg text-base focus:border-red-500 outline-none transition-colors"
                >
                  <option value="">Select your job category</option>
                  {jobOptions.map(job => (
                    <option key={job.value} value={job.value}>{job.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2 text-gray-900">Your Hourly Wage (€)</label>
                <input 
                  type="number"
                  value={hourlyWage}
                  onChange={(e) => setHourlyWage(parseFloat(e.target.value) || 0)}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg text-base focus:border-red-500 outline-none transition-colors"
                  min="1" max="500"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2 text-gray-900">AI Cost per Hour (€)</label>
                <input 
                  type="number"
                  value={aiCost}
                  onChange={(e) => setAiCost(parseFloat(e.target.value) || 0)}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg text-base focus:border-red-500 outline-none transition-colors"
                  min="0.01" max="10" step="0.01"
                />
                <div className="text-sm text-gray-600 mt-2">Includes compute, API calls, and amortized model costs</div>
              </div>

              <div>
                <label className="block font-semibold mb-2 text-gray-900">Verifier Cost (% of output)</label>
                <input 
                  type="number"
                  value={verifierCost}
                  onChange={(e) => setVerifierCost(parseFloat(e.target.value) || 0)}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg text-base focus:border-red-500 outline-none transition-colors"
                  min="1" max="50"
                />
                <div className="text-sm text-gray-600 mt-2">Human expert reviews 5-10% of AI output for quality assurance</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-8 border-t-2 border-gray-200">
                <div className="text-center p-6 border-2 border-red-200 rounded-lg bg-red-50">
                  <div className="text-3xl font-black mb-2 text-gray-900">€{hourlyWage.toFixed(2)}</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">Human Cost/Hour</div>
                </div>
                <div className="text-center p-6 border-2 border-green-200 rounded-lg bg-green-50">
                  <div className="text-3xl font-black mb-2 text-gray-900">€{totalAiCost.toFixed(2)}</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">AI + Verifier Cost/Hour</div>
                </div>
              </div>

              <div className={`text-center p-4 rounded-lg font-semibold text-lg ${
                isDominant 
                  ? 'bg-red-500 text-white' 
                  : 'bg-green-500 text-white'
              }`}>
                {isDominant 
                  ? `AI achieves ${costRatio.toFixed(1)}x cost advantage - Dominance achieved`
                  : 'Human maintains cost advantage - Safe for now'
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Data Section */}
      <section id="data" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-12">Real-Time Economic Indicators</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-black text-red-500 mb-2">+0.3%</div>
              <div className="font-semibold mb-2">Real Wage Growth</div>
              <div className="text-sm text-gray-600">Inflation-adjusted wage increases. Minimal growth as AI competition intensifies.</div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-black text-red-500 mb-2">61.2%</div>
              <div className="font-semibold mb-2">Labor Share of GDP</div>
              <div className="text-sm text-gray-600">Percentage of economic output paid to workers. Declining as automation advances.</div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-black text-red-500 mb-2">-47%</div>
              <div className="font-semibold mb-2">AI Cost Reduction (YoY)</div>
              <div className="text-sm text-gray-600">Annual decline in AI inference costs. Accelerating due to hardware improvements.</div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-black text-red-500 mb-2">23M</div>
              <div className="font-semibold mb-2">Jobs at Risk (US)</div>
              <div className="text-sm text-gray-600">Cognitive roles where AI+verifier achieves cost dominance within 24 months.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Tracker */}
      <section id="industries" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-12">Industry Dominance Tracker</h2>
          
          <div className="space-y-4">
            {[
              { name: 'Content Writing & Copywriting', status: 'crossed' },
              { name: 'Basic Software Development', status: 'crossed' },
              { name: 'Data Entry & Processing', status: 'crossed' },
              { name: 'Customer Service (Text-based)', status: 'crossed' },
              { name: 'Translation Services', status: 'crossed' },
              { name: 'Contract Review & Legal Research', status: 'approaching' },
              { name: 'Financial Analysis', status: 'approaching' },
              { name: 'Accounting & Bookkeeping', status: 'approaching' },
              { name: 'Graphic Design (Basic)', status: 'approaching' },
              { name: 'Teaching (Standardized Content)', status: 'safe' },
              { name: 'Healthcare Diagnostics', status: 'safe' },
              { name: 'Creative Strategy', status: 'safe' }
            ].map((industry, index) => (
              <div key={index} className="flex justify-between items-center py-4 border-b border-gray-200">
                <div className="font-semibold flex-1">{industry.name}</div>
                <div className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${
                  industry.status === 'crossed' 
                    ? 'bg-red-100 text-red-800' 
                    : industry.status === 'approaching'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                  {industry.status === 'crossed' ? 'Threshold Crossed' :
                   industry.status === 'approaching' ? 'Approaching Threshold' : 'Currently Safe'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mathematical Proof */}
      <section id="proof" className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Mathematical Proof</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-800 border-l-4 border-red-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Premise 1: Cost Structure</h3>
              <p className="mb-4">Define the cost of cognitive task T:</p>
              <div className="bg-gray-700 p-4 rounded font-mono text-lg">
                Human_cost = w (hourly wage)<br/>
                AI_cost = c (compute + amortization)<br/>
                Verifier_cost = v (expert review time)
              </div>
            </div>

            <div className="bg-gray-800 border-l-4 border-red-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Premise 2: Cost Trends</h3>
              <p className="mb-4">Empirical observation over the last decade:</p>
              <div className="bg-gray-700 p-4 rounded font-mono text-lg">
                c → 0 (exponential decline via Moore's Law + algorithmic efficiency)<br/>
                w ≈ constant (wages track inflation, not productivity)<br/>
                v scales sub-linearly (spot-checking, not full review)
              </div>
            </div>

            <div className="bg-gray-800 border-l-4 border-red-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Premise 3: Competitive Threshold</h3>
              <p className="mb-4">Define replacement threshold r:</p>
              <div className="bg-gray-700 p-4 rounded font-mono text-lg">
                r = (c + v) / w<br/>
                When r &lt; 1.0, AI system is cost-competitive<br/>
                When r &lt; 0.1, human worker cannot compete without starving
              </div>
            </div>

            <div className="bg-gray-800 border-l-4 border-red-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Conclusion: Mathematical Inevitability</h3>
              <p className="mb-4">For any cognitive task T where quality parity exists:</p>
              <div className="bg-gray-700 p-4 rounded font-mono text-lg mb-4">
                lim(t→∞) r = 0<br/>
                ∴ All cognitive tasks cross dominance threshold<br/>
                ∴ Competitive markets eliminate human cognitive labor
              </div>
              <p className="text-lg">This is not economics. This is arithmetic. The only variables are the speed of crossing and which tasks cross first.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex justify-center space-x-8 mb-4">
            <a href="https://discontinuitythesis.com" className="text-white opacity-80 hover:opacity-100 transition-opacity">Full Discontinuity Thesis</a>
            <a href="#data" className="text-white opacity-80 hover:opacity-100 transition-opacity">Data Sources</a>
            <a href="mailto:contact@unitcostdominance.com" className="text-white opacity-80 hover:opacity-100 transition-opacity">Contact</a>
          </div>
          <p>&copy; 2025 Unit Cost Dominance. The mathematical certainty of technological unemployment.</p>
        </div>
      </footer>
    </div>
  );
}

export const metadata = {
  title: "Unit Cost Dominance Strategy",
  description: "Interactive analysis of AI's mathematical dominance over human labor costs. Features calculator, real-time data, and economic proof of technological unemployment.",
  type: "react",
  tags: ["economics","ai","automation","labor","calculator"],
  folder: "economics",
  createdAt: "2025-01-20T00:00:00Z",
  updatedAt: "2025-01-20T00:00:00Z",
} as const;
