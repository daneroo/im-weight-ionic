# im-weight-ionic

## Todo

* Button (style+gradient)
  * position (+) done
  * [rounded css](http://css-tricks.com/circular-3d-buttons/)
  * dark/light
  * rounded css w/ image (twofeet.(jpg|svg))
* cleanup code structure
  * restart with `ionic start ionic-sidemenu sidemenu`
  * [generator?](https://github.com/diegonetto/generator-ionic)
* Dialog/Popup (entry)
  * Simple (OK)
  * with return value
  * with rouded button(s)
* Anchorzoom (mouse behavior)
  * interraction model
  * native ionic gestures
  * ng-hammer overlay
* cleanup views (menu/tabs) list or not... 

## Instructions

  # initial setup ??
  npm install 
  bower install  # not yet setup
  mkdir plugins
  ionic platform add ios
  ionic platform add android
  # if you want to use sass
  ionic setup sass

  ionic serve

## Build

Consider  [generator-ionic](https://github.com/diegonetto/generator-ionic), at least for the grunt build.

## Ionic related

  ionic build ios
  ionic emulate ios

  ionic build android
  # with device connected or genymotion started
  adb devices
  ionic run android


## Cordova related

### Icons

http://learn.ionicframework.com/formulas/adding-an-icon

https://github.com/AlexDisler/cordova-icon

  brew install imagemagick
  npm i -g ...

### selection ios device emulator

Where TARGET is one of: iPad, iPhone, iPad (Retina), iPhone (Retina 3.5-inch), iPhone (Retina 4-inch)

  ionic emulate ios --target="iPhone"
  ionic emulate ios --target="iPhone (Retina 3.5-inch)"
  ionic emulate ios --target="iPhone (Retina 4-inch)"
  ionic emulate ios --target="iPad"
  ionic emulate ios --target="iPad (Retina)"

  ios-sim showdevicetypes
  ios-sim launch ./platforms/ios/build/emulator/iM-Weight.app --devicetypeid com.apple.CoreSimulator.SimDeviceType.iPhone-5
  ios-sim launch ./platforms/ios/build/emulator/iM-Weight.app --devicetypeid com.apple.CoreSimulator.SimDeviceType.iPhone-5s
  ios-sim launch ./platforms/ios/build/emulator/iM-Weight.app --devicetypeid com.apple.CoreSimulator.SimDeviceType.iPhone-6
  ios-sim launch ./platforms/ios/build/emulator/iM-Weight.app --devicetypeid com.apple.CoreSimulator.SimDeviceType.iPhone-6-Plus
  ios-sim launch ./platforms/ios/build/emulator/iM-Weight.app --devicetypeid "com.apple.CoreSimulator.SimDeviceType.iPhone-6, 8.0"
  
## Dygraphs
Added with bower but nee to make the `dygraph-combined.js` with:

  cd www/lib
  make