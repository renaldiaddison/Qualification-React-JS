import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from './pages/Detail';
import Navbar from './components/Navbar';
import AnimeListProvider from './lib/AnimeContext';

import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {

  const client = new ApolloClient({
    uri: 'https://graphql.anilist.co/',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <AnimeListProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/anime/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </BrowserRouter>
      </AnimeListProvider>

    </ApolloProvider>
  )
}

export default App;
