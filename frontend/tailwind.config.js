module.exports = {
    content: [
        "./apps/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            transformOrigin: {
                navbar: "left center",
            },
        },
        screens: {
            desktop: { min: "1279px" }, // max: 1535
            laptop: { min: "1024px", max: "1279px" },
            tablet: { min: "640px", max: "1023px" },
            mobile: { min: "350px", max: "639px" },
        },
    },
    plugins: [],
};
