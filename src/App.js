import Product from './components/Product/Product';
import React from 'react';

import './app.css'
class App extends React.Component{

    state = {
        Products:[
            {num:"1", title:"React" , price:"100$", key:"1"},
            {num:"2", title:"Java Script" , price:"90$", key:"2"},
        ],
        count:0,
    }

    constructor(props){
        super(props);
        this.countHandler=this.countHandler.bind(this);
        console.log("constructor",this);

    }


    countHandler(){
        
       console.log('count clicked',this.state.count); 
       this.setState({count: this.state.count+1});
    }

    render(){
        return (
            <div className="container">
              <h1 style={{ color: 'orange' }}>Shopping App</h1>
              {this.state.Products.map((product)=>{
                  return <Product num={product.num} name={product.title} price={product.price} key={product.key}/>;
                })}
                <button onClick={this.countHandler} className="product">Click here</button>
            </div>

        );
    }
}
export default App;