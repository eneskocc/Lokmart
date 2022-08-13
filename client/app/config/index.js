import {Dimensions, } from 'react-native';


const {width, height} = Dimensions.get('window');
const screen = {
  width,
  height,
};

const apiUrl='https://myapp.herokuapp.com'; 

const colors = {
   orange:'#FA662E',
   gray:'#BFC9DA',
   dark:'#303733',
   grandient:'#FF8B38',
   white:'#FFFFFF',
   softGray:'#7D8FAB',
   gray1:'#E8ECF2',
   yellow:'#FFA902',
   green:'#1CAF5E',
   red:'#FF2525',
    
};



export {
  screen,
  colors,
  apiUrl,
};