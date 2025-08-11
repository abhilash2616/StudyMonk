"use client";

import Link from "next/link";
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import Login from "./Login";

function Header() {
    return (
        <header className="py-4 text-white bg-transparent z-50">
            <div className="lg:px-20 px-4 flex justify-between items-center">
                <Link href="/" className="transition hover:opacity-80">
                    <Image src="/assets/logo.png" alt="Site Logo" width={280} height={40} layout="responsive" className="w-auto" />
                </Link>

                <div className="hidden lg:flex items-center gap-6">
                    <Nav />
                </div>
                <div className="hidden lg:flex items-center gap-6">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                className="text-white shadow-indigo-500/30 px-6 py-2 rounded-full transition-all duration-200 inline-flex items-center gap-2 text-base font-medium"
                                size="lg"
                            >
                                <LoginOutlinedIcon className="w-[6px] h-[6px]" />
                                <span>Login</span>
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-[#fff] border border-[#001F3F] text-black rounded-2xl w-[90%] max-w-[800px]">
                            <DialogHeader className="border-b border-[#001F3F] px-4 sm:px-6">
                                <DialogTitle className="text-xl font-bold mb-3">
                                    Login
                                </DialogTitle>
                            </DialogHeader>

                            <div className="py-6 px-4 sm:px-6">
                                <Login />
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
                <div className="lg:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header