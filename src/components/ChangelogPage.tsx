import React, { useState, useMemo, useEffect } from 'react';
import {
  ArrowLeft,
  Search,
  Tag,
  GitCommit,
  CheckCircle,
  Filter,
  Layers,
  Sparkles,
} from 'lucide-react';
import { CHANGELOG_DATA } from '../data/portfolioData';
import { ChangelogCategory, ChangelogEntry } from '../types';

interface ChangelogPageProps {
  onBack: () => void;
}

export const ChangelogPage: React.FC<ChangelogPageProps> = ({ onBack }) => {
  const [entries, setEntries] = useState<ChangelogEntry[]>(CHANGELOG_DATA);
  const [selectedProject, setSelectedProject] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    fetch('/api/changelog')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.changelog && Array.isArray(data.changelog) && data.changelog.length > 0) {
          setEntries(data.changelog);
        }
      })
      .catch(() => {
        // Fallback to static CHANGELOG_DATA
      });
  }, []);

  // Extract unique project list
  const projects = useMemo(() => {
    const set = new Set<string>();
    entries.forEach((entry) => set.add(entry.projectName));
    return Array.from(set);
  }, [entries]);

  const categories: { id: string; label: string }[] = [
    { id: 'all', label: 'All Categories' },
    { id: 'Release', label: 'Releases' },
    { id: 'Feature', label: 'Features' },
    { id: 'Improvement', label: 'Improvements' },
    { id: 'Fix', label: 'Fixes' },
    { id: 'Maintenance', label: 'Maintenance' },
  ];

  const filteredEntries = useMemo(() => {
    return entries.filter((entry) => {
      if (selectedProject !== 'all' && entry.projectName !== selectedProject) return false;
      if (selectedCategory !== 'all' && entry.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = entry.title.toLowerCase().includes(q);
        const matchesDesc = entry.description.toLowerCase().includes(q);
        const matchesProject = entry.projectName.toLowerCase().includes(q);
        const matchesChanges = entry.keyChanges.some((c) => c.toLowerCase().includes(q));
        const matchesHash = entry.commitHash && entry.commitHash.toLowerCase().includes(q);
        return matchesTitle || matchesDesc || matchesProject || matchesChanges || matchesHash;
      }
      return true;
    });
  }, [selectedProject, selectedCategory, searchQuery]);

  const getCategoryColor = (category: ChangelogCategory) => {
    switch (category) {
      case 'Release':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Feature':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Improvement':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Fix':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Maintenance':
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-200 gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-brand-navy px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white shadow-xs transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-xs font-mono font-semibold text-brand-navy uppercase tracking-wider">
              Engineering Changelog & Release Feed
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-500">
              Total Verified Milestones: <strong>{entries.length}</strong>
            </span>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm mb-8">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-brand-blue uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verifiable Engineering Timeline</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight mb-2">
            Engineering Changelog & Milestone Record
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
            A chronological record of releases, architectural enhancements, client deployments, and verified computer vision benchmarks across all SUDHARSHAN_TECH systems.
          </p>
        </div>

        {/* Search & Filters Controls */}
        <div className="space-y-3 mb-8">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search release notes, features, or git commit hashes..."
              className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-slate-200 text-xs font-mono focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-brand-navy cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 bg-white rounded-xl border border-slate-200 text-xs">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-mono text-slate-400 text-[11px] flex items-center gap-1 mr-1">
                <Filter className="w-3 h-3" /> Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-brand-navy text-white font-semibold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5 w-full sm:w-auto">
              <span className="font-mono text-slate-400 text-[11px] shrink-0 flex items-center gap-1">
                <Layers className="w-3 h-3" /> Project:
              </span>
              <select
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                className="bg-slate-100 rounded-md border border-slate-200 px-2 py-1 text-xs font-mono text-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-blue w-full sm:w-auto cursor-pointer"
              >
                <option value="all">All Projects</option>
                {projects.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Changelog Timeline Feed */}
        {filteredEntries.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <Tag className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <h3 className="text-sm font-bold text-brand-navy mb-1">No Matching Release Entries</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
              No changelog entries matched your selected filters or search query.
            </p>
            <button
              onClick={() => {
                setSelectedProject('all');
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs font-mono font-semibold text-brand-blue hover:underline cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 space-y-8">
            {filteredEntries.map((entry) => (
              <div key={entry.id} className="relative group">
                {/* Timeline node circle */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-brand-blue group-hover:scale-125 transition-transform" />

                {/* Entry Card */}
                <div className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-brand-blue/50 hover:shadow-md transition-all">
                  
                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded font-semibold border ${getCategoryColor(
                          entry.category
                        )}`}
                      >
                        {entry.category}
                      </span>
                      <span className="text-xs font-mono font-semibold text-brand-navy bg-slate-100 px-2 py-0.5 rounded border border-slate-200/80">
                        {entry.projectName}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                      <span>{entry.date}</span>
                      {entry.commitHash && (
                        <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                          <GitCommit className="w-3 h-3 text-brand-blue" />
                          <span>#{entry.commitHash}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-brand-navy mb-1.5">{entry.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{entry.description}</p>

                  {/* Key Changes List */}
                  <div className="pt-3 border-t border-slate-100">
                    <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Key Technical Deliverables:
                    </h4>
                    <ul className="space-y-1.5">
                      {entry.keyChanges.map((change, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{change}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Verified Badge */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400">Verification State:</span>
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      <span>{entry.verifiedStatus}</span>
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
