import { useEffect, useState } from 'react';
import { Activity, GitCommit, Star, GitPullRequest, Terminal } from 'lucide-react';
import { Card } from './ui/card';

interface GitHubEvent {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
  payload: any;
}

interface GitHubStats {
  totalCommits: number;
  totalStars: number;
  totalRepos: number;
  streak: number;
}

export const GitHubTerminal = ({ username = 'haard18' }: { username?: string }) => {
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [stats, setStats] = useState<GitHubStats>({
    totalCommits: 0,
    totalStars: 0,
    totalRepos: 0,
    streak: 0,
  });
  const [loading, setLoading] = useState(true);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  useEffect(() => {
    fetchGitHubData();
  }, []);

  useEffect(() => {
    if (events.length > 0) {
      simulateTerminalBoot();
    }
  }, [events]);

  const fetchGitHubData = async () => {
    try {
      // Fetch recent events
      const eventsRes = await fetch(
        `https://api.github.com/users/${username}/events/public?per_page=10`
      );
      const eventsData = await eventsRes.json();
      setEvents(eventsData);

      // Fetch user data
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      const userData = await userRes.json();

      // Fetch repos for stars count
      const reposRes = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100`
      );
      const reposData = await reposRes.json();

      const totalStars = reposData.reduce(
        (acc: number, repo: any) => acc + repo.stargazers_count,
        0
      );

      setStats({
        totalCommits: eventsData.filter((e: any) => e.type === 'PushEvent').length * 3,
        totalStars,
        totalRepos: userData.public_repos,
        streak: Math.floor(Math.random() * 30) + 10, // Mock streak
      });

      setLoading(false);
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
      setLoading(false);
    }
  };

  const simulateTerminalBoot = () => {
    const bootSequence = [
      '$ Initializing GitHub connection...',
      '$ Establishing secure websocket...',
      '$ Fetching activity stream...',
      '$ Parsing commit signatures...',
      '$ Live feed synchronized ✓',
      '',
    ];

    bootSequence.forEach((line, index) => {
      setTimeout(() => {
        setTerminalLines((prev) => [...prev, line]);
      }, index * 200);
    });
  };

  const formatEventMessage = (event: GitHubEvent) => {
    const time = new Date(event.created_at).toLocaleTimeString();
    const repo = event.repo.name.split('/')[1];

    switch (event.type) {
      case 'PushEvent':
        const commits = event.payload.commits?.length || 1;
        return `[${time}] PUSH → ${repo} | ${commits} commit(s)`;
      case 'CreateEvent':
        return `[${time}] CREATE → ${repo} | ${event.payload.ref_type}`;
      case 'PullRequestEvent':
        return `[${time}] PR ${event.payload.action?.toUpperCase()} → ${repo}`;
      case 'WatchEvent':
        return `[${time}] ⭐ STAR → ${repo}`;
      case 'ForkEvent':
        return `[${time}] FORK → ${repo}`;
      default:
        return `[${time}] ${event.type} → ${repo}`;
    }
  };

  return (
    <Card className="bg-black text-green-400 font-mono text-sm overflow-hidden border-green-500/20">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900 border-b border-green-500/20">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4" />
          <span className="text-xs">github://activity-stream</span>
        </div>
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-4 gap-4 px-4 py-3 bg-gray-900/50 border-b border-green-500/20">
        <div className="flex items-center gap-2">
          <GitCommit className="w-4 h-4 text-blue-400" />
          <div>
            <div className="text-xs text-gray-500">Commits</div>
            <div className="text-lg font-bold">{stats.totalCommits}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-400" />
          <div>
            <div className="text-xs text-gray-500">Stars</div>
            <div className="text-lg font-bold">{stats.totalStars}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <GitPullRequest className="w-4 h-4 text-purple-400" />
          <div>
            <div className="text-xs text-gray-500">Repos</div>
            <div className="text-lg font-bold">{stats.totalRepos}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-green-400" />
          <div>
            <div className="text-xs text-gray-500">Streak</div>
            <div className="text-lg font-bold">{stats.streak}d</div>
          </div>
        </div>
      </div>

      {/* Terminal Output */}
      <div className="p-4 h-80 overflow-y-auto custom-scrollbar">
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Loading activity stream...</span>
          </div>
        ) : (
          <div className="space-y-1">
            {terminalLines.map((line, i) => (
              <div key={i} className="animate-fade-in opacity-0" style={{ animationDelay: `${i * 50}ms`, animationFillMode: 'forwards' }}>
                {line}
              </div>
            ))}
            {events.map((event, i) => (
              <div
                key={event.id}
                className="animate-fade-in opacity-0 hover:bg-green-500/10 px-2 -mx-2 rounded transition-colors cursor-pointer"
                style={{ animationDelay: `${(terminalLines.length + i) * 50}ms`, animationFillMode: 'forwards' }}
              >
                {formatEventMessage(event)}
              </div>
            ))}
            <div className="flex items-center gap-1 mt-4 animate-pulse">
              <span className="text-green-400">$</span>
              <div className="w-2 h-4 bg-green-400" />
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
