import React, { useState , useEffect }  from 'react';
import { Link } from 'react-router-dom';

function Shop(){
    
    useEffect( () =>{
        fatchShop();
    }, []);

    const [ items , setItems] = useState([]);

    const fatchShop = async () =>{

        var options = {
            'method': 'GET',
            'hostname': 'fortnite-api.theapinetwork.com',
            'path': 'https://fortnite-api.theapinetwork.com/store/get',
            'headers': {
              'Authorization': '72f1cf8ec8b41e05c31bf426e0e5f32f'
            }
          }; 
        const FeatchItems = await fetch(options.path,options);
        const items = await FeatchItems.json();
        console.log(items);
        setItems(items.data);
    }

    return(
        <div className="shop-item"> 
        {items.map(item => (
            <div className="item" key={item.itemId}>
                <div className="image"><img src={ item.item.images.information} alt={ item.item.images.item} /></div>
                <h4 ><Link to={`/shop/${item.itemId}`} >{ item.item.name }</Link></h4>
                <button className="add-to-cart">Add To Cart</button>
            </div>
            ))} 
        </div>
    )
}

export default Shop;