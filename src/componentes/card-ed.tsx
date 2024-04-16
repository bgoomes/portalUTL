interface Props {
    title: string
    description: string
    cover?: string
    link?: string
}

export function Edicao({title, description, cover, link }: Props){
    return (
        <a href={link}>
            <div className="flex flex-col gap-1 border rounded-xl w-full h-96  overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl">
                <img src={cover} className="w-full" />
                <div className="flex flex-col items-center justify-end gap-1">
                    <h2 className=" font-stihl-bold text-HEADINGS text-xl p-4">{title}</h2>
                    <span className=" font-stihl-light text-xs p-4">{description}</span>
                </div>
                
        </div>
       </a>
    )
}