import styled from "styled-components";
export const RecipeListContainer=styled.div`
display: flex;
flex-direction: row;
padding: 30px;
gap:20px;
flex-wrap:wrap;
justify-content:space-evenly;

`;
export const RecipeContainer=styled.div`
diplay: flex;
flex-direction: column;
padding: 10px;
width:250px;
justify-content:center;
flex-wrap:wrap;
box-shadow:0 3px 10px 0 #aaa;

`;
export const IngredientsText=styled.div`
font-size:18px;
border:solid 1px green;
cursor:pointer;
margin-bottom:12px;
padding:10px 15px;
border-radius:4px;
color:green;
text-align:center;
`;
export const SeeMoreText=styled(IngredientsText)`
color:#eb3300;
border:solid 1px #eb3300;
`
export const CoverImage=styled.img`
height:250px;
align-items:center;
object-fit:cover;
`;
export const RecipeName=styled.div`
font-size:18px;
font-weight:bold;
color:black;
margin:10px 0;
`;