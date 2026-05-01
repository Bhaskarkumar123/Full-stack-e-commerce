import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";
const SearchBox=()=>{
    return(
        <>
           {/* Header Search Start Here */}
            <div className='headerSearch ml-3 mr-3'>
              <input type='text' placeholder='What are you looking for ?'/> 
              <Button><IoSearch/></Button>   
            </div>
            {/* Header Search Start Here */}
        </>
    )
  
}

export default SearchBox;