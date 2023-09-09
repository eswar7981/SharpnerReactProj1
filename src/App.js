import React, { useState } from 'react';



function App() {

    const [num,setnum]=useState([])
    const [ID,setID]=useState('')
    const [productName,setName]=useState('')
    const [productPrice,setProductPrice]=useState(0)
    const [totalPrice,setTotalPrice]=useState(0)
  
  
  
    const func1=(a,b)=>{
      localStorage.removeItem(a)
      console.log(b)
      const tot=parseInt(totalPrice)-parseInt(b)
      console.log(tot)
      setTotalPrice(tot)
    let dat=num.filter((d)=>d.id!==a)
    console.log(dat)
    setnum(dat)
  }


  

    const idHandler=(e)=>{
        setID(e.target.value)
        
    }

   


    const productnameHandler=(e)=>{
        setName(e.target.value)
    }
    

    const productpriceHandler=(e)=>{
      setProductPrice(e.target.value)
      
  }
  const func12=(e)=>{
    e.preventDefault()
    console.log(ID)
    console.log(productName)
    console.log(productPrice)
    const temp=parseInt(totalPrice)+parseInt(productPrice)
    setTotalPrice(temp)
    
    const abc={id:ID,name:productName,productprice:productPrice}
    localStorage.setItem(ID,`id: ${ID} name: ${productName} productname: ${productPrice}`)
    const c=[...num,abc]
    setnum(c)
    setID('')
    setName(0)
    setProductPrice(0)

  

}

  return (
    <div>
      <div>
            <form >
                <label>Product ID</label>
                <input id="ID" type="number" onChange={idHandler}></input>&nbsp;&nbsp;
                <label>Selling Price</label>
                 <input type="number"   onChange={productpriceHandler}></input>&nbsp;&nbsp;
                 <label>Product Name</label>
                 <input type="text"   onChange={productnameHandler}></input>&nbsp;&nbsp;
                
                 

                 <button type="submit" onClick={func12}>Add Product</button>

            </form>
            </div>

            <h2>Products</h2>

      {num.map((a)=>(
        <li key={a.ID}>
     {a.productprice}&nbsp;-&nbsp;{a.name}&nbsp;&nbsp;
        <button data={a.id} onClick={()=>func1(a.id,a.productprice)}>Delete Product</button>
        </li>

      ))}


      <h3>Total Value Worth of Products :{` Rs ${totalPrice}`}</h3>
    </div>
  );
}

export default App;
