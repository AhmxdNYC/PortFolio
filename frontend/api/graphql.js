import axios from 'axios';
import { ApolloServer, gql } from 'apollo-server-micro';
import projectsData from './projectsData.js';

const typeDefs = gql`
	type Project {
		name: String!
		description: String
		url: String!
		createdAt: String
		updatedAt: String
	}

	type Query {
		projects: [Project!]!
	}
`;

const resolvers = {
	Query: {
		projects: async () => {
			const githubToken = process.env.GITHUB_TOKEN;

			try {
				const response = await axios.get(
					'https://api.github.com/users/AhmxdNYC/repos',
					{
						headers: {
							Authorization: `Bearer ${githubToken}`,
							Accept: 'application/vnd.github.v3+json',
						},
					}
				);

				const repos = response.data;

				const githubProjects = repos.map((repo) => ({
					name: repo.name,
					description: repo.description,
					url: repo.html_url,
					createdAt: repo.created_at,
					updatedAt: repo.updated_at,
				}));

				return githubProjects;
			} catch (error) {
				console.error('Error fetching data from GitHub:', error);
				throw new Error('Failed to fetch data from GitHub');
			}
		},
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

const startServer = server.start();

export default async function handler(req, res) {
	await startServer;

	// For GraphQl Studio
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader(
		'Access-Control-Allow-Origin',
		'https://studio.apollographql.com'
	);
	res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

	if (req.method === 'OPTIONS') {
		res.status(200).end();
		return;
	}
	const handler = server.createHandler({ path: '/api/graphql' });
	return handler(req, res);
}

export const config = {
	api: {
		bodyParser: false,
	},
};
