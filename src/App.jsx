
import { Suspense } from 'react';
import './App.css'
import Countrys from './components/countrys';

const countrysPromise = fetch('https://openapi.programming-hero.com/api/all')
.then (res => res.json())

function App() {
  

  return (
    <>
      
          <h1>Get started React World</h1>
          <Suspense fallback={<p>Show Countries...</p>}>
            <Countrys countrysPromise={countrysPromise}></Countrys>

          </Suspense>
          
          
          
          
        

      

      
      
    </>
  )
}

export default App
