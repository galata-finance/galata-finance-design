/**
 * @galata/design — Shared Tailwind preset
 *
 * Consuming app'te kullanim:
 *   import galataPreset from '@galata/design/tailwind';
 *   export default { presets: [galataPreset], content: [...] }
 */
import type { Config } from 'tailwindcss';

/**
 * Renk token'ini ALFA MODİFİKATÖRÜNE açık hâle getirir.
 *
 * Token'lar `#4f83f6` gibi HEX tutuyor. Tailwind bir opaklık modifikatörü
 * gördüğünde (`bg-brand/60`) değeri `rgb(var(--brand) / 0.6)` diye yeniden
 * yazıyor; `--brand` kanal üçlüsü olmadığı için bu GEÇERSİZ bir renk
 * üretiyor ve tarayıcı onu SESSİZCE şeffaf yapıyor. Yani `bg-brand/60`,
 * `bg-gain/12` gibi her tonlama hiç çizilmiyordu — hata vermeden.
 *
 * Göreli renk sözdizimi (`rgb(from ... r g b / alpha)`) hex token'i bozmadan
 * alfayı çalıştırır: modifikatör yokken Tailwind `<alpha-value>` yerine 1
 * koyar ve renk aynen kalır.
 */
function withAlpha(token: string): string {
  return `rgb(from var(${token}) r g b / <alpha-value>)`;
}

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background:  withAlpha('--background'),
        foreground:  withAlpha('--foreground'),
        card: {
          DEFAULT:    withAlpha('--card'),
          foreground: withAlpha('--card-foreground'),
        },
        popover: {
          DEFAULT:    withAlpha('--popover'),
          foreground: withAlpha('--popover-foreground'),
        },
        primary: {
          DEFAULT:    withAlpha('--primary'),
          foreground: withAlpha('--primary-foreground'),
        },
        secondary: {
          DEFAULT:    withAlpha('--secondary'),
          foreground: withAlpha('--secondary-foreground'),
        },
        muted: {
          DEFAULT:    withAlpha('--muted'),
          foreground: withAlpha('--muted-foreground'),
        },
        accent: {
          DEFAULT:    withAlpha('--accent'),
          foreground: withAlpha('--accent-foreground'),
        },
        destructive: {
          DEFAULT: withAlpha('--destructive'),
        },
        border: withAlpha('--border'),
        input:  withAlpha('--input'),
        ring:   withAlpha('--ring'),
        brand: {
          DEFAULT:    withAlpha('--brand'),
          foreground: withAlpha('--brand-foreground'),
        },
        gain: {
          DEFAULT:    withAlpha('--gain'),
          foreground: withAlpha('--gain-foreground'),
        },
        loss: {
          DEFAULT:    withAlpha('--loss'),
          foreground: withAlpha('--loss-foreground'),
        },
        tertiary: {
          DEFAULT:    withAlpha('--tertiary'),
          foreground: withAlpha('--tertiary-foreground'),
        },
        success: {
          DEFAULT:    withAlpha('--success'),
          foreground: withAlpha('--success-foreground'),
        },
        warning: {
          DEFAULT:    withAlpha('--warning'),
          foreground: withAlpha('--warning-foreground'),
        },
        chart: {
          '1': withAlpha('--chart-1'),
          '2': withAlpha('--chart-2'),
          '3': withAlpha('--chart-3'),
          '4': withAlpha('--chart-4'),
          '5': withAlpha('--chart-5'),
          '6': withAlpha('--chart-6'),
          '7': withAlpha('--chart-7'),
          '8': withAlpha('--chart-8'),
        },
        sidebar: {
          DEFAULT:                    withAlpha('--sidebar'),
          foreground:                 withAlpha('--sidebar-foreground'),
          primary:                    withAlpha('--sidebar-primary'),
          'primary-foreground':       withAlpha('--sidebar-primary-foreground'),
          accent:                     withAlpha('--sidebar-accent'),
          'accent-foreground':        withAlpha('--sidebar-accent-foreground'),
          border:                     withAlpha('--sidebar-border'),
          ring:                       withAlpha('--sidebar-ring'),
        },
        surface: {
          low:     withAlpha('--surface-low'),
          DEFAULT: withAlpha('--surface'),
          high:    withAlpha('--surface-high'),
          highest: withAlpha('--surface-highest'),
        },
        /* Dashboard layout tokens */
        band:   withAlpha('--band'),
        panel: {
          DEFAULT: withAlpha('--panel'),
          '2':     withAlpha('--panel2'),
          '3':     withAlpha('--panel3'),
        },
        fg: {
          DEFAULT: withAlpha('--fg'),
          '2':     withAlpha('--fg2'),
        },
        mut:      withAlpha('--mut'),
        sbborder: withAlpha('--sbborder'),
        /* Hover semantic tokens */
        'hover-card':         withAlpha('--hover-card'),
        'hover-surface-high': withAlpha('--hover-surface-high'),
        'hover-surface':      withAlpha('--hover-surface'),
        'hover-row':          withAlpha('--hover-row'),
        'hover-sidebar-item': withAlpha('--hover-sidebar-item'),
        ds: {
          primary:           withAlpha('--ds-primary'),
          'primary-container': withAlpha('--ds-primary-container'),
          secondary:         withAlpha('--ds-secondary'),
          tertiary:          withAlpha('--ds-tertiary'),
        },
      },
      borderRadius: {
        '3xl': '1.625rem',
        '2xl': '1.5rem',
        xl:    '1rem',
        lg:    '0.75rem',
        md:    '0.5rem',
        sm:    '0.375rem',
      },
      fontFamily: {
        sans:    ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        brand:   ['Syne', 'sans-serif'],
      },
      fontWeight: {
        extrabold: '800',
      },
      boxShadow: {
        sm:        'var(--shadow-sm)',
        DEFAULT:   'var(--shadow-md)',
        md:        'var(--shadow-md)',
        lg:        'var(--shadow-lg)',
        xl:        'var(--shadow-xl)',
        glow:      'var(--shadow-glow)',
        'glow-sm': 'var(--shadow-glow-sm)',
        card:      'var(--shadow-card)',
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
