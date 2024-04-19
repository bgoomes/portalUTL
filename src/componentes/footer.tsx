export function Footer(){
    return (
        <footer className="w-full h-28 bg-HEADINGS mt-28">
            <div className=" max-w-[1080px] m-auto">
                <div className="flex flex-row items-end py-10 text-footer justify-between font-stihl-regular">
                    <div>
                        <span>© STIHL. Todos os direitos reservados.</span>
                    </div>
                    <div>
                        <span>
                            Desenvolvido por <a href="https://gio.com.vc" target="_blank" className=" text-laranjaStihl">Gio</a>.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}