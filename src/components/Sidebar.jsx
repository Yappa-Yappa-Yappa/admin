import { Flag, LayoutGrid, ListClock, MessageCircleText, Settings2, UserRound } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { icon: LayoutGrid, label: "Overview", path: "/overview" },
  { icon: Settings2, label: "Features", path: "/features" },
  { icon: Flag, label: "Reports", path: "/reports" },
  { icon: UserRound, label: "Users", path: "/users" },
  { icon: ListClock, label: "Audit Logs", path: "/audit-logs" },
  { icon: MessageCircleText, label: "Feedbacks", path: "/feedbacks" },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-0 flex h-screen w-[76px] shrink-0 select-none flex-col overflow-hidden border-r border-black/10 bg-white px-2 py-6 dark:border-neutral-800 dark:bg-neutral-950 lg:w-[240px] lg:px-4">
      <div className="pointer-events-none absolute left-1/2 top-0 h-36 w-36 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[70px] dark:bg-indigo-600/20" />

      <div className="relative z-10 mb-8 text-center lg:px-3 lg:text-left">
        <span className="font-belanosima text-2xl font-bold tracking-wide text-indigo-600 dark:text-indigo-300">
          <span className="hidden lg:inline">Yappa Admin</span>
          <span className="lg:hidden">Y</span>
        </span>
        <p className="mt-1 hidden text-xs font-medium uppercase tracking-widest text-neutral-400 lg:block">
          Dashboard
        </p>
      </div>

      <nav className="relative z-10 flex flex-col gap-1.5">
        {navItems.map(({ icon: Icon, label, path }) => (
          <NavLink
            key={path}
            to={path}
            title={label}
            className={({ isActive }) =>
              `group flex items-center justify-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors lg:justify-start ${
                isActive
                  ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300"
                  : "text-neutral-600 hover:bg-black/5 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-white/5 dark:hover:text-neutral-100"
              }`
            }
          >
            <Icon className="h-5 w-5 shrink-0" />
            <span className="hidden lg:inline">{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
