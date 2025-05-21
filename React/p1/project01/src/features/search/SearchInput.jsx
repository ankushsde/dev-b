import { useDispatch, useSelector } from 'react-redux';
import { setQuery, fetchHotels } from './searchSlice';
import  {useDebounce}  from '../../hooks/useDebounce';
import { useEffect } from 'react';

export const SearchInputs = () => {

    const dispatch = useDispatch();
    const query = useSelector((state)=>state.search.query)

    const debbouncedQuery = useDebounce(query,500);

    console.log("query",query)

    useEffect(()=>{
        if(debbouncedQuery) dispatch(fetchHotels(debbouncedQuery))
    },[debbouncedQuery,dispatch])

    return (
        <input  
        value={query}
        onChange={(e)=>dispatch(setQuery(e.target.value))}
        placeholder="Search hotels..."
        />
    )
}