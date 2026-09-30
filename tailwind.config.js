import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem' } },
    extend: {
      colors: {
        border: 'hsl(var(--border))', input: 'hsl(var(--input))', ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))', foreground: 'hsl(var(--foreground))',
        surface: { DEFAULT: 'hsl(var(--surface))', 2: 'hsl(var(--surface-2))' },
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
      },
      borderRadius: { sm: '8px', md: '14px', lg: '20px', xl: '28px', '2xl': '36px' },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.25rem, 9vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.04em', fontWeight: '600' }],
        headline: ['clamp(2.35rem, 5.2vw, 5.25rem)', { lineHeight: '1', letterSpacing: '-0.055em', fontWeight: '600' }],
        title: ['clamp(1.25rem, 2.2vw, 1.65rem)', { lineHeight: '1.18', letterSpacing: '-0.03em', fontWeight: '600' }],
        subtitle: ['clamp(1.1rem, 2vw, 1.35rem)', { lineHeight: '1.5', letterSpacing: '-0.015em', fontWeight: '400' }],
        body: ['1.0625rem', { lineHeight: '1.7' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.65' }],
        caption: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
      },
      boxShadow: {
        sm: '0 8px 24px -16px rgb(17 17 28 / .24)',
        DEFAULT: '0 18px 55px -32px rgb(17 17 28 / .3)',
        md: '0 28px 90px -46px rgb(17 17 28 / .44)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
