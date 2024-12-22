import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card';

const ExplorePage = () => {
 
  const params = useParams();
  
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);
  console.log('params', params.explore, totalPageNo);

 const fetchData = async () => {
  console.log('Fetching data...');
  
		try {
			const response = await axios.get(`/discover/${params.explore}`, {
				params: { page: pageNo },
			})
      setData((prev) => {
        return [
          ...prev, 
          ...response.data.results
        ]
      })
      setTotalPageNo(response.data.total_pages)
			
		} catch (error) {
			console.error('Error fetching data:', error);
		}
 };

 const handleScroll = () => {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setPageNo(prev => prev + 1);
    }
 }

  useEffect(() => {		
		fetchData();
	}, [pageNo]);

  useEffect(() => {
    setPageNo(1);
    setData([]);
    fetchData();
  }, [params.explore]);

  useEffect(() => {
		window.addEventListener('scroll', handleScroll);		
	}, []);
  
  return (
		<div className='py-16'>
			<div className='container mx-auto px-3'>
				<h3 className='uppercase text-lg lg:text-2xl font-semibold my-3'>
					Popular {params.explore}
				</h3>
        <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center' >
          {
            data.map((exploreData, index) => {
              return (                
                  <Card key={exploreData.id + 'exploreSection'} data={exploreData} media_type={params.explore}/>                
              )
            })
          }
        </div>
			</div>
		</div>
	);
}


export default ExplorePage
