import {useParams} from 'react-router-dom'

export default function ServiceTour(){

    const {paramID} = useParams(); 

    // Per le query params  const [search, setSearch] = useSearchParams();

    return (
            <div className='container' style={{background:"red"}}>
                <span className='section__content'>
                    Il nostro servizio di {paramID}
                </span>

            </div>
    ); 
}