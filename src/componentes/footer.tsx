export function Footer(){
    return (
        <footer className="w-full h-28 bg-HEADINGS mt-28">
            <div className=" max-w-[1080px] m-auto">
                <div className="flex flex-col sm:flex-row items-center sm:items-end py-10 text-footer sm:justify-between font-stihl-regular">
                    <div>
                        <span>© 2025 STIHL. Todos os direitos reservados.</span>
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