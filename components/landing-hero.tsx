"use client";

import { useAuth } from "@clerk/nextjs";
import {Button} from "@/components/ui/button"
import TypeWriterComponent from "typewriter-effect"
import Link from "next/link"

export const LandingHero = () => {
    const { isSignedIn } = useAuth();
    return (
        <div className="space-y-5 font-bold text-center text-white py-36">
            <div className="space-y-5 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
                <h1>
                    Envie Via Whatsapp
                </h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
                    <TypeWriterComponent 
                        options={{
                            strings: [
                                "Cardapios",
                                "Menus",
                                "Promoções",
                            ],
                            autoStart: true,
                            loop: true
                        }}
                    />
                </div>
            </div>
            <div className="text-sm font-light md:text-xl text-zinc-400">
                Envie cardapios para seus clientes de forma automatica.
            </div>
            <div>
               <Link href={isSignedIn ? "/dashboard" :  "/sign-up"}>
                    <Button variant="premium" className="p-4 font-semibold rounded-full md:text-lg md:p-6">
                        Começar agora
                    </Button>
               </Link>
            </div>
            <div className="text-xs font-normal text-zinc-400 md:text-sm">
                Não precisa do cartão de crédito
            </div>
        </div>
    )
}