import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import Navigation from './Layouts/Navigation'


const App = () => {
    return (

        <div className="container">
            <Navigation/>
            <div className="row">
                <div className="col-md-12">
                    <h1>React+Redux Shopping Cart Example</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <ProductList />
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>

            <footer>
                <small>
                    made by <a href="https://twitter.com/krzysu">Kris Urbas</a>, source code available on <a href="https://github.com/krzysu/reactjs-shopping-cart">github</a>
                </small>
            </footer>
        </div>
    );
}

export default App;
