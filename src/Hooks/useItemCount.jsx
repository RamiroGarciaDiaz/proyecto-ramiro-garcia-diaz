import { useState } from 'react'

const useItemCount = (stock) => {

    const [amount, setAmount] = useState(0)
    
    const count = (value) => {
      const result = amount + value
       if(result<=stock){
        setAmount(amount+value) 
    } 
  }  

  return {
    count, amount
  }
  
}

export default useItemCount