import React, { useEffect, useState } from "react";
import AdminNavigationBar from "../common/AdminNavigationBar";
import ItemsTable from "../organisms/ItemsTable";
import axios from "axios";
import UpdateModalContext from "../constext/UpdateModalContext";

function ItemsPage(props) {
  const [products, setProducts] = useState([]);
  const [isOpenModal, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/v1/product/get-all")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleModal = () => {
    setIsModalOpen(!isOpenModal);
  };

  return (
    <div>
      <AdminNavigationBar></AdminNavigationBar>

      <div className="p-5">
        <UpdateModalContext.Provider value={isOpenModal}>
          <ItemsTable
            products={products}
            handleModal={handleModal}
          ></ItemsTable>
        </UpdateModalContext.Provider>
      </div>
    </div>
  );
}

export default ItemsPage;
