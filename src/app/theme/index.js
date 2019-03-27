import '../../assets/fonts/stylesheet.css';

const colors = {
	main: '#f04',
	alternative: '#393E46',
	text: '#393E46',
	header: '#FFF',
};


const header = {
	font: {
		size: '22.2px',
		color: colors.main,
		family: 'Coolvetica Rg',
	},
	background: {
		color: colors.header,
		height: '60px',
	},

};

const menu = {
	font: {
		size: '16px',
		color: colors.alternative,
		colorHover: colors.main,
		family: 'Coolvetica Rg',
	},
	background: {
		color: colors.header,
	},
};

const body = {
	font: {
		size: '16px',
		color: colors.text,
		family: 'Coolvetica Rg',
	},
};

const footer = {
	font: {
		size: '12px',
		color: colors.text,
		family: 'Coolvetica Rg',
	},
};

export default {
	header,
	colors,
	body,
	menu,
	footer,
};
