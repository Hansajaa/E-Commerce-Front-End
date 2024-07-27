import React, { useState } from 'react'
import { Table } from "flowbite-react";
import { AiOutlineDelete } from "react-icons/ai";
import { Button } from 'flowbite-react'

const CartTable = () => {
    const products = [{ price: 1200, name: "Shirt", productCode: "P0010000" }]

    const [qty, setQty] = useState(1);

    return (
        <div className="overflow-x-auto">
            <Table>
                <Table.Head>
                    <Table.HeadCell className="text-white border-gray-700 bg-gray-800">
                        Product image
                    </Table.HeadCell>
                    <Table.HeadCell className="text-white border-gray-700 bg-gray-800">
                        product name
                    </Table.HeadCell>
                    <Table.HeadCell className="text-white border-gray-700 bg-gray-800">
                        Quantity
                    </Table.HeadCell>
                    <Table.HeadCell className="text-white border-gray-700 bg-gray-800">
                        price
                    </Table.HeadCell>
                    <Table.HeadCell className="text-white border-gray-700 bg-gray-800">
                        <span className="sr-only">Delete</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {products.map((p) => (
                        <Table.Row key={p.productCode} className="bg-swhite border-gray-600 bg-gray-700 hover:bg-gray-600">
                            <Table.Cell className="whitespace-nowrap font-bold text-white">
                                {p.productCode}
                            </Table.Cell>
                            <Table.Cell className="text-white font-extralight">
                                {p.name}
                            </Table.Cell>
                            <Table.Cell className="text-white font-extralight">
                                <Button.Group className="flex gap-2">
                                    <Button className="rounded-lg" color="info" onClick={() => setQty(qty => qty - 1)}>-</Button>
                                    <p className="bg-white text-black p-2 px-4 rounded-md">{qty}</p>
                                    <Button className="rounded-lg" color="info" onClick={() => setQty(qty => qty + 1)}>+</Button>
                                </Button.Group>
                            </Table.Cell>
                            <Table.Cell className="text-white font-extralight">
                                Rs.{p.price}
                            </Table.Cell>

                            <Table.Cell onClick={null}>
                                <a
                                    href="#"
                                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                                >
                                    <AiOutlineDelete size={20}></AiOutlineDelete>
                                </a>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}

export default CartTable