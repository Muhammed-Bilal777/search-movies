import React ,{useState} from 'react'
import ContentWrapper from '../../../contentWrapper/ContentWrapper'
import { SwitchTabs } from '../../../switchTabs/SwitchTabs'
import useFetch from "../../../../src/hooks/useFetch"
import { Carousel } from '../../../carousel/Carousel'


export const Trending = () => {
  const [endpoint , setEndpoint]=useState("day");
  const {data, loading } =useFetch(`/trending/movie/${endpoint}`);
 
 
const onTabChange = (tab) =>{
  setEndpoint(tab ==="Day" ? "day" : "week");
}

  return (
    <div className='carouselSelection'>
         <ContentWrapper>
            <span className='carouselTitle'>Trending</span>
            <SwitchTabs   data={["Day", "Week"]}  onTabChange={onTabChange}/> 
         </ContentWrapper>
         <Carousel data={data?.results}  loading={loading}/>

         
    </div>
  )
}
