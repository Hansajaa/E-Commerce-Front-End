import React from "react";
import { Table } from "flowbite-react";

function ItemsTable({ products }) {
  return (
    <div>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell className="text-white border-gray-700 bg-gray-800">Product name</Table.HeadCell>
            <Table.HeadCell className="text-white border-gray-700 bg-gray-800">Description</Table.HeadCell>
            <Table.HeadCell className="text-white border-gray-700 bg-gray-800">Category</Table.HeadCell>
            <Table.HeadCell className="text-white border-gray-700 bg-gray-800">Price</Table.HeadCell>
            <Table.HeadCell className="text-white border-gray-700 bg-gray-800">Quantity</Table.HeadCell>
            <Table.HeadCell className="text-white border-gray-700 bg-gray-800">
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {Array.isArray(products) &&
              products.map((p) => (
                <Table.Row className="bg-swhite border-gray-600 bg-gray-700 hover:bg-gray-500">
                  <Table.Cell className="whitespace-nowrap font-bold text-white">
                    {p.name}
                  </Table.Cell>
                  <Table.Cell className="text-white font-extralight">{p.description}</Table.Cell>
                  <Table.Cell className="text-white font-extralight">{p.category}</Table.Cell>
                  <Table.Cell className="text-white font-extralight">{p.price}</Table.Cell>
                  <Table.Cell className="text-white font-extralight"    >{p.price}</Table.Cell>
                  <Table.Cell>
                    <a
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Edit
                    </a>
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default ItemsTable;
