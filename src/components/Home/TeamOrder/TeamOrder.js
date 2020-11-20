import React from 'react';
import './TeamOrder.css'
import OrderCart from './OrderCart';

const orderDetails = [
    {
        price: '$199',
        order: 'For Basic',
        workInfo: 'Homepage',
        workInfo1: 'No Inner Page',
        workInfo2: 'Asset file',
        workInfo3: 'Source file',
        workInfo4: 'Free Stock Photos',
        workInfo5: '10 Days Free Support',
        workInfo6: '24/7 Support',
    },
    {
        price: '$399',
        order: 'For Preferred',
        workInfo: 'Homepage',
        workInfo1: '4 Inner Page',
        workInfo2: 'Asset file',
        workInfo3: 'Source file',
        workInfo4: 'Free Stock Photos',
        workInfo5: '20 Days Free Support',
        workInfo6: '24/7 Support',
    },
    {
        price: '$599',
        order: 'For Elite',
        workInfo: 'Homepage',
        workInfo1: '8 Inner Page',
        workInfo2: 'Asset file',
        workInfo3: 'Source file',
        workInfo4: 'Free Stock Photos',
        workInfo5: '30 Days Free Support',
        workInfo6: '24/7 Support',
    },
];

const TeamOrder = () => {
    return (
        <section id="team" className="order-container pt-5">
           <div className="container pt-5">
            <h2 className="text-center font-weight-bold m-2">Choose Your Dedicated Team</h2>
                <div className="row text-center mt-5 p-3">
                    {
                        orderDetails.map(item => <OrderCart item={item}/>)
                    }                  
                </div>
           </div>
        </section>
    );
};

export default TeamOrder;