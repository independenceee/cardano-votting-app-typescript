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
            gridTemplateColumns: {
                categories: "40% 60%",
            },

            boxShadow: {
                home: "rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px",
                homeHover:
                    "rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px",
            },
        },
        screens: {
            sm: { min: "640px", max: "767px" },
            md: { min: "768px", max: "1023px" },
            lg: { min: "1024px", max: "1279px" },
            xl: { min: "1235px", max: "1535px" },
            "2xl": { min: "1536px" },
        },
    },
    plugins: [],
};
