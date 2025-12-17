export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      colors: {
        sand: "#F6F4EF",
        clay: "#C48C6A",
        ink: "#2F2C28",
        muted: "#7A746E",
        turquoise: "#7AA29E",
        linen: "#EDE8E1",
        border: "#D8D3CC",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(47,44,40,0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
    },
  },
  plugins: [],
}
