import React, {useState} from 'react';
import Horizontal from 'components/Horizontal';
import FlexableSpace from 'components/FlexableSpace';
import Vertical from 'components/Vertical';
import Header from 'components/Header';
import SearchInputField from 'components/SearchInputField/SearchInputField';
import { useAppDispatch } from 'store/store';
import { searchForPokemon } from 'store/pokedex/pokedex.actions';
import { saveSearchHistory } from 'store/search-history/search-history.actions';
import { useSelector } from 'react-redux';
import { SearchHistoryInterface } from 'store/search-history/search-history.interface';
import { unwrapResult } from '@reduxjs/toolkit';
import PokemonDetialsBoard from 'components/PokemonDetailsBoard';
import { getPokemonSearched } from 'store/pokedex/pokedex.selectors';
import PokemonStatsBoard from 'components/PokemonStatsBoard';
import Button from 'components/Button';
import SeachHistoryOverlay from 'components/SearchHistoryOverlay';
import EvolutionOverlay from 'components/EvolutionOverlay';

enum AppBoardState{

    ShowDetailsBoard,
    ShowStatsBoard,
   
}



function App() {

  const appDispatch = useAppDispatch();
  const {pokemonData:pokemonSearched, dataFetchedSuccessfully} = useSelector(getPokemonSearched);

  const [boardState, setBoardState] = useState<AppBoardState>(AppBoardState.ShowDetailsBoard);
  const [showSearchHistory, setShowSearchHistory] = useState<boolean>(false);
  const [showEvolutions, setShowEvolutions] = useState<boolean>(false);


  const handleSearchEntered = (search: string) =>{

    if(!search)
      return;

      appDispatch(searchForPokemon(search))
      .then(unwrapResult)
      .then((data)=>{

        
        const searchHistoryData : SearchHistoryInterface = {
          name: data.name,
          image:data.sprite,
          id:data.id,
        }

         //  only save successfull search result 
         appDispatch(saveSearchHistory(searchHistoryData));

      })
      .catch(err =>{

        //error handling
        alert("There was an error searching for the pokement that was enter. Please make sure it entered correctly ")

      })
    
  }

  const showPreviousBoard = () =>{

    setBoardState(prev => prev -1)
   
  
  }

  const showNextBoard = () =>{

    setBoardState(prev => prev + 1)
  }

  const onSearchHistoryClosed = () =>{

    setShowSearchHistory(false);
  }

  const handleSeachHistoryClick = (name:string) =>{

    appDispatch(searchForPokemon(name))
    .then(unwrapResult)
    .then((data)=>{

      //hide if loaded
        setShowSearchHistory(false);

    })
    .catch(err =>{

      //error handling
      alert("There was an error with the request. Please try again later")

    })
  }

  const onEvolutionClosed = () =>{
    setShowEvolutions(false);
  }

  const handleLoadEvolution = (name:string) =>{

    appDispatch(searchForPokemon(name))
    .then(unwrapResult)
    .then((data)=>{

      //hide if loaded
        setShowEvolutions(false);

    })
    .catch(err =>{

      //error handling
      alert("There was an error with the request. Please try again later")

    })
  }

  

  const renderBoard = () =>{

    switch(boardState){

      case AppBoardState.ShowDetailsBoard:
        return <PokemonDetialsBoard pokemon={pokemonSearched}/>;
      
      case AppBoardState.ShowStatsBoard:
        return  <PokemonStatsBoard pokemon={pokemonSearched} />

      
    }
  }


  return (
    
    

      <Horizontal>

      <FlexableSpace/>

          <Vertical>

              <FlexableSpace />

              <Horizontal>
                  <FlexableSpace/>
                    <Header label='Pokedex' />
                  <FlexableSpace/>
              </Horizontal>
              
              <Horizontal>
                
                <Vertical>
                  <Horizontal>
                    <FlexableSpace/>
                      <SearchInputField placeholder='Search' onSearchEntered={handleSearchEntered}/>
                    <FlexableSpace/>
                  </Horizontal>

                   {renderBoard()}
                   
                  
                   <Horizontal>
                      <FlexableSpace />
                        <Button label='<' onClick={showPreviousBoard} disabled={!dataFetchedSuccessfully|| boardState === AppBoardState.ShowDetailsBoard} />
                        <FlexableSpace />
                        <Button label='>' onClick={showNextBoard} disabled={!dataFetchedSuccessfully || boardState === AppBoardState.ShowStatsBoard}/>
                      <FlexableSpace />
                    </Horizontal>


                    {dataFetchedSuccessfully &&

                      <Horizontal style={{marginTop:"10px"}}>
                        <FlexableSpace/>
                          <Button label='Evolutions' onClick={() => setShowEvolutions(true)} />
                        <FlexableSpace/>
                      </Horizontal>
                    }
                  

                    <Horizontal style={{marginTop:"10px"}}>
                    <FlexableSpace/>
                      <Button label='Search History' onClick={()=> setShowSearchHistory(true)} />
                    <FlexableSpace/>
                    </Horizontal>
                  
                    
                   

                </Vertical>

              </Horizontal>
              
            
        

            <FlexableSpace />

            <SeachHistoryOverlay show={showSearchHistory} onClose={onSearchHistoryClosed} onClickItem={handleSeachHistoryClick}/>
            <EvolutionOverlay show={showEvolutions} pokemon={pokemonSearched} onSelectEvolution={handleLoadEvolution} onClose={onEvolutionClosed} />
          </Vertical>

      <FlexableSpace/>
      </Horizontal>


    
   
  );
}

export default App;
