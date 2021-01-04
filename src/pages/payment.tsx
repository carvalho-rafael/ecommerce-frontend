import React, { useContext } from 'react'

import { AuthContext } from '../context/AuthContext'
import { OrderContainer, PaymentContainer, ShippingAddress, CartList, CartListItem } from '../styles/pages/payment';

import { AddressContext } from '../context/AddressContext';
import Navbar from '../components/navbar';
import { CartContext } from '../context/CartContext';
import { Container } from '../styles/globalstyles';

import { PayPalButton } from "react-paypal-button-v2";
import { FiBluetooth } from 'react-icons/fi';

export default function Payment() {
    const { user } = useContext(AuthContext)
    const { address } = useContext(AddressContext)
    const { products, total } = useContext(CartContext)

    return (
        <>
            <Navbar />
            <Container>
                <OrderContainer>
                    <ShippingAddress>
                        <h4>Endereço: </h4>
                        <p>{address?.address}, {address?.district}, {address?.city}, {address?.state}</p>
                    </ShippingAddress>
                    <CartList >
                        <h4>Produtos: </h4>
                        {products?.map((product, index) => (
                            <CartListItem key={index}>
                                <img src={product.imgUrl} alt="" />
                                <div>
                                    <span><b>{product.name}</b>, My  ...</span>
                                    <p>R$ {product.price}</p>
                                </div>
                            </CartListItem>
                        ))}
                    </CartList>
                </OrderContainer>
                <PaymentContainer>
                    <h3>Total: R${total}</h3>
                    <PayPalButton
                        createOrder={(data: any, actions: any) => {
                            return fetch('http://localhost:3003/createOrder', {
                                method: 'post'
                            }).then(function (res) {
                                return res.json();
                            }).then(function (orderData) {
                                return orderData.id;
                            });
                        }}
                        onApprove={(data: any, actions: any) => {
                            // Capture the funds from the transaction
                            return actions.order.capture().then(function (details: any) {
                                // Show a success message to your buyer
                                alert("Transaction completed by " + details.payer.name.given_name);
                                // OPTIONAL: Call your server to save the transaction
                                return fetch("/paypal-transaction-complete", {
                                    method: "post",
                                    body: JSON.stringify({
                                        orderID: data.orderID
                                    })
                                });
                            });
                        }}
                        options={{
                            clientId: 'sb',
                            currency: 'BRL',
                            locale: 'pt_BR',
                        }}
                    />
                </PaymentContainer>
            </Container>
        </>
    )
}