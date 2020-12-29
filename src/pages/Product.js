import React, { useState, useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import { Typography, Radio } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import ProductModal from '../components/ProductModal';
import axios from 'axios';

const { Title } = Typography;

const Product = ({ cart, setCart}) => {
  const [selectedFilter, setSelectedFilter] = useState('select-all');
  const [selectedProduct, setSelectedProduct] = useState(undefined);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://basic-react-8c559.web.app/static/data.json')
    .then(({ data }) => setProducts(data.products));
  }, []);

  const addProductToCart = (product) => {
    setCart([
      ...cart,
      product
    ]);
    setSelectedProduct(undefined);
  }
  
  const onFillterChange = event => setSelectedFilter(event.target.value);
  let filteredProduct = products;

  if(selectedFilter === 'in-stock'){
    filteredProduct = products.filter(product => product.stock !== 0);
  }

  const sumOfQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity , 0);
  }

  return (
    <>
      <div className={"app-header"}>
          <div className={"header-content"}>
          <Title>Pastel Store</Title>
          <div className={"cart-icon"}>
              <Link to={'/cart'}>
                  <ShoppingCartOutlined />
                  <div className={'cart-quantity'}>{ sumOfQuantity() }</div>
              </Link>
          </div>
          <Radio.Group 
              defaultValue={selectedFilter} 
              buttonStyle="solid" 
              onChange={onFillterChange}>
              <Radio.Button value="select-all">Select all</Radio.Button>
              <Radio.Button value="in-stock">Only in stock</Radio.Button>
          </Radio.Group>
          </div>
      </div>
      <div className={"app-content"}>
          <div className="product-list">
          {
              filteredProduct.map(product => (
                <ProductItem key={product.id} item={product} onAddItem={setSelectedProduct} />         
              ))
          }
          </div>
      </div>
      {  
      selectedProduct && <ProductModal
        item={selectedProduct}
        onOk={addProductToCart} //onOk={(item) => addProductToCart(item)} แบบเต็ม
        onCancel={() => setSelectedProduct(undefined)}
      />
      
      }

    </>
  );
}

export default Product