import React, { useState , useEffect }  from 'react';

function Shop( { match }){

    useEffect( () =>{
        fatchItem(); 
    }, []);

    const [ item , setItems] = useState({
        images: {}
    });

    const fatchItem = async () =>{

        var options = {
            'method': 'GET',
            'hostname': 'fortnite-api.theapinetwork.com',
            'path': 'https://fortnite-api.theapinetwork.com/item/get?id='+match.params.id,
            'headers': {
              'Authorization': '72f1cf8ec8b41e05c31bf426e0e5f32f'
            }
          }; 
        const FeatchItem = await fetch(options.path,options);
        const item = await FeatchItem.json();
        console.log(item.data);
        setItems(item.data.item);
    }

    return(
      
      <div className="item-details">
           
          <div className="image">
            <img src={item.images.background} />
          </div>
          <div className="item-info"> 
            <h2>{ item.name }</h2>
            <span className="prie">Price : { item.cost }</span>
            <button className="add-to-cart">Add To Cart</button>
          </div>
      </div>
    )
}

export default Shop;