import React, { useState } from 'react';
import { Modal, InputNumber, Radio} from 'antd';

const ProductModal = ({ item, onCancel, onOk}) => {
    const [quantity, setQuantity] = useState(1); // ? ตอนแรกใส่ undefind
    const [sizes, setSize] = useState(undefined);
    const [colors, setColor] = useState(undefined);

    const handleSubmitForm = () => {
        const result = {
            ...item,
            colors,
            sizes, 
            quantity
        }
        onOk(result)
        console.log(result);
    }
  
    return <Modal 
        title={`Add ${item.name } to cart!`} 
        visible={true}
        onOk={handleSubmitForm}
        onCancel={onCancel}
    >   
        <strong>SIZE</strong>
        <div className="field">
            <Radio.Group
                options={item.sizes}
                onChange={e => setSize(e.target.value)}
                optionType="button"
                buttonStyle="solid"
            />
        </div>
        <strong>COLOR</strong>
        <div className="colors field">
            {   
                item.colors.map(color => (
                    <div key={color} className={`c-${ color } ${colors===color?'selected':''}`} onClick={ () => setColor(color)}><span/></div>
                ))
            }
        </div>
        <strong>QUANTITY</strong>
        <div className="field">
            <InputNumber 
                min={1} 
                max={item.stock} 
                defaultValue={1} 
                onChange={setQuantity} 
            />
        </div>
    </Modal>
}

export default ProductModal