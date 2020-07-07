# Coco Loco - Harvest Coconuts
### A fundamental game by Brian & Ian to implement a React Native application and to further practice the Publishing Process

```
Published 

iOS
https://apps.apple.com/ky/app/coco-loco-harvest-coconuts/id1495832332

Play Store
https://play.google.com/store/apps/details?id=com.coconutsproject&hl=en_US
```

### Local Setup
Dependencies:
- node
- npx
- npm
- Xcode
- Android Studio
- Cocoapods


To Install:
```
git clone https://github.com/brianshaffer/click-the-fruit-game.git
cd click-the-fruit-game
npm install
cd ios/
pod install
cd ../
npx react-native run-ios
npm install react-native-splash-screen --save

```

### Note

If you are getting a run error relating to 'not compiling lst' then please update your mac software, update xcode to latest version, follow this links instructions 
https://medium.com/codespace69/react-native-xcrun-error-unable-to-find-utility-simctl-not-a-developer-tool-or-in-path-bd908d3551be
and then run

```
sudo gem install cocoapods
npm install
xcode-select --install
cd ios/ 
pod install 
npx react-native run-ios
```

