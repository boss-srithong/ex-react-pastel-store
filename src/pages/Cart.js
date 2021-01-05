import React from 'react';
import { Typography, Table } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Title , Text } = Typography;

const Cart = ({ cart }) => {


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Size',
            dataIndex: 'sizes',
        },
        {
            title: 'Color',
            dataIndex: 'colors',
            render: (colors) => 
                <div className="colors">
                    <div key={colors} className={`c-${colors}`}><span/>
                    </div>
                </div>,
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
        },
        {
            title: 'Price per unit',
            className: 'column-money',
            dataIndex: 'price',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'id',
            render: (cart) => <a onClick={ () => console.log(cart.id)}>Delete</a>,
          },
      ];
    return (
        <>
            <div className={"app-header"}>
                <div className={"header-content cart-header"}>
                    <Title><ShoppingCartOutlined /> Cart</Title>
                </div>
            </div>
            <div className={"app-content"}>
            <Table 
                columns={columns}
                dataSource={cart}
                summary={cart => {
                    let initialValue = 0;
                    let sumTotal = cart.reduce(function (total, currentValue) {
                        return total + (currentValue.price*currentValue.quantity);
                    }, initialValue);
                    
            
                    return (
                      <>
                        <Table.Summary.Row>
                          <Table.Summary.Cell colSpan={5}>Total</Table.Summary.Cell>
                          <Table.Summary.Cell>
                            <Text>{sumTotal}</Text>
                          </Table.Summary.Cell>
                        </Table.Summary.Row>
                      </>
                    );
                  }}
                />
            </div>
        </>
    )
}

export default Cart