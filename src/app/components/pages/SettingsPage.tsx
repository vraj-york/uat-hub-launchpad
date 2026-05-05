import { Link } from 'react-router';
import { Mic, Bell, ChevronRight } from 'lucide-react';

const SETTINGS_SECTIONS = [
  {
    to: '/ai-notetaker/settings',
    icon: Mic,
    color: '#2563EB',
    bg: '#EFF6FF',
    title: 'AI Notetaker',
    description:
      'Bot identity, meeting platforms, summary emails, and default behaviors for calls and suggestions.',
    linkClassName:
      'bg-red-500 border-red-600 hover:bg-red-600 hover:border-red-700 [&_h2]:!text-white [&_p]:!text-red-100 [&>svg]:!text-red-200 group-hover:[&>svg]:!text-white',
  },
  {
    to: '/notifications',
    icon: Bell,
    color: '#059669',
    bg: '#F0FDF4',
    title: 'Notifications',
    description:
      'Choose in-app and email preferences for tasks, mentions, due dates, and project updates.',
  },
];

export default function SettingsPage() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="h-[52px] border-b border-[#E5E7EB] flex items-center px-6 flex-shrink-0 bg-white">
        <h1 className="text-[20px] font-semibold text-[#111827]">Settings</h1>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="max-w-[760px] mx-auto px-6 py-8">
          <p className="text-[13px] text-[#6B7280] mb-6 leading-relaxed">
            Manage integrations and preferences for your workspace. Open a section below to configure details.
          </p>

          <div className="grid gap-3">
            {SETTINGS_SECTIONS.map(section => {
              const Icon = section.icon;
              return (
                <Link
                  key={section.to}
                  to={section.to}
                  className={`group flex items-start gap-4 p-4 border border-[#E5E7EB] rounded-xl hover:border-[#D1D5DB] hover:bg-[#FAFAFA] transition-all text-left ${
                    section.linkClassName ?? ''
                  }`}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: section.bg }}
                  >
                    <Icon size={18} style={{ color: section.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h2 className="text-[14px] font-semibold text-[#111827]">{section.title}</h2>
                    </div>
                    <p className="text-[12px] text-[#6B7280] leading-relaxed mt-1">{section.description}</p>
                  </div>
                  <ChevronRight
                    size={18}
                    className="text-[#D1D5DB] group-hover:text-[#2563EB] flex-shrink-0 mt-2 transition-colors"
                  />
                </Link>
              );
            })}
          </div>

          <p className="text-[12px] text-[#9CA3AF] mt-8 leading-relaxed">
            Tip: You can also open AI Notetaker settings from the AI Notetaker hub via the Settings button.
          </p>
        </div>
      </div>
    </div>
  );
}
