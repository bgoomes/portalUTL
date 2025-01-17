import { Link } from "react-router-dom"

interface Props {
    title: string
    description: string
    cover?: string
    link: string
}

export function Edicao({title, description, cover, link }: Props){
    return (
        <Link to = {link}>
            <div className="flex flex-col gap-1 rounded-xl w-full transition-all overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl">
                <img src={cover} className="w-full" />
                <div className="flex flex-col items-center justify-end gap-1">
                    <h2 className=" font-stihl-display border-b-2 border-footer/10 text-HEADINGS text-xl p-4">{title}</h2>
                    <span className=" font-stihl-light text-xs p-4">{description}</span>
                </div>
                
        </div>
       </Link>
    )
}