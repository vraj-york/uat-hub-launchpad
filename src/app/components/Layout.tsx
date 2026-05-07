import { Outlet, NavLink, Link, useLocation } from 'react-router';
import type { LucideIcon } from 'lucide-react';
import {
  FileText, FolderOpen, CheckSquare, Calendar,
  Bell, HelpCircle, Zap, ChevronDown, Settings, Mic, Bot
} from 'lucide-react';
import clientLinkLogo from '@/assets/images/client-link-48-a5ea1ca7.png';
import clientsNavIcon from '@/assets/images/client-link-73-b218e101.svg';

type MainNavItem =
  | { label: string; path: string; badge?: string; indigo?: boolean; icon: LucideIcon }
  | { label: string; path: string; badge?: string; indigo?: boolean; iconSrc: string };

const navItems: MainNavItem[] = [
  { label: 'Clients', iconSrc: clientsNavIcon, path: '/clients' },
  { label: 'Templates', icon: FileText, path: '/templates' },
  { label: 'Projects', icon: FolderOpen, path: '/projects' },
  { label: 'Tasks', icon: CheckSquare, path: '/tasks' },
  { label: 'Planning', icon: Calendar, path: '/planning' },
  { label: 'AI Notetaker', icon: Mic, path: '/ai-notetaker', badge: 'NEW' },
  { label: 'AI Agents', icon: Bot, path: '/ai-agents', badge: 'NEW', indigo: true },
];

const bottomNavItems = [
  { label: 'Notifications', icon: Bell, path: '/notifications', badge: 3 },
  { label: 'Settings', icon: Settings, path: '/settings' },
  { label: 'Help & Support', icon: HelpCircle, path: '/help' },
];

function Avatar({ initials, color, size = 'sm' }: { initials: string; color: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizes = { sm: 'w-6 h-6 text-[10px]', md: 'w-7 h-7 text-[11px]', lg: 'w-8 h-8 text-[12px]' };
  return (
    <div className={`${sizes[size]} rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0`} style={{ backgroundColor: color }}>
      {initials}
    </div>
  );
}

export { Avatar };

export default function Layout() {
  const location = useLocation();

  return (
    <div className="flex h-screen overflow-hidden bg-white" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {/* Sidebar */}
      <aside className="w-[220px] flex-shrink-0 bg-[#F8F9FA] border-r border-[#E5E7EB] flex flex-col h-full">
        {/* Logo */}
        <div className="h-[52px] flex items-center px-4 border-b border-[#E5E7EB] flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-[#2563EB] flex items-center justify-center flex-shrink-0">
              <Zap size={14} className="text-white" fill="white" />
            </div>
            <span className="text-[13px] font-semibold text-[#111827] leading-tight">
              Jetpack Workflow
            </span>
          </div>
        </div>

        {/* Firm selector */}
        <div className="px-3 py-2 border-b border-[#E5E7EB] flex-shrink-0">
          <button className="w-full flex items-center justify-between px-2 py-1.5 rounded hover:bg-[#EEEFF1] transition-colors group">
            <div className="flex items-center gap-2">
              <img
                src={clientLinkLogo}
                alt=""
                className="h-5 w-5 object-contain flex-shrink-0 rounded"
                width={20}
                height={20}
              />
              <span className="text-[12px] font-medium text-[#374151]">Kessler & Flynn CPA</span>
            </div>
            <ChevronDown size={12} className="text-[#9CA3AF]" />
          </button>
        </div>

        {/* Main nav */}
        <nav className="flex-1 px-2 py-3 overflow-y-auto">
          <div className="space-y-0.5">
            {navItems.map((item) => {
              const { label, path, badge, indigo } = item;
              const isActive = location.pathname === path || location.pathname.startsWith(path + '/') || (path === '/projects' && location.pathname === '/');
              const NavIcon = 'icon' in item ? item.icon : null;
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded text-[13px] transition-colors ${
                    isActive
                      ? 'bg-[#EFF6FF] text-[#2563EB] font-medium border-l-2 border-[#2563EB] pl-[10px]'
                      : 'text-[#374151] hover:bg-[#EEEFF1] font-normal border-l-2 border-transparent pl-[10px]'
                  }`}
                >
                  {NavIcon ? (
                    <NavIcon size={15} className={isActive ? 'text-[#2563EB]' : 'text-[#6B7280]'} />
                  ) : (
                    <img
                      src={item.iconSrc}
                      alt=""
                      className="h-[15px] w-[15px] object-contain flex-shrink-0"
                      width={15}
                      height={15}
                    />
                  )}
                  <span className="flex-1">{label}</span>
                  {badge && !isActive && (
                    <span className={`text-white text-[9px] font-bold rounded-full px-1.5 py-0.5 leading-none ${indigo ? 'bg-[#4F46E5]' : 'bg-gradient-to-r from-[#2563EB] to-[#7C3AED]'}`}>
                      {badge}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </div>

          <div className="my-3 border-t border-[#E5E7EB]" />

          <div className="space-y-0.5">
            {bottomNavItems.map(({ label, icon: Icon, path, badge }) => {
              const isActive = location.pathname === path;
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded text-[13px] transition-colors ${
                    isActive
                      ? 'bg-[#EFF6FF] text-[#2563EB] font-medium border-l-2 border-[#2563EB] pl-[10px]'
                      : 'text-[#374151] hover:bg-[#EEEFF1] font-normal border-l-2 border-transparent pl-[10px]'
                  }`}
                >
                  <Icon size={15} className={isActive ? 'text-[#2563EB]' : 'text-[#6B7280]'} />
                  <span className="flex-1">{label}</span>
                  {badge && !isActive && (
                    <span className="bg-[#2563EB] text-white text-[10px] font-semibold rounded-full min-w-[16px] h-4 flex items-center justify-center px-1">
                      {badge}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* User section */}
        <div className="border-t border-[#E5E7EB] p-3 flex-shrink-0">
          <div className="w-full flex items-center gap-2.5 px-2 py-1.5 rounded hover:bg-[#EEEFF1] transition-colors">
            <button type="button" className="flex flex-1 items-center gap-2.5 min-w-0 text-left">
              <Avatar initials="SK" color="#3B82F6" size="md" />
              <div className="flex-1 text-left min-w-0">
                <div className="text-[12px] font-medium text-[#111827] truncate">Sarah Kim</div>
                <div className="text-[11px] text-[#9CA3AF] truncate">sarah.kim@firmname.com</div>
              </div>
            </button>
            <Link
              to="/settings"
              title="Settings"
              className={`p-1 rounded hover:bg-[#E5E7EB] transition-colors flex-shrink-0 ${
                location.pathname === '/settings' ? 'text-[#2563EB]' : 'text-[#9CA3AF]'
              }`}
              aria-current={location.pathname === '/settings' ? 'page' : undefined}
            >
              <Settings size={13} />
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Outlet />
      </main>
    </div>
  );
}