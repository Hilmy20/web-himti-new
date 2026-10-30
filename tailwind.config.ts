import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
			tablet: "834px",
			desktop: "1068px",
			wide: "1440px",
		},
		extend: {
			fontFamily: {
				sans: [
					"var(--font-poppins)",
					"-apple-system",
					"BlinkMacSystemFont",
					"SF Pro Text",
					"system-ui",
					"sans-serif",
				],
				display: [
					"var(--font-poppins)",
					"-apple-system",
					"BlinkMacSystemFont",
					"SF Pro Display",
					"system-ui",
					"sans-serif",
				],
				wordmark: ["VELISTA", "serif"],
			},
			fontSize: {
				hero: ["56px", { lineHeight: "1.07", letterSpacing: "-0.28px", fontWeight: "600" }],
				"display-lg": ["40px", { lineHeight: "1.1", letterSpacing: "-0.4px", fontWeight: "600" }],
				"display-md": ["34px", { lineHeight: "1.2", letterSpacing: "-0.374px", fontWeight: "600" }],
				lead: ["28px", { lineHeight: "1.3", letterSpacing: "0.196px", fontWeight: "400" }],
				"lead-airy": ["24px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "300" }],
				tagline: ["21px", { lineHeight: "1.19", letterSpacing: "0.231px", fontWeight: "600" }],
				"body-strong": ["17px", { lineHeight: "1.24", letterSpacing: "-0.374px", fontWeight: "600" }],
				body: ["17px", { lineHeight: "1.47", letterSpacing: "-0.374px", fontWeight: "400" }],
				"dense-link": ["17px", { lineHeight: "2.41", letterSpacing: "0", fontWeight: "400" }],
				caption: ["14px", { lineHeight: "1.43", letterSpacing: "-0.224px", fontWeight: "400" }],
				"caption-strong": ["14px", { lineHeight: "1.29", letterSpacing: "-0.224px", fontWeight: "600" }],
				"button-lg": ["18px", { lineHeight: "1", letterSpacing: "0", fontWeight: "300" }],
				"button-utility": ["14px", { lineHeight: "1.29", letterSpacing: "-0.224px", fontWeight: "400" }],
				fine: ["12px", { lineHeight: "1", letterSpacing: "-0.12px", fontWeight: "400" }],
				micro: ["10px", { lineHeight: "1.3", letterSpacing: "-0.08px", fontWeight: "400" }],
				nav: ["12px", { lineHeight: "1", letterSpacing: "-0.12px", fontWeight: "400" }],
				eyebrow: ["12px", { lineHeight: "1", letterSpacing: "0.12em", fontWeight: "600" }],
			},
			colors: {
				brand: {
					primary: "#33CC00",
					secondary: "#2AAF15",
					dark: "#003300",
					light: "#FEFEFE",
					link: "#166B0B",
					"link-on-dark": "#33CC00",
					main: "#2AAF15",
					subtle: "#D5F5CE",
				},
				ink: {
					DEFAULT: "#003300",
					muted: "#4A5A49",
					fine: "#5A6A59",
					disabled: "#6B7A6A",
					"on-dark": "#FEFEFE",
					"on-dark-muted": "#C9D6C9",
				},
				surface: {
					canvas: "#FEFEFE",
					parchment: "#F3F5F2",
					pearl: "#FAFBF9",
					dark: "#003300",
					"dark-2": "#073D07",
					"dark-3": "#002600",
					black: "#000000",
				},
				hairline: "#E3E7E1",
				"divider-soft": "#EFF2EE",
				chip: "#D2D2D7",
				state: {
					error: "#B42318",
					warning: "#946200",
					success: "#166B0B",
				},
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
			},
			borderRadius: {
				DEFAULT: "11px",
				xs: "5px",
				sm: "8px",
				md: "11px",
				lg: "18px",
				pill: "9999px",
			},
			boxShadow: {
				product: "3px 5px 30px rgba(0, 0, 0, 0.22)",
			},
			transitionTimingFunction: {
				apple: "cubic-bezier(0.16, 1, 0.3, 1)",
			},
			keyframes: {
				"marquee-left": {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-33.33%)" },
				},
				"marquee-right": {
					"0%": { transform: "translateX(-33.33%)" },
					"100%": { transform: "translateX(0%)" },
				},
				"team-marquee": {
					"0%": { transform: "translateX(-50%)" },
					"100%": { transform: "translateX(0%)" },
				},
			},
			animation: {
				"marquee-left": "marquee-left 35s linear infinite",
				"marquee-right": "marquee-right 35s linear infinite",
				"team-marquee": "team-marquee 45s linear infinite",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};

export default config;
