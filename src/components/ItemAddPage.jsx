import React, { useState } from 'react';
import AdminNavigationBar from '../common/AdminNavigationBar';
import { Label, FileInput } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function ItemAddPage(props) {

    const [dropDownState, setDropDownState] = useState(false);
    
    const handleState = () => {
        setDropDownState(!dropDownState);
    }

    const {register, handleSubmit, reset} = useForm();

    const clearForm = () => {
        reset();
    }

    const handleClick = (data) => {
        console.log(data);
    //    const formData = prepareFormData(data);
    //    addProduct(formData);
    }

    const addProduct = (formData) => {
        axios.post('http://localhost:8081/api/v1/product/add',formData)
        .then(function(response){
            console.log(response);
            clearForm();
        })
        .catch(function(err){
            console.log(err);
        })
    }

    const prepareFormData = (product) => {
        const formData = new FormData();
        
        formData.append(
            'product',
            new Blob([JSON.stringify(product)],{type: 'application/json'})
        );

        for (let i = 0; i < product.images.length; i++) {
            formData.append(
                'productImage',
                product.images[i],
                product.images[i].name
            );
        }

        return formData;
    }


    const [imageUrl, setImageUrl] = useState(null);


    const prepareImageUrl = (event) => {
        const file = event.target.files[0];
        const url = window.URL.createObjectURL(file);
        setImageUrl(url);
    }

    return (
        <div>
            <AdminNavigationBar></AdminNavigationBar>
            <div className='flex' onClick={handleState}>

                {/* add product form */}
                <div className='md:w-1/2 w-full flex-col'>
                    <form className='flex flex-col p-10 gap-2 justify-self-end'>
                        <input {...register(
                            "name"
                        )} placeholder='product Name' className='rounded-lg p-2 mt-8' type="text" />
                        <input {...register(
                            "description"
                        )} placeholder='Product Description' className='rounded-lg p-2 mt-8' type="text" />
                        <input {...register(
                            "quantity"
                        )} placeholder='Quantity' className='rounded-lg p-2 mt-8' type="number" />
                        <input {...register(
                            "price"
                        )} placeholder='Price' className='rounded-lg p-2 mt-8' type="text" />
                        <input {...register(
                            "category"
                        )} placeholder='Category' className='rounded-lg p-2 mt-8' type="text" />
                    </form>
                    <div className='flex p-10 justify-end -mt-10 gap-5'>
                        <div className="flex-col">
                            <button onClick={clearForm} className='bg-[#15616D] text-white py-2 px-4 rounded-lg hover:scale-105 hover:duration-150'>Clear</button>
                        </div>
                        <div className="flex-col">
                            <button onClick={handleSubmit(handleClick)} className='bg-[#15616D] text-white py-2 px-4 rounded-lg hover:scale-105 hover:duration-150'>Add Item</button>
                        </div>
                    </div>
                </div>

                {/* file selector */}
                <div className='md:w-1/2 flex-col mt-12 p-5'>
                    
                    <div className="flex flex-row w-full items-center justify-center">
                        <Label
                            htmlFor="dropzone-file"
                            className="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                            <div className="flex flex-col items-center justify-center pb-6 pt-5">
                            <svg
                                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 16"
                            >
                                <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <FileInput {...register(
                                "images"
                            )} id="dropzone-file" className="hidden" onChange={prepareImageUrl} />
                        </Label>
                    </div>
                    
                    <div className="flex flex-row mt-5 w-80">
                        <img src={imageUrl}/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default ItemAddPage;