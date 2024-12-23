import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
	const location = useLocation();

	useEffect(() => {
		// Сбрасываем прокрутку на начало страницы при каждом изменении маршрута
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return null;
};

export default ScrollToTop;
