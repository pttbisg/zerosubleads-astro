import React, { useState } from 'react';
import { Search, Linkedin, Mail, Check, ShieldCheck, ArrowRight } from 'lucide-react';

const Solution: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      title: "Just describe who you want",
      description: "Type natural language like \"fintech CFOs in Texas who joined in the last year.\" We translate it into filters. No boolean. No dropdowns. No guesswork.",
    },
    {
      id: 1,
      title: "LinkedIn profiles + emails together",
      description: "Every lead comes with their LinkedIn URL and verified email. Research and reach out from one place. No extra enrichment tool required.",
    },
    {
      id: 2,
      title: "Pay only for leads you pull",
      description: "No seats. No subscriptions. No minimums. Buy a credit pack, use it when you need it. Unused credits don't expire.",
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: 'radial-gradient(#64748b 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px'
        }}></div>

        {/* Animated Blobs */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-primary-200/40 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary-600 mr-2"></span>
            The Solution
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A better way to find leads
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Stop fighting with complex filters and expensive subscriptions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Accordion/List */}
          <div className="flex flex-col gap-4 h-full justify-center">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`
                  relative p-6 cursor-pointer transition-all duration-300 rounded-xl border
                  ${activeFeature === index
                    ? 'border-primary-200 bg-white ring-1 ring-primary-100 shadow-md scale-[1.02]'
                    : 'border-transparent bg-transparent hover:bg-white/60 hover:border-gray-200'
                  }
                `}
                onClick={() => setActiveFeature(index)}
              >
                <h3 className={`text-xl font-bold transition-colors ${activeFeature === index ? 'text-primary-900' : 'text-gray-600'}`}>
                  {feature.title}
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeFeature === index ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed pr-4">
                    {feature.description}
                  </p>
                  {activeFeature === index && (
                    <div className="mt-4 flex items-center text-primary-600 font-medium text-sm group">
                      Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Visual Preview */}
          <div className="relative h-[500px] bg-white rounded-2xl border border-gray-100 shadow-2xl shadow-gray-200/50 flex items-center justify-center p-4 sm:p-8 overflow-hidden">

            {/* Inner Card Background Texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-gray-50 opacity-50"></div>

            {/* Feature 0: NL Search Visual */}
            <div className={`w-full transition-all duration-700 ease-out absolute inset-0 flex items-center justify-center p-4 sm:p-12 ${activeFeature === 0 ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-1 pointer-events-none'}`}>
              <div className="w-full bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
                <div className="p-3 border-b border-gray-100 bg-gray-50 flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/20 border border-red-400/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/20 border border-amber-400/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/20 border border-green-400/50"></div>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="relative mb-6">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <div className="w-full bg-white border border-primary-200 shadow-[0_0_0_4px_rgba(59,130,246,0.1)] rounded-lg py-2.5 pl-10 pr-4 text-gray-900 font-medium text-sm sm:text-base font-mono">
                      fintech CFOs in Texas
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100 font-mono animate-pulse">
                      Role: <span className="font-bold">CFO</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100 font-mono animate-pulse" style={{ animationDelay: '200ms' }}>
                      Industry: <span className="font-bold">Fintech</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100 font-mono animate-pulse" style={{ animationDelay: '400ms' }}>
                      Location: <span className="font-bold">Texas</span>
                    </span>
                  </div>
                  <div className="space-y-3">
                     <div className="flex items-center gap-4 p-3 rounded-lg border border-gray-100 bg-gray-50/50">
                        <div className="h-10 w-10 rounded-full bg-gray-200/80"></div>
                        <div className="space-y-2 flex-1">
                           <div className="h-2.5 bg-gray-200/80 rounded w-1/3"></div>
                           <div className="h-2 bg-gray-200/60 rounded w-1/2"></div>
                        </div>
                     </div>
                     <div className="flex items-center gap-4 p-3 rounded-lg border border-gray-100 bg-gray-50/30 opacity-60">
                        <div className="h-10 w-10 rounded-full bg-gray-200/80"></div>
                        <div className="space-y-2 flex-1">
                           <div className="h-2.5 bg-gray-200/80 rounded w-1/3"></div>
                           <div className="h-2 bg-gray-200/60 rounded w-1/2"></div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 1: Profiles + Email Visual */}
            <div className={`w-full transition-all duration-700 ease-out absolute inset-0 flex items-center justify-center p-4 sm:p-12 ${activeFeature === 1 ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 -rotate-1 pointer-events-none'}`}>
               <div className="w-full max-w-sm bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 p-6 sm:p-8 relative">
                  <div className="absolute -top-3 right-6 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-200 shadow-sm flex items-center gap-1.5 z-10 font-mono">
                    <Check className="h-3 w-3 stroke-[3]" /> Verified
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-500 text-xl font-bold border-2 border-white shadow-sm">JD</div>
                    <div className="pt-1">
                      <div className="font-bold text-gray-900 text-lg">John Doe</div>
                      <div className="text-sm text-gray-500 font-medium">CFO at FintechFlow</div>
                      <div className="text-xs text-gray-400 mt-1">Austin, Texas Area</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="group flex items-center justify-between p-3 rounded-lg bg-[#0077b5]/5 border border-[#0077b5]/20 hover:bg-[#0077b5]/10 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Linkedin className="h-5 w-5 text-[#0077b5]" />
                        <span className="text-sm font-medium text-gray-700">linkedin.com/in/johndoe</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-[#0077b5] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 border border-green-200 shadow-sm">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium text-gray-700">john@fintechflow.com</span>
                      </div>
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex gap-2">
                     <span className="px-2 py-1 rounded bg-gray-50 text-gray-500 text-xs font-mono border border-gray-100">Finance</span>
                     <span className="px-2 py-1 rounded bg-gray-50 text-gray-500 text-xs font-mono border border-gray-100">SaaS</span>
                     <span className="px-2 py-1 rounded bg-gray-50 text-gray-500 text-xs font-mono border border-gray-100">Series A</span>
                  </div>
               </div>
            </div>

            {/* Feature 2: Pricing Visual */}
            <div className={`w-full transition-all duration-700 ease-out absolute inset-0 flex items-center justify-center p-4 sm:p-12 ${activeFeature === 2 ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-1 pointer-events-none'}`}>
               <div className="w-full max-w-sm bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
                  <div className="bg-gray-900 p-6 text-white relative overflow-hidden">
                     {/* Gloss effect */}
                     <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>

                     <div className="text-sm text-gray-400 font-medium mb-1 relative z-10">Available Credits</div>
                     <div className="text-4xl font-bold flex items-center gap-2 font-mono relative z-10">
                        450
                        <span className="text-sm font-normal text-gray-400 bg-gray-800 px-2 py-0.5 rounded-full font-sans">Pro Plan</span>
                     </div>
                  </div>
                  <div className="p-6">
                     <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 font-mono">Recent Activity</div>
                     <div className="space-y-0">
                        <div className="flex items-center justify-between py-3 border-b border-gray-50">
                           <div className="flex items-center gap-3">
                              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                 <ArrowRight className="h-4 w-4 rotate-45" />
                              </div>
                              <div>
                                 <div className="text-sm font-medium text-gray-900">Purchased Credits</div>
                                 <div className="text-xs text-gray-500">Oct 24, 2:30 PM</div>
                              </div>
                           </div>
                           <span className="font-bold text-green-600 font-mono">+500</span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-50">
                           <div className="flex items-center gap-3">
                              <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                                 <ArrowRight className="h-4 w-4 -rotate-45" />
                              </div>
                              <div>
                                 <div className="text-sm font-medium text-gray-900">Lead Export</div>
                                 <div className="text-xs text-gray-500">Today, 10:15 AM</div>
                              </div>
                           </div>
                           <span className="font-bold text-gray-900 font-mono">-1</span>
                        </div>
                        <div className="flex items-center justify-between py-3">
                           <div className="flex items-center gap-3">
                              <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                                 <ArrowRight className="h-4 w-4 -rotate-45" />
                              </div>
                              <div>
                                 <div className="text-sm font-medium text-gray-900">Lead Export</div>
                                 <div className="text-xs text-gray-500">Today, 10:14 AM</div>
                              </div>
                           </div>
                           <span className="font-bold text-gray-900 font-mono">-1</span>
                        </div>
                     </div>
                  </div>
                  <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                     <span className="text-xs text-gray-500 flex items-center justify-center gap-1">
                        <ShieldCheck className="h-3 w-3" /> Credits never expire
                     </span>
                  </div>
               </div>
            </div>

          </div>
        </div>

        {/* Safety Banner */}
        <div className="mt-16 lg:mt-24 rounded-2xl bg-white p-8 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center gap-6 text-center md:text-left relative overflow-hidden">
             {/* Subtle gradient behind banner */}
             <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 via-transparent to-transparent opacity-50"></div>

            <div className="relative h-12 w-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 border border-green-100 shrink-0">
               <ShieldCheck className="h-6 w-6" />
            </div>
            <div className="relative">
                <h4 className="font-bold text-gray-900 text-lg">Your LinkedIn account stays safe</h4>
                <p className="text-gray-600 mt-1 max-w-2xl">We pull the data—you never connect your account. No automation flags. No ban risk. No anxious refreshing to see if you're still logged in.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
