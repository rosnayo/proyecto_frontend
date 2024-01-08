/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        incalpacastorescomblack: "var(--incalpacastorescomblack)",
        "incalpacastorescomblack-14": "var(--incalpacastorescomblack-14)",
        incalpacastorescomboulder: "var(--incalpacastorescomboulder)",
        "incalpacastorescomcod-gray": "var(--incalpacastorescomcod-gray)",
        "incalpacastorescomdove-gray": "var(--incalpacastorescomdove-gray)",
        incalpacastorescomgallery: "var(--incalpacastorescomgallery)",
        "incalpacastorescomgray-chateau": "var(--incalpacastorescomgray-chateau)",
        "incalpacastorescomjapanese-laurel": "var(--incalpacastorescomjapanese-laurel)",
        incalpacastorescommercury: "var(--incalpacastorescommercury)",
        "incalpacastorescommine-shaft": "var(--incalpacastorescommine-shaft)",
        incalpacastorescomnero: "var(--incalpacastorescomnero)",
        "incalpacastorescomoxford-blue": "var(--incalpacastorescomoxford-blue)",
        "incalpacastorescomwild-sand": "var(--incalpacastorescomwild-sand)",
      },
      fontFamily: {
        "incalpacastores-com-arial-bold-10-8-upper": "var(--incalpacastores-com-arial-bold-10-8-upper-font-family)",
        "incalpacastores-com-arial-bold-10-upper": "var(--incalpacastores-com-arial-bold-10-upper-font-family)",
        "incalpacastores-com-arial-bold-11-upper": "var(--incalpacastores-com-arial-bold-11-upper-font-family)",
        "incalpacastores-com-arial-bold-14-4": "var(--incalpacastores-com-arial-bold-14-4-font-family)",
        "incalpacastores-com-arial-bold-18": "var(--incalpacastores-com-arial-bold-18-font-family)",
        "incalpacastores-com-arial-narrow-14-4": "var(--incalpacastores-com-arial-narrow-14-4-font-family)",
        "incalpacastores-com-arial-narrow-18": "var(--incalpacastores-com-arial-narrow-18-font-family)",
        "incalpacastores-com-arial-narrow-18-underline":
          "var(--incalpacastores-com-arial-narrow-18-underline-font-family)",
        "incalpacastores-com-inter-black-20-84": "var(--incalpacastores-com-inter-black-20-84-font-family)",
        "incalpacastores-com-inter-black-21": "var(--incalpacastores-com-inter-black-21-font-family)",
        "incalpacastores-com-inter-black-22-82": "var(--incalpacastores-com-inter-black-22-82-font-family)",
        "incalpacastores-com-inter-black-23": "var(--incalpacastores-com-inter-black-23-font-family)",
        "incalpacastores-com-inter-bold-13-29-upper": "var(--incalpacastores-com-inter-bold-13-29-upper-font-family)",
        "incalpacastores-com-inter-bold-13-39-upper": "var(--incalpacastores-com-inter-bold-13-39-upper-font-family)",
        "incalpacastores-com-inter-bold-13-5-upper": "var(--incalpacastores-com-inter-bold-13-5-upper-font-family)",
        "incalpacastores-com-inter-bold-15-06": "var(--incalpacastores-com-inter-bold-15-06-font-family)",
        "incalpacastores-com-inter-bold-15-69": "var(--incalpacastores-com-inter-bold-15-69-font-family)",
        "incalpacastores-com-inter-bold-16-73": "var(--incalpacastores-com-inter-bold-16-73-font-family)",
        "incalpacastores-com-inter-bold-16-upper": "var(--incalpacastores-com-inter-bold-16-upper-font-family)",
        "incalpacastores-com-inter-bold-17-02": "var(--incalpacastores-com-inter-bold-17-02-font-family)",
        "incalpacastores-com-inter-bold-17-44": "var(--incalpacastores-com-inter-bold-17-44-font-family)",
        "incalpacastores-com-inter-bold-20-84": "var(--incalpacastores-com-inter-bold-20-84-font-family)",
        "incalpacastores-com-inter-bold-21": "var(--incalpacastores-com-inter-bold-21-font-family)",
        "incalpacastores-com-inter-bold-22-5-upper": "var(--incalpacastores-com-inter-bold-22-5-upper-font-family)",
        "incalpacastores-com-inter-bold-22-82": "var(--incalpacastores-com-inter-bold-22-82-font-family)",
        "incalpacastores-com-inter-bold-23": "var(--incalpacastores-com-inter-bold-23-font-family)",
        "incalpacastores-com-inter-bold-23-44": "var(--incalpacastores-com-inter-bold-23-44-font-family)",
        "incalpacastores-com-inter-bold-24": "var(--incalpacastores-com-inter-bold-24-font-family)",
        "incalpacastores-com-inter-bold-27-upper": "var(--incalpacastores-com-inter-bold-27-upper-font-family)",
        "incalpacastores-com-inter-bold-29-3": "var(--incalpacastores-com-inter-bold-29-3-font-family)",
        "incalpacastores-com-inter-bold-29-41": "var(--incalpacastores-com-inter-bold-29-41-font-family)",
        "incalpacastores-com-inter-bold-30": "var(--incalpacastores-com-inter-bold-30-font-family)",
        "incalpacastores-com-inter-bold-33-2": "var(--incalpacastores-com-inter-bold-33-2-font-family)",
        "incalpacastores-com-inter-bold-33-34": "var(--incalpacastores-com-inter-bold-33-34-font-family)",
        "incalpacastores-com-inter-bold-34": "var(--incalpacastores-com-inter-bold-34-font-family)",
        "incalpacastores-com-inter-bold-35-16": "var(--incalpacastores-com-inter-bold-35-16-font-family)",
        "incalpacastores-com-inter-bold-35-3": "var(--incalpacastores-com-inter-bold-35-3-font-family)",
        "incalpacastores-com-inter-bold-36": "var(--incalpacastores-com-inter-bold-36-font-family)",
        "incalpacastores-com-inter-bold-54-upper": "var(--incalpacastores-com-inter-bold-54-upper-font-family)",
        "incalpacastores-com-inter-medium-18-upper": "var(--incalpacastores-com-inter-medium-18-upper-font-family)",
        "incalpacastores-com-inter-regular-15-06-strikethrough":
          "var(--incalpacastores-com-inter-regular-15-06-strikethrough-font-family)",
        "incalpacastores-com-inter-regular-15-19-strikethrough":
          "var(--incalpacastores-com-inter-regular-15-19-strikethrough-font-family)",
        "incalpacastores-com-inter-regular-16-73-strikethrough":
          "var(--incalpacastores-com-inter-regular-16-73-strikethrough-font-family)",
        "incalpacastores-com-inter-regular-16-88-strikethrough":
          "var(--incalpacastores-com-inter-regular-16-88-strikethrough-font-family)",
        "incalpacastores-com-inter-regular-22": "var(--incalpacastores-com-inter-regular-22-font-family)",
      },
    },
  },
  plugins: [],
};
