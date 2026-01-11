import { useState } from 'react';
import { Github, ChevronDown } from 'lucide-react';

type Repo = {
  label: string;
  url: string;
};

type Props = {
  repos: Repo[];
};

export const GithubDropdown = ({ repos }: Props) => {
  const [open, setOpen] = useState(false);

  if (repos.length === 1) {
    return (
      <a
        href={repos[0].url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
      >
        <Github size={18} />
        {repos[0].label}
      </a>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
      >
        <Github size={18} />
        <span>Code</span>
        <ChevronDown size={14} />
      </button>

      {open && (
        <div className="absolute left-0 z-20 mt-2 min-w-[160px] rounded-lg border border-slate-700 bg-slate-900 shadow-lg sm:left-auto sm:right-0">
          {repos.map((repo) => (
            <a
              key={repo.url}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block whitespace-nowrap px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              {repo.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
