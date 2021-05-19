import './App.css';
import Home from "./containers/Home";

import { PostProvider } from './contexts/PostsContext'

function App() {
  return (
    <div className="App">
        <PostProvider>
            <Home />
        </PostProvider>
    </div>
  );
}

export default App;
