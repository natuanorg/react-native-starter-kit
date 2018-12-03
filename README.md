Inspired by [invertase/react-native-firebase-starter](https://github.com/invertase/react-native-firebase-starter)

### Getting Started

> If you're only developing for one platform you can ignore the steps below that are tagged with the platform you don't require.

#### 1) Clone & Install Dependencies

- 1.1) `git clone https://github.com/natuanorg/react-native-starter-kit.git`
- 1.2) `cd react-native-starter-kit` - cd into your newly created project directory.
- 1.3) Install NPM packages with your package manager of choice - i.e run `yarn` or `npm install`
- 1.4) **[iOS]** `cd ios` and run `pod install` - if you don't have CocoaPods you can follow [these instructions](https://guides.cocoapods.org/using/getting-started.html#getting-started) to install it.
- 1.5) **[Android]** No additional steps for android here.

#### 2) Rename Project

**You will need to be running Node verison 7.6 or greater for the rename functionality to work**

- 2.0) **[iOS]** `cd ..` to return to the root directory of the project
- 2.1) `yarn rename` - you'll be prompted to enter a project name and company name
- 2.2) Note down the package name value - you'll need this when setting up your Firebase project

#### 3) Add `Google Services` files (plist & JSON) - Optional

- 3.1) **[iOS]** Follow the `add firebase to your app` instructions [here](https://firebase.google.com/docs/ios/setup#add_firebase_to_your_app) to generate your `GoogleService-Info.plist` file if you haven't done so already - use the package name generated previously as your `iOS bundle ID`.
- 3.2) **[iOS]** Place this file in the `ios/` directory of your project.
- 3.3) **[Android]** Follow the `manually add firebase` to your app instructions [here](https://firebase.google.com/docs/android/setup#manually_add_firebase) to generate your `google-services.json` file if you haven't done so already - use the package name generated previously as your `Android package name`.
- 3.4) **[Android]** Place this file in the `android/app/` directory of your project.
  
#### 4) Start your app

- 4.1) Start the react native packager, run `yarn start` from the root of your project.
- 4.2) **[iOS]** Build and run the iOS app, run `yarn ios` from the root of your project. The first build will take some time. This will automatically start up a simulator also for you on a successful build if one wasn't already started.
- 4.3) **[Android]** If you haven't already got an android device attached/emulator running then you'll need to get one running (make sure the emulator is with Google Play / APIs). When ready run `yarn android` from the root of your project.
