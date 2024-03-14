
import { useEffect, useState } from 'react'
import './App.css'
import Head from './components/Head'
import Bottle from './components/Bottle'
import { addToLS   } from './utility/localStorage'



function App() {
  const [bottle,setBottle]=useState([])
  
  
  useEffect(()=>{
    fetch('bottle.json')
    .then(res=>res.json())
    .then(data=>setBottle(data))
  },[])
  const [purchaseBottle,setPurchaseBottle]=useState([])

const handlePurchase=(bottle)=>{
  const newParchase=[...purchaseBottle,bottle]
  setPurchaseBottle(newParchase)
  addToLS(bottle.id)

}


  return (
    <>
     
      <Head></Head>
      <h1>Bottle:{bottle.length}</h1>
    
      <h2>Purchase Bottle:{purchaseBottle.length}
      </h2>
      <div>
        <div className='div2'>
        {
          purchaseBottle.map(bottle=><div >
            <li>{bottle.name}</li>
            <img style={{width:'200px'}} src={bottle.img} alt="" />
          </div>)
        }
        </div>
      </div>
     <div className='div'>
     {
        bottle.map(bottle=><Bottle handlePurchase={handlePurchase} key={bottle.id} bottle={bottle}></Bottle>)
      }
     </div>
    </>
  )
}

export default App
