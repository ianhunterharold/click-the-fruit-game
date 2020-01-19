// import components
import { StyleSheet, Dimensions } from 'react-native';

// get device dimensions
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window')

// set static tree sizes depending on device dimensions
if((HEIGHT - 100) > 750){ // 100 is status bar height
  var treeHeight = 642;
  var basketVerticalOffset = 50;
}else{
  var treeHeight = 500;
  var basketVerticalOffset = -40;
}
var treeWidth = treeHeight * 0.556;
var treeOffset = (WIDTH - treeWidth)/2;
var coconutWidth = treeWidth * 0.13;
var coconutHeight = coconutWidth * 1.08;

if((HEIGHT - 100) > 750){
  var basketHorizontalOffset = treeOffset;
}else{
  var basketHorizontalOffset = treeOffset - 20;
}


// create the style sheet rules
export default StyleSheet.create({
	backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
  },
  gameStatusBar: {
    backgroundColor: 'rgba(63, 182, 191, 0.7)',
    width: WIDTH,
    height: 110,
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  treeContainer: {
    position: 'relative',
    width: WIDTH,
    height: HEIGHT,
  },
  palmTree: {
    position: 'absolute',
    width: treeWidth,
    height: treeHeight,
    left: treeOffset,
    top: 10,
  },
  coconutWrapper: {
    position: 'relative'
  },
  coconut: {
    width: coconutWidth,
    height: coconutHeight
  },
  coconutBunch1ATouchable: {
    position: 'absolute',
    left: treeOffset + (coconutWidth * 3.47),
    top: coconutHeight * 3.43,
    zIndex: 10,
  },
  coconutBunch1BTouchable: {
    position: 'absolute',
    left: treeOffset + (coconutWidth * 3.1),
    top: coconutHeight * 3.78,
    transform: [{ rotate: '200deg' }],
    zIndex: 10,
  },
  coconutBunch1CTouchable: {
    position: 'absolute',
    left: treeOffset + (coconutWidth * 2.8),
    top: coconutHeight * 3.28,
    transform: [{ rotate: '90deg' }],
    zIndex: 9,
  },
  coconutBunch2ATouchable: {
    position: 'absolute',
    left: treeOffset + (coconutWidth * .97),
    top: coconutHeight * 3.83,
    transform: [{ rotate: '20deg' }],
    zIndex: 10,
  },
  coconutBunch2BTouchable: {
    position: 'absolute',
    left: treeOffset + (coconutWidth * 1.17),
    top: coconutHeight * 3.23,
    zIndex: 10,
  },
  coconutBunch2CTouchable: {
    position: 'absolute',
    left: treeOffset + (coconutWidth * 0.4),
    top: coconutHeight * 3.33,
    transform: [{ rotate: '90deg' }],
    zIndex: 10,
  },
  coconutBunch3ATouchable: {
    position: 'absolute',
    left: treeOffset + (coconutWidth * 4.9),
    top: coconutHeight * 2.58,
    transform: [{ rotate: '60deg' }],
    zIndex: 10,
  },
  coconutBunch3BTouchable: {
    position: 'absolute',
    left: treeOffset + (coconutWidth * 5.5),
    top: coconutHeight * 2.18,
    zIndex: 10,
  },
  coconutBunch3CTouchable: {
    position: 'absolute',
    left: treeOffset + (coconutWidth * 4.8),
    top: coconutHeight * 2.08,
    transform: [{ rotate: '90deg' }],
    zIndex: 10,
  },
  coconutBunch4ATouchable: {
    position: 'absolute',
    left: treeOffset + (coconutWidth * 1.6),
    top: coconutHeight * 2.1,
    transform: [{ rotate: '50deg' }],
    zIndex: 10,
  },
  coconutBunch4BTouchable: {
    position: 'absolute',
    left: treeOffset + (coconutWidth * 2.0),
    top: coconutHeight * 1.7,
    zIndex: 10,
  },
  coconutBunch4CTouchable: {
    position: 'absolute',
    left: treeOffset + (coconutWidth * 1.3),
    top: coconutHeight * 1.7,
    transform: [{ rotate: '90deg' }],
    zIndex: 10,
  },
  basket: {
    width: coconutWidth * 4,
    height: (coconutWidth * 4) * 0.422,
    position: 'absolute',
    top: treeHeight + basketVerticalOffset,
    right: basketHorizontalOffset,
    alignItems: 'center',
  },
  basketCoconuts: {
    position: 'absolute',
    top: -30,
    left: 0,
    zIndex: 1,
    width: '100%'
  },
  basketCoconut1: {
    width: coconutWidth * 1.3,
    height: coconutHeight * 1.3,
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 3
  },
  basketCoconut2: {
    width: coconutWidth * 1.3,
    height: coconutHeight * 1.3,
    position: 'absolute',
    top: 0,
    left: 22,
    transform: [{ rotate: '10deg' }],
    zIndex: 4
  },
  basketCoconut3: {
    width: coconutWidth * 1.3,
    height: coconutHeight * 1.3,
    position: 'absolute',
    top: 0,
    left: 44,
    transform: [{ rotate: '50deg' }],
    zIndex: 3
  },
  basketCoconut4: {
    width: coconutWidth * 1.3,
    height: coconutHeight * 1.3,
    position: 'absolute',
    top: 8,
    left: 66,
    transform: [{ rotate: '15deg' }],
    zIndex: 4
  },
  basketCoconut5: {
    width: coconutWidth * 1.3,
    height: coconutHeight * 1.3,
    position: 'absolute',
    top: 0,
    right: 20,
    transform: [{ rotate: '35deg' }],
    zIndex: 3
  },
  basketCoconut6: {
    width: coconutWidth * 1.3,
    height: coconutHeight * 1.3,
    position: 'absolute',
    top: 5,
    right: 8,
    transform: [{ rotate: '70deg' }],
    zIndex: 4
  },
  basketImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    zIndex: 2
  },
  basketCircle: {
    width: 75,
    height: 75,
    borderRadius: 75/2,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderColor: 'rgba(232, 90, 80, 1)',
    borderStyle: 'solid',
    borderWidth: 3,
    // position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(191, 114, 42, 0.7)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 2,
    shadowOpacity: 1,
    // zIndex: 3
  },
  basketCount: {
    fontSize: 20,
    color: '#000'
  },
  loadingCoconutContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%'
  },
  loadingCoconut: {
    width: 96,
    height: 105,
  }
});