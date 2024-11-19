import HeaderLeft from "./HeaderLeft"
import HeaderRight from "./HeaderRight"
import Headroom from 'react-headroom'

const AppHeader = () => {
    return (
        <Headroom>
            <header className="sticky border-b top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className='px-3 lg:px-0 lg:w-11/12 mx-auto py-2 flex items-center justify-between'>
                    <div>
                        <HeaderLeft />
                    </div>
                    <div>
                        <HeaderRight />
                    </div>
                </div>
            </header>
        </Headroom>

    )
}

export default AppHeader