 import styled from 'styled-components';

 const GradienteContainer = styled.div `
 font-family: sans-serif;
 background: #2d2a2a; 
 height: 1000px !important;  
 
  .header {
    padding-top: 50px; 
    padding-bottom: 50px; 
    padding-left: 50px; 
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-items: left;
    text-align: -webkit-left;
    color: #fff;
    b {font-size: 20px;}
  }
  .body-gradient { 
    display: flex;
    justify-content: center; 
   
    box-shadow: 2px 2px 5px rgba(0,0,0,0.03);
    border-radius: 4px;

    color: #fff;
    font-family: "Lucida Console", Monaco, monospace;  
    border-right: 1px solid #F9F2D6;
    padding-left: 200px;
    padding-right:200px;
     .p {
      text-align: center; 
      margin: .25rem;
      padding: .25rem;
    } 

    .row {
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 15px;
    }
    
    .column {
      padding: 5px;
      flex-direction: row; 
    } 
      
    .stringStyle{
      margin-top: 15px;
      padding: 50px;
      border: 1px solid white;
      border-radius: 25px;
    } 
}
`;

 const color1 = props => props['color1'] ? props['color1'] : 'yellow';
 const color2 = props => props['color2'] ? props['color2'] : 'white';

 const GradientElement = styled.div `
     border-radius: 4px;
     margin: .25rem;
     padding: .25rem;
     width: 500px;
     height: 300px;
     background: linear-gradient(to ${props => props['linear'] ? props['linear'] : 'top'}, ${color1}, ${color2}); 
} 
`;

 const RadialElement = styled.div `
  border-radius: 4px;
  margin: .25rem;
  padding: .25rem;
  width: 500px;
  height: 300px;
  background: radial-gradient(circle at  ${props => props['linear'] ? props['linear'] : 'top'},   ${color1}, ${color2}); 
} 
`;

 export { GradienteContainer, GradientElement, RadialElement }