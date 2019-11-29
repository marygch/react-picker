import styled from 'styled-components';

const ButtonElement = styled.div ` 
  
.button {
	display: block;
  height: 50px;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 0;
  overflow: hidden;
  position: relative;
  transform: translatez(0);
  text-decoration: none;
  box-sizing: border-box;
  font-size: 18px;
	font-weight: normal;
  box-shadow: 0 9px 18px rgba(0,0,0,0.2); 
  text-align: center;
	border-radius: 15px;
  padding: 15px;
  color: white;
  border: 1px solid white;
  cursor: pointer; 
} 
.active {
  border: none;
  background: #BD3381;
  transition: all 0.2s ease-out 0s;
  .gradient {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    bottom: auto;
    margin: auto;
    z-index: -1;
    background: radial-gradient(90px circle at top center, rgba(238,88,63,.8) 30%, rgba(255,255,255,0));
    transition: all 0s ease-out 0s;
    transform: translatex(-140px);
    animation: 5s linear 0s infinite move;
  }
  
  @keyframes move {
    0% {
      transform: translatex(-140px);
    }
    25% {
      transform: translatex(140px);
      opacity: 0.3;
    }
    50% {
      transform: translatex(140px);
      opacity: 1;
      background: radial-gradient(90px circle at bottom center, rgba(238,88,63,.5) 30%, rgba(255,255,255,0));
    }
    75% {
      transform: translatex(-140px);
      opacity: 0.3;
    }
    100% {
      opacity: 1;
      transform: translatex(-140px);
      background: radial-gradient(90px circle at top center, rgba(238,88,63,.5) 30%, rgba(255,255,255,0));
    }
  }   
}


`;

export { ButtonElement }