# Check if ios folder exists
if [ ! -d "ios" ]; then
  echo "ios folder not found. Creating a iOS prebuild"

    # Create a new iOS prebuild
    npx expo prebuild --platform ios

    # Fix a wierd bug with the iOS prebuild
    # by removing 'prepare_react_native_project!' from Podfile
    sed -i '' '/prepare_react_native_project!/d' ios/Podfile

    # Install the iOS prebuild
    cd ios
    pod install
    cd ..
fi

# Build the iOS app
npm run ios -- --device
