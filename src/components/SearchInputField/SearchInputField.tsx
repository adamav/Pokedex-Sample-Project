import React, {useState, ChangeEvent} from 'react';
import { SearchInputInterface } from './SearchInputField.interface';
import Horizontal from 'components/Horizontal';
import InputField from 'components/InputField/InputField';
import Button from 'components/Button';
import Vertical from 'components/Vertical';
import FlexableSpace from 'components/FlexableSpace';

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

        <Vertical>

            {searchInput ==="" &&

                <Horizontal style={{marginBottom:'10px'}}>
                   <FlexableSpace/>
                    <span>Enter pokemon name</span>
                   <FlexableSpace/>
                </Horizontal>
            
            }

            <Horizontal>

                <InputField {...props} value={searchInput} onChange={handleChange} />

                <Button label='Enter' onClick={handleOnCick} />

            </Horizontal>

        </Vertical>
       

    );
}

export default SearchInputField;