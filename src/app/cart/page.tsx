"use client"

import PageHeader from "@/components/PageHeader";
import QuantityModifier from "@/components/QuantityModifier";
import { cartContext } from "@/context/CartContext"
import { Table } from "flowbite-react";
import { useContext } from "react"

const Cart = () => {
    const { cartProducts, increaseQuantity, decreaseQuantity, totalPriceProduct} = useContext(cartContext);
    return (
        <div className="space-y-8 pb-3">
            <PageHeader title="Carrito de compras" />
            <Table>
                <Table.Head>
                    <Table.HeadCell>Producto</Table.HeadCell>
                    <Table.HeadCell></Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    {
                        cartProducts.map((product) => (
                            <Table.Row key={product.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>
                                    {product.title}
                                </Table.Cell>
                                <Table.Cell>
                                    <QuantityModifier product={product} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 font-extrabold"> 
                        <Table.Cell className="whitespace-nowrap font-extrabold text-gray-900 dark:text-white">
                            Total
                        </Table.Cell>
                        <Table.Cell className="text-right">
                            <span className="text-gray-900 dark:text-white">
                                ${totalPriceProduct.toLocaleString("es-ES")}
                            </span>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}

export default Cart