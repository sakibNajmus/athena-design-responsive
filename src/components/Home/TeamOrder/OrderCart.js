import React from 'react';

const OrderCart = ({item}) => {
    const {price, order, workInfo, workInfo1, workInfo2, workInfo3, workInfo4, workInfo5, workInfo6} = item;
    return (
        <div className="col-md-4 col-sm-12 mb-5">
            <div className="order-cart rounded shadow pt-5 ">
                <h1 className="font-weight-bold">{price}</h1>
                <p>{order} </p>
                <hr className="bottom"/>
                <p>{workInfo} </p>
                <p>{workInfo1} </p>
                <p>{workInfo2} </p>
                <p>{workInfo3} </p>
                <p>{workInfo4} </p>
                <p>{workInfo5} </p>
                <p className="mb-3">{workInfo6} </p>
                <button className="btn d-none order-btn btn-main m-auto mt-4 p-2">Order Now</button>
            </div>
            
        </div>
    );
};

export default OrderCart;