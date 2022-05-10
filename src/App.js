import styled from "styled-components"
import React,{useState} from 'react';
import Axios from "axios";
import {Header,AppNameComponent,SearchComponent,AppIcon,Input}from './components/headerComponent'
import {RecipeListContainer,RecipeContainer,IngredientsText,SeeMoreText,CoverImage,RecipeName}from './components/recipeComponent'
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog'
const Container=styled.div`
display:flex;
flex-direction:column;

`;
const Placeholder=styled.img`
width:200px;
height:200px;
margin:150px;
opacity:80%;

`;
const APP_ID="9469ca30";
const APP_KEY="37af9dfeacfe6b875d4f61d62b48cdb8";
const RecipeComponent=(props)=>{
  const [show,setShow]=useState(false);
  
  return(
    <>
        <Dialog open={show}>
        <DialogTitle id="alert-dialog-slide-title">Ingredients</DialogTitle>
        <DialogContent> 
          <table>
            <thead>
              <th>Ingredients</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {props.recipeObj.ingredients.map((ingredientsObj)=>
              (
                <tr>
                  <td>{ingredientsObj.text}</td>
                  <td>{ingredientsObj.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
        <IngredientsText onClick={()=>window.open(props.recipeObj.url)}>See More</IngredientsText>
     <SeeMoreText onClick={()=>setShow(false) }>Close</SeeMoreText> 
        </DialogActions>
        </Dialog>

        <RecipeContainer>
        <CoverImage src={props.recipeObj.image}/>
      <RecipeName>{props.recipeObj.label}</RecipeName>
      <IngredientsText onClick={()=>setShow(true)}>Ingredients</IngredientsText>
     <SeeMoreText onClick={()=>window.open(props.recipeObj.url) }>See Complete Recipe</SeeMoreText> 
        </RecipeContainer>
</>
  );
};


function App() {
  const [timeoutId,updateTimeoutId]=useState();
  const [recipeList,updateRecipeList]=useState([]);
  const fetchRecipe=async (searchString)=>
  {
    const response=await Axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      updateRecipeList(response.data.hits);
    
  };

  const OnTextChange=(event)=>{  //debouncing
    clearTimeout(timeoutId);
    const timeout=setTimeout(()=> fetchRecipe(event.target.value),500);
    updateTimeoutId(timeout);
  }
  return (
    <Container>
      <Header>
       <AppNameComponent><AppIcon src="react-recipe-finder/foodlogo.svg"/>Recipe Searcher</AppNameComponent> 
       <SearchComponent>
         <img src="/react-recipe-finder/icons8-search-40.svg"/>
         <Input placeholder="Search recipe ingredients" onChange={OnTextChange}/>
       </SearchComponent>
        </Header>
        <RecipeListContainer>
          {recipeList.length ? recipeList.map((recipeObj)=> (<RecipeComponent recipeObj={recipeObj.recipe}/>
          )): <Placeholder src="/react-recipe-finder/foodlogo.svg"/>}
      
        
       
        
      
      
      </RecipeListContainer>
    </Container>
    
  );
}

export default App;
