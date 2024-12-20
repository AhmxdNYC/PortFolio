const projectsData = [
	{
		id: 1,
		name: 'infotrove',
		href: '/projects/infotrove',
		imgSrc: './infoTroveWeb.png',
		imgAlt: 'Info Trove',
		isNew: true,
		techs: ['GIT', 'API', 'NodeJS', 'CSS', 'HTML5', 'Test'],
		demoImgSrc: (theme) =>
			theme === 'dark' ? './Demo Dark.png' : './Demo Light.png',
		logoImgSrc: (theme) =>
			theme === 'dark' ? './infoTroveRev.png' : './infoTrove.png',
		repoHref: 'https://github.com/InfoTrove/InfoTrove',
	},
	{
		id: 2,
		name: 'portfolio',
		description: 'This is my portfolio',
		href: '/projects/portfolio',
		imgSrc: (theme) =>
			theme === 'dark' ? './PortFolioWeb.png' : './PortFolioWebRev.png',
		imgAlt: 'Portfolio',
		techs: ['GIT', 'API', 'NodeJS', 'CSS', 'HTML5', 'Test'],
		demoImgSrc: (theme) =>
			theme === 'dark' ? './Demo Dark.png' : './Demo Light.png',
		logoImgSrc: (theme) => (theme === 'dark' ? './Port.png' : './Portrev.png'),
		repoHref: 'https://github.com/AhmxdNYC/PortFolio',
	},
	{
		id: 3,
		name: 'recipe-wizard',
		href: '/projects/recipe-wizard',
		imgSrc: './recipeWizardWeb.png',
		imgAlt: 'Recipe Wizard',
		techs: ['GIT', 'API', 'NodeJS', 'CSS', 'HTML5', 'Test'],
		demoImgSrc: (theme) =>
			theme === 'dark' ? './Demo Dark.png' : './Demo Light.png',
		logoImgSrc: './RecipeWizard-modified.png',
		repoHref: 'https://github.com/RecipeWizardTeam/Recipe-Wizard',
	},
	{
		id: 4,
		name: 'movies',
		href: '/projects/movies',
		imgSrc: './movies.png',
		imgAlt: 'Movies App',
		techs: ['GIT', 'API', 'NodeJS', 'CSS', 'HTML5', 'Test'],
		demoImgSrc: (theme) =>
			theme === 'dark' ? './Demo Dark.png' : './Demo Light.png',
		logoImgSrc: (theme) =>
			theme === 'dark' ? './Movies-App.png' : './Movies-App-Rev.png',
		repoHref: 'https://github.com/AhmxdNYC/Movies-Project-',
	},
	{
		id: 5,
		name: 'Rootlink',
		href: 'https://github.com/FamilyTie/RootLink',
		imgSrc: './rootlinkFront.png',
		imgAlt: 'idk',
		techs: ['GIT', 'API', 'NodeJS', 'CSS', 'HTML5', 'Test'],
		demoImgSrc: (theme) => theme === './rootlinkFront.png',
		logoImgSrc: (theme) => theme === './rootlinkFront.png',
		repoHref: 'https://github.com/AhmxdNYC/Movies-Project-',
	},
];

export default projectsData;
