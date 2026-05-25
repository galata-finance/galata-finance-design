/**
 * @galata/design — Shared Tailwind preset
 *
 * Consuming app'te kullanım:
 *   import galataPreset from '@galata/design/tailwind';
 *   export default { presets: [galataPreset], content: [...] }
 */
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background:  'var(--background)',
        foreground:  'var(--foreground)',
        card: {
          DEFAULT:    'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT:    'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT:    'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT:    'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT:    'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT:    'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
        },
        border: 'var(--border)',
        input:  'var(--input)',
        ring:   'var(--ring)',
        brand: {
          DEFAULT:    'var(--brand)',
          foreground: 'var(--brand-foreground)',
        },
        gain: {
          DEFAULT:    'var(--gain)',
          foreground: 'var(--gain-foreground)',
        },
        loss: {
          DEFAULT:    'var(--loss)',
          foreground: 'var(--loss-foreground)',
        },
        tertiary: {
          DEFAULT:    'var(--tertiary)',
          foreground: 'var(--tertiary-foreground)',
        },
        success: {
          DEFAULT:    'var(--success)',
          foreground: 'var(--success-foreground)',
        },
        warning: {
          DEFAULT:    'var(--warning)',
          foreground: 'var(--warning-foreground)',
        },
        chart: {
          '1': 'var(--chart-1)',
          '2': 'var(--chart-2)',
          '3': 'var(--chart-3)',
          '4': 'var(--chart-4)',
          '5': 'var(--chart-5)',
          '6': 'var(--chart-6)',
          '7': 'var(--chart-7)',
          '8': 'var(--chart-8)',
        },
        sidebar: {
          DEFAULT:                    'var(--sidebar)',
          foreground:                 'var(--sidebar-foreground)',
          primary:                    'var(--sidebar-primary)',
          'primary-foreground':       'var(--sidebar-primary-foreground)',
          accent:                     'var(--sidebar-accent)',
          'accent-foreground':        'var(--sidebar-accent-foreground)',
          border:                     'var(--sidebar-border)',
          ring:                       'var(--sidebar-ring)',
        },
        surface: {
          low:     'var(--surface-low)',
          DEFAULT: 'var(--surface)',
          high:    'var(--surface-high)',
          highest: 'var(--surface-highest)',
        },
        /* Hover semantic tokens — use as hover:bg-hover-card etc. */
        'hover-card':         'var(--hover-card)',
        'hover-surface-high': 'var(--hover-surface-high)',
        'hover-surface':      'var(--hover-surface)',
        'hover-row':          'var(--hover-row)',
        'hover-sidebar-item': 'var(--hover-sidebar-item)',
        ds: {
          primary:           'var(--ds-primary)',
          'primary-container': 'var(--ds-primary-container)',
          secondary:         'var(--ds-secondary)',
          tertiary:          'var(--ds-tertiary)',
        },
      },
      borderRadius: {
        '2xl': '1.5rem',
        xl:    '1rem',
        lg:    '0.75rem',
        md:    '0.5rem',
        sm:    '0.375rem',
      },
      fontFamily: {
        sans:    ['Nunito', 'Inter', 'sans-serif'],
        display: ['Nunito', 'Inter', 'sans-serif'],
        brand:   ['Syne', 'sans-serif'],
      },
      boxShadow: {
        sm:        'var(--shadow-sm)',
        DEFAULT:   'var(--shadow-md)',
        md:        'var(--shadow-md)',
        lg:        'var(--shadow-lg)',
        xl:        'var(--shadow-xl)',
        glow:      'var(--shadow-glow)',
        'glow-sm': 'var(--shadow-glow-sm)',
      },
      transitionDuration: {
        instant: 'var(--duration-instant)',
        fast:    'var(--duration-fast)',
        DEFAULT: 'var(--duration-normal)',
        normal:  'var(--duration-normal)',
        slow:    'var(--duration-slow)',
        slower:  'var(--duration-slower)',
      },
      transitionTimingFunction: {
        DEFAULT: 'var(--ease-default)',
        spring:  'var(--ease-spring)',
        bounce:  'var(--ease-bounce)',
        in:      'var(--ease-in)',
        out:     'var(--ease-out)',
      },
    },
  },
  plugins: [],
};

export default config;
