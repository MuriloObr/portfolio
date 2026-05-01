import { config } from '../config/config'

export function SideNav({ active }: { active: string }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <nav className="fixed right-6 top-1/2 z-50 flex flex-col gap-4 -translate-y-1/2 font-mono">
      {config.NAV_LINKS.map((link) => (
        <button
          key={link.id}
          onClick={() => scrollTo(link.id)}
          className={`group flex items-center gap-2 text-xs tracking-widest transition-all duration-300 hover:opacity-100 ${
            active === link.id
              ? 'text-primary opacity-100'
              : 'text-secondary opacity-50'
          }`}
        >
          <span
            className={`ml-auto transition-all duration-300 block h-px ${
              active === link.id ? 'w-7 bg-primary' : 'w-2.5 bg-secondary'
            }`}
          />
          <span className="transition-all text-[10px]">{link.label}</span>
          <span
            className={`block w-1.5 h-1.5 shrink-0 border transition-all ${
              active === link.id
                ? 'border-primary bg-primary'
                : 'border-secondary bg-transparent'
            }`}
          />
        </button>
      ))}
    </nav>
  )
}
