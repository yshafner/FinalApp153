import React from 'react';
import ValueProvider from './components/ValueContext';
import MyStack from "./components/Main";

export default function MainApp() {
    const initImage1 = "IMG1"
    const initImage2 = "IMG2"
    const initImage3 = "IMG3"

    const data = {name:"", isSelected: false, image1: initImage1, image2: initImage2, image3: initImage3}

  return (
      <ValueProvider value={data}>
        <MyStack />
      </ValueProvider>
  );
}
