import React ,{useState} from 'react'
import ContentWrapper from '../../../contentWrapper/ContentWrapper'
import { SwitchTabs } from '../../../switchTabs/SwitchTabs'
import useFetch from "../../../../src/hooks/useFetch"
import { Carousel } from '../../../carousel/Carousel'


export const TopRated = () => {
  const [endpoint , setEndpoint]=useState("movie");
  const {data, loading } =useFetch(`/${endpoint}/top_rated`);
 
 
const onTabChange = (tab) =>{
  setEndpoint(tab ==="Movies" ? "movie" : "tv");
}

  return (
    <div className='carouselSelection'>
         <ContentWrapper>
            <span className='carouselTitle'>Top Rated</span>
            <SwitchTabs   data={["Movies", "TV Showes"]}  onTabChange={onTabChange}/> 
         </ContentWrapper>
         <Carousel data={data?.results}  loading={loading}  endpoint={endpoint}/>

         
    </div>
  )
}
