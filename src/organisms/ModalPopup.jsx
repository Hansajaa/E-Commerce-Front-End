"use client";
import React, { useContext, useState } from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import UpdateModalContext from "../constext/UpdateModalContext";

function ModalPopup({ handleModal, product }) {

  const isOpenModal = useContext(UpdateModalContext);

  return (
    <div>
      <Modal show={isOpenModal} size="md" onClose={handleModal} popup>
      <Modal.Header />
        <Modal.Body>
          <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-10">
            Update Product
          </h2>
          <div className="space-y-6">
            {/* product name input field*/}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Product Name" />
              </div>
              <TextInput
                id="name"
                placeholder=""
                value={product.name}
                // onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            {/* product description input field*/}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="description" value="Product Description" />
              </div>
              <TextInput
                id="description"
                placeholder=""
                value={product.description}
                // onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            {/* product Category input field*/}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="category" value="Category" />
              </div>
              <TextInput
                id="category"
                placeholder=""
                value={product.category}
                // onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            {/* product Price input field*/}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="price" value="Price (Rs.)" />
              </div>
              <TextInput
                id="price"
                placeholder=""
                value={product.price}
                // onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            {/* product Quantity input field*/}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="quantity" value="Quantity" />
              </div>
              <TextInput
                type="number"
                id="quantity"
                placeholder=""
                value={product.quantity}
                // onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>


              <div className="flex items-right justify-end">
                <Button>Update</Button>
              </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalPopup;
