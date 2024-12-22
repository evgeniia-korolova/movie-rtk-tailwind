import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExplorePage from './../pages/ExplorePage';
import DetailsPage from "../pages/DetailsPage";
import SearchPage from "../pages/SearchPage";

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <App />,
			children: [
				{
					path: '',
					element: <Home />,
				},
				{
					path: ':search',
					element: <SearchPage />,
				},

				{
					path: 'explore/:explore',
					element: <ExplorePage />,
				},
				{
					path: 'explore/:explore/:id',
					element: <DetailsPage />,
				},
			],
		},
		{
			path: '/about',
			element: <h1>About</h1>,
		},
	],
	{
		future: {
			v7_relativeSplatPath: true,
			v7_fetcherPersist: true,
			v7_normalizeFormMethod: true,
			v7_partialHydration: true,
		},
	}
);

export default router;