// color design tokens export
export const tokensDark = {
	grey: {
		0: "#ffffff", // manually adjusted
		10: "#f6f6f6", // manually adjusted
		50: "#f0f0f0", // manually adjusted
		100: "#e0e0e0",
		200: "#c2c2c2",
		300: "#a3a3a3",
		400: "#858585",
		500: "#666666",
		600: "#525252",
		700: "#3d3d3d",
		800: "#292929",
		900: "#141414",
		1000: "#000000", // manually adjusted
	},
	primary: {
		// blue
		100: "#d3d4de",
		200: "#a6a9be",
		300: "#7a7f9d",
		400: "#4d547d",
		500: "#21295c",
		600: "#191F45", // manually adjusted
		700: "#141937",
		800: "#0d1025",
		900: "#070812",
	},
	secondary: {
		// yellow
		50: "#f0f0f0", // manually adjusted
		100: "#fff6e0",
		200: "#ffedc2",
		300: "#ffe3a3",
		400: "#ffda85",
		500: "#ffd166",
		600: "#cca752",
		700: "#997d3d",
		800: "#665429",
		900: "#332a14",
	},
};

export const tokensLight = {
	grey: {
		0: "#000000", // manually adjusted
		10: "#141414", // manually adjusted
		50: "#292929", // manually adjusted
		100: "#3d3d3d",
		200: "#525252",
		300: "#666666",
		400: "#858585",
		500: "#a3a3a3",
		600: "#c2c2c2",
		700: "#e0e0e0",
		800: "#f0f0f0",
		900: "#f6f6f6",
		1000: "#ffffff", // manually adjusted
	},
	primary: {
		// blue
		100: "#070812",
		200: "#0d1025",
		300: "#141937",
		400: "#191F45",
		500: "#21295c",
		600: "#4d547d", // manually adjusted
		700: "#7a7f9d",
		800: "#a6a9be",
		900: "#d3d4de",
	},
	secondary: {
		// yellow
		50: "#332a14", // manually adjusted
		100: "#665429",
		200: "#997d3d",
		300: "#cca752",
		400: "#ffd166",
		500: "#ffda85",
		600: "#ffe3a3",
		700: "#ffedc2",
		800: "#fff6e0",
		900: "#f0f0f0",
	},
};

// // function that reverses the color palette
// function reverseTokens(tokensDark) {
// 	const reversedTokens = {};
// 	Object.entries(tokensDark).forEach(([key, val]) => {
// 		const keys = Object.keys(val);
// 		const values = Object.values(val);
// 		const length = keys.length;
// 		const reversedObj = {};
// 		for (let i = 0; i < length; i++) {
// 			reversedObj[keys[i]] = values[length - i - 1];
// 		}
// 		reversedTokens[key] = reversedObj;
// 	});
// 	return reversedTokens;
// }
// export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
	return {
		palette: {
			mode: mode,
			...(mode === "dark"
				? {
						// palette values for dark mode
						primary: {
							...tokensDark.primary,
							main: tokensDark.primary[400],
							light: tokensDark.primary[400],
						},
						secondary: {
							...tokensDark.secondary,
							main: tokensDark.secondary[300],
						},
						neutral: {
							...tokensDark.grey,
							main: tokensDark.grey[500],
						},
						background: {
							default: tokensDark.primary[600],
							alt: tokensDark.primary[500],
						},
				  }
				: {
						// palette values for light mode
						primary: {
							...tokensLight.primary,
							main: tokensDark.grey[50],
							light: tokensDark.grey[100],
						},
						secondary: {
							...tokensLight.secondary,
							main: tokensDark.secondary[600],
							light: tokensDark.secondary[700],
						},
						neutral: {
							...tokensLight.grey,
							main: tokensDark.grey[500],
						},
						background: {
							default: tokensDark.grey[0],
							alt: tokensDark.grey[50],
						},
				  }),
		},
		typography: {
			fontFamily: ["Inter", "sans-serif"].join(","),
			fontSize: 12,
			h1: {
				fontFamily: ["Inter", "sans-serif"].join(","),
				fontSize: 40,
			},
			h2: {
				fontFamily: ["Inter", "sans-serif"].join(","),
				fontSize: 32,
			},
			h3: {
				fontFamily: ["Inter", "sans-serif"].join(","),
				fontSize: 24,
			},
			h4: {
				fontFamily: ["Inter", "sans-serif"].join(","),
				fontSize: 20,
			},
			h5: {
				fontFamily: ["Inter", "sans-serif"].join(","),
				fontSize: 16,
			},
			h6: {
				fontFamily: ["Inter", "sans-serif"].join(","),
				fontSize: 14,
			},
		},
	};
};
