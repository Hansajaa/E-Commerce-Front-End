"use client";

import { Footer } from "flowbite-react";
import {  BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import logo from '../assets/navigation_bar_asserts/brand_logo.png'

function FooterSection() {
    return (
        <div className="mt-10">
            <Footer container className="bg-[#0e4047]">
                <div className="w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className="rounded-lg">
                        <img src={logo} alt="brand logo" className="w-48 p-5"/>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                        <Footer.Title title="Shop" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">All Collections</Footer.Link>
                            <Footer.Link href="#">Winter Edition</Footer.Link>
                        </Footer.LinkGroup>
                        </div>
                        <div>
                        <Footer.Title title="Follow us" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">Facebook</Footer.Link>
                            <Footer.Link href="#">Instagram</Footer.Link>
                        </Footer.LinkGroup>
                        </div>
                        <div>
                        <Footer.Title title="Legal" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">Privacy Policy</Footer.Link>
                            <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                        </Footer.LinkGroup>
                        </div>
                    </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="Clothify" year={2024}/>
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="#" icon={BsFacebook} />
                        <Footer.Icon href="#" icon={BsInstagram} />
                        <Footer.Icon href="#" icon={BsTwitter} />
                    </div>
                    </div>
                </div>
            </Footer>
        </div>
    );
}

export default FooterSection;