import BannerHome from '../components/BannerHome';
import { useSelector } from 'react-redux';
import HorizontalScrollCard from '../components/HorizontalScrollCard';
import useFetch from '../hooks/useFetch';

const Home = () => {
	const trandingData = useSelector((state) => state.movieDbData.bannerData);
	const { data: nowPlayingData } = useFetch('/movie/now_playing');
	const { data: topRatedData } = useFetch('/movie/top_rated');
	const { data: popularTvShowData } = useFetch('/tv/popular');
	const { data: onTheAirShownData } = useFetch('/tv/on_the_air');

	return (
		<div>
			<BannerHome />
			<HorizontalScrollCard
				data={trandingData}
				heading='Trending'
				trending={true}
			/>
			<HorizontalScrollCard
				data={nowPlayingData}
				heading='Now Playing'
				media_type='movie'				
			/>
			<HorizontalScrollCard
				data={topRatedData}
				heading='Top Rated Movies'
				media_type={'movie'}
			/>
			<HorizontalScrollCard
				data={popularTvShowData}
				heading='Popular TV Series'
				media_type={'tv'}
			/>
			<HorizontalScrollCard
				data={onTheAirShownData}
				heading='On The Air Series'
				media_type={'tv'}
			/>
		</div>
	);
};

export default Home;
