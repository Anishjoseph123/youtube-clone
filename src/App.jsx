import React, { lazy, Suspense } from "react";
import VideoProvider from "./apis/VideoContext";
// import Child from './components/videos/Child'
import VideoMain from "./components/videos/VideoMain";
// import Navbar from './pages/Navbar'
let Navbar = lazy(() => import("./pages/Navbar"));

const App = () => {
  return (
    <VideoProvider>
      <Suspense fallback={<div>loading...</div>}>
        <Navbar />
      </Suspense>
      {/* <Child/> */}

      <VideoMain />
    </VideoProvider>
  );
};

export default App;
