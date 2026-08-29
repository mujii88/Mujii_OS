'use client';

import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { fileSystem } from '@/lib/fileSystem';

type HistoryItem = {
  command: string;
  output: React.ReactNode;
};

const fsData = fileSystem as Record<string, Record<string, string>>;

// Resolve relative paths like ../foo, ./bar, etc.
function resolvePath(cwd: string, target: string): string {
  if (target.startsWith('/')) return target.replace(/\/+$/, '') || '/';

  const parts = cwd === '/' ? [] : cwd.split('/').filter(Boolean);
  const segments = target.split('/').filter(Boolean);

  for (const seg of segments) {
    if (seg === '.') continue;
    else if (seg === '..') parts.pop();
    else parts.push(seg);
  }

  return '/' + parts.join('/') || '/';
}

export default function Terminal() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [input, setInput] = useState('');
  const [currentDirectory, setCurrentDirectory] = useState('~');
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  // Map ~ to /
  const cwdToFs = (cwd: string) => cwd === '~' ? '/' : cwd.replace('~', '');
  const fsToDisplay = (path: string) => path === '/' ? '~' : '~' + path;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) {
      setHistory(prev => [...prev, { command: cmdStr, output: '' }]);
      return;
    }

    setCmdHistory(prev => [trimmed, ...prev]);
    setCmdIndex(-1);

    const args = trimmed.split(/\s+/).filter(Boolean);
    const command = args[0].toLowerCase();

    let output: React.ReactNode = '';
    const fsCwd = cwdToFs(currentDirectory);

    switch (command) {
      case 'help':
        output = (
          <div className="space-y-1">
            <div className="text-emerald-400 font-bold mb-2">━━━ Mujii OS Terminal v2.0 ━━━</div>
            <div className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-1">
              <span className="text-yellow-400">help</span><span className="text-gray-400">Display this help menu</span>
              <span className="text-yellow-400">ls [dir]</span><span className="text-gray-400">List directory contents</span>
              <span className="text-yellow-400">cd &lt;dir&gt;</span><span className="text-gray-400">Change directory</span>
              <span className="text-yellow-400">cat &lt;file&gt;</span><span className="text-gray-400">Print file contents</span>
              <span className="text-yellow-400">pwd</span><span className="text-gray-400">Print working directory</span>
              <span className="text-yellow-400">whoami</span><span className="text-gray-400">Display current user</span>
              <span className="text-yellow-400">neofetch</span><span className="text-gray-400">System information</span>
              <span className="text-yellow-400">clear</span><span className="text-gray-400">Clear terminal</span>
            </div>
          </div>
        );
        break;

      case 'ls': {
        const target = args[1] ? resolvePath(fsCwd, args[1]) : fsCwd;
        const dir = fsData[target];
        if (dir) {
          const items = Object.keys(dir).map(name => {
            const isDir = dir[name] === '[DIR]' || fsData[target === '/' ? `/${name}` : `${target}/${name}`];
            return (
              <span key={name} className={`mr-6 ${isDir ? 'text-blue-400 font-bold' : 'text-gray-200'}`}>
                {isDir ? `${name}/` : name}
              </span>
            );
          });
          output = <div className="flex flex-wrap gap-y-1">{items}</div>;
        } else {
          output = <span className="text-red-400">{`ls: cannot access '${args[1] || target}': No such file or directory`}</span>;
        }
        break;
      }

      case 'cd': {
        const targetArg = args[1];
        if (!targetArg || targetArg === '~') {
          setCurrentDirectory('~');
        } else {
          const resolved = resolvePath(fsCwd, targetArg);
          if (fsData[resolved] || resolved === '/') {
            setCurrentDirectory(fsToDisplay(resolved));
          } else {
            output = <span className="text-red-400">{`cd: ${targetArg}: No such directory`}</span>;
          }
        }
        break;
      }

      case 'cat': {
        const file = args[1];
        if (!file) {
          output = <span className="text-red-400">cat: missing file operand</span>;
        } else {
          // Support both relative and path-based cat
          const lastSlash = file.lastIndexOf('/');
          let dirPath: string;
          let fileName: string;
          if (lastSlash !== -1) {
            const dirPart = file.substring(0, lastSlash) || '/';
            dirPath = resolvePath(fsCwd, dirPart);
            fileName = file.substring(lastSlash + 1);
          } else {
            dirPath = fsCwd;
            fileName = file;
          }

          const dirContent = fsData[dirPath];
          if (dirContent && fileName in dirContent) {
            const content = dirContent[fileName];
            if (content === '[DIR]') {
              output = <span className="text-red-400">{`cat: ${fileName}: Is a directory`}</span>;
            } else {
              output = <div className="text-cyan-300 whitespace-pre font-mono">{content}</div>;
            }
          } else {
            output = <span className="text-red-400">{`cat: ${file}: No such file or directory`}</span>;
          }
        }
        break;
      }

      case 'pwd':
        output = <span className="text-gray-200">{fsCwd === '/' ? '/home/guest' : `/home/guest${fsCwd}`}</span>;
        break;

      case 'whoami':
        output = <span className="text-pink-400">guest@mujii-os</span>;
        break;

      case 'neofetch':
        output = (
          <div className="flex gap-6">
            <pre className="text-pink-400 leading-tight text-xs">{`
   ╱╲
  ╱  ╲
 ╱    ╲
╱  ╱╲  ╲
╲  ╲╱  ╱
 ╲    ╱
  ╲  ╱
   ╲╱`}</pre>
            <div className="space-y-1 text-sm">
              <div><span className="text-pink-400 font-bold">guest</span><span className="text-gray-500">@</span><span className="text-pink-400 font-bold">mujii-os</span></div>
              <div className="text-gray-600">──────────────────</div>
              <div><span className="text-pink-400 font-bold">OS</span>: Mujii OS v2.0</div>
              <div><span className="text-pink-400 font-bold">Host</span>: Portfolio Server</div>
              <div><span className="text-pink-400 font-bold">Kernel</span>: Next.js 15</div>
              <div><span className="text-pink-400 font-bold">Shell</span>: mujii-sh v1.0</div>
              <div><span className="text-pink-400 font-bold">Theme</span>: Blush Pink</div>
              <div><span className="text-pink-400 font-bold">Terminal</span>: Framer Motion TTY</div>
              <div className="mt-2 flex gap-1">
                {['bg-red-500','bg-orange-500','bg-yellow-500','bg-green-500','bg-cyan-500','bg-blue-500','bg-purple-500','bg-pink-500'].map(c => (
                  <div key={c} className={`w-4 h-4 rounded-sm ${c}`} />
                ))}
              </div>
            </div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      default:
        output = <span className="text-red-400">{`Command not found: ${command}. Type 'help' for available commands.`}</span>;
    }

    setHistory(prev => [...prev, { command: cmdStr, output }]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const newIndex = Math.min(cmdIndex + 1, cmdHistory.length - 1);
        setCmdIndex(newIndex);
        setInput(cmdHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdIndex > 0) {
        const newIndex = cmdIndex - 1;
        setCmdIndex(newIndex);
        setInput(cmdHistory[newIndex]);
      } else {
        setCmdIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Simple tab completion for current directory
      const fsCwd = cwdToFs(currentDirectory);
      const dir = fsData[fsCwd];
      if (dir && input) {
        const parts = input.split(/\s+/);
        const partial = parts[parts.length - 1];
        const matches = Object.keys(dir).filter(name => name.startsWith(partial));
        if (matches.length === 1) {
          parts[parts.length - 1] = matches[0];
          setInput(parts.join(' '));
        }
      }
    }
  };

  return (
    <div 
      className="h-full w-full bg-[#0a0a0a] p-4 overflow-y-auto text-gray-100 font-mono text-sm cursor-text"
      onClick={handleContainerClick}
    >
      <div className="mb-4 text-gray-500 border-b border-gray-800 pb-3">
        <span className="text-pink-400">Mujii OS</span> Terminal v2.0 — Type <span className="text-yellow-400">&apos;help&apos;</span> for available commands.
      </div>

      {history.map((item, index) => (
        <div key={index} className="mb-3">
          <div className="flex">
            <span className="text-pink-400 mr-1 shrink-0">guest@mujii-os</span>
            <span className="text-gray-500 mr-1">:</span>
            <span className="text-blue-400 mr-1 shrink-0">{currentDirectory}</span>
            <span className="text-gray-500 mr-2">$</span>
            <span className="text-gray-100">{item.command}</span>
          </div>
          <div className="mt-1 ml-1">{item.output}</div>
        </div>
      ))}

      <div className="flex items-center mt-2">
        <span className="text-pink-400 mr-1 shrink-0">guest@mujii-os</span>
        <span className="text-gray-500 mr-1">:</span>
        <span className="text-blue-400 mr-1 shrink-0">{currentDirectory}</span>
        <span className="text-gray-500 mr-2">$</span>
        <input
          ref={inputRef}
          type="text"
          className="flex-1 bg-transparent outline-none border-none text-gray-100 caret-pink-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          spellCheck="false"
        />
      </div>
      <div ref={endRef} />
    </div>
  );
}
