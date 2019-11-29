import styled from 'styled-components';

const InputElement = styled.div `
  margin-bottom: 10px;
  display: flex;
 .miniColor{
  margin-right: 5px;
  background-color: ${props => props['color'] ? props['color'] : 'red'};
  padding: 5px;
  border-radius:5px;
  color: ${props => props['color'] ? props['color'] : 'red'};
 }
}  
`;

export { InputElement }