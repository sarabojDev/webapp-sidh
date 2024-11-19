import lightLogo from '@/assets/logo/logo-light.png'
import darkLogo from '@/assets/logo/logo-dark.png'
import { useTheme } from '@/components/theme-provider'

const HeaderLeft = () => {
    const { myTheme } = useTheme();

    return (
        <div>
            <div>
                <img
                    src={myTheme === 'light' ? darkLogo : lightLogo}
                    className="w-[100px]"
                    alt="Logo"
                />
            </div>
        </div>
    )
}

export default HeaderLeft