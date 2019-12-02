import styled from 'styled-components';
const DEFAULT_COLOR1 = '#FFF';
const DEFAULT_COLOR2 = '#7A7FBA';

const backgroundProp = props => !props['currentMode'] ?
    `linear-gradient(to ${props['direction'] ? props['direction'] : 'top'}, 
                        ${props['color1'] ? props['color1'] : DEFAULT_COLOR1}, 
                        ${props['color2'] ? props['color2'] : DEFAULT_COLOR2});
                        ` :
    `radial-gradient(circle at ${props['direction'] ? props['direction'] : 'top'}, 
                        ${props['color1'] ? props['color1'] : DEFAULT_COLOR1}, 
                        ${props['color2'] ? props['color2'] : DEFAULT_COLOR2 });
                        `;

const GradientElement = styled.div `
    border-radius: 4px;
    margin: .25rem;
    padding: .25rem;
    width: 500px;
    height: 300px;
    background: ${backgroundProp}
} 
`;

export { GradientElement }