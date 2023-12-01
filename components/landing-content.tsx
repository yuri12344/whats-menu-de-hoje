"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const testimonais = [
    {
        name: "Allan Balbi",
        avatar: "A",
        title: "Fundador da empresa Magnata dos Queijos",
        description: "Utilizar o ChatGPT-4 para gerar conteudo e criar imagens é uma mão na roda"
    },
    {
        name: "Roberto",
        avatar: "B",
        title: "Fundador da Gula da Carol",
        description: "Com Genius eu crio imagens e textos para meus criativos"
    }
]

export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="mb-10 font-extrabold text-center text-white text-4x1">
                Testemunhos
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4 ">
                {testimonais.map((item) => (
                    <Card key={item.description} className="bg-[#192339] w-[30%] h-48  border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-sm text-zinc-400">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="px-0 pt-4">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}