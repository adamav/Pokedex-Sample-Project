import React, {useState, ChangeEvent} from 'react';
import { SearchInputInterface } from './SearchInputField.interface';
import Horizontal from 'components/Horizontal';
import InputField from 'components/InputField/InputField';
import Button from 'components/Button';

const SearchInputField: React.FC<SearchInputInterface>  = ({onSearchEntered, ...props}) =>{

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{

        setSearchInput(event.target.value)

      
    }

    const handleOnCick = () =>{

        
        if(onSearchEntered)
             onSearchEntered(searchInput);

            
    }

    return(

        <Horizontal>

            <InputField {...props} value={searchInput} onChange={handleChange} />

            <Button label='Enter' onClick={handleOnCick} />

        </Horizontal>

    );
}

export default SearchInputField;