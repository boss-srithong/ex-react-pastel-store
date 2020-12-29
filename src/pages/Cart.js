import React from 'react';
import { Typography, Table } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Title } = Typography;

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
            render: (id) => <a onClick={ () => console.log(id)}>Delete</a>,
          },
      ];
    console.log('----->', cart)
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
            >
            </Table>
            </div>
        </>
    )
}

export default Cart