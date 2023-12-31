"use client";

import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({
    weight: "600",
    subsets: ["latin"]
})

export const LandingNavbar = () => {
    const { isSignedIn } = useAuth();  

    return (
        <nav className="flex items-center justify-between p-4 bg-transparent">
            <Link href="/" className="flex items-center">
                <div className="relative w-8 h-8 mr-4">
                    <Image 
                        fill
                        alt="logo"
                        src="/logo.png"
                    />
                </div>
                <h1 className={cn("text-2x1 font-bold text-white", font.className)}>
                    MenuDeHoje
                </h1>
            </Link>
            <div className="flex items-center ga-x-2">
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant="outline" className="rounded-full">
                        Entrar
                    </Button>
                </Link>
            </div>
        </nav>
    )
}