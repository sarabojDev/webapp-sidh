import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { ChartArea, CircleCheckBig, Play, Plus, Users } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const tabBtn = [
    {
        btnName: "Dashboard",
        href: "dashboard",
        icon: <ChartArea />
    },
    {
        btnName: "Leads",
        href: "lead",
        icon: <Users />
    },
    {
        btnName: "Site visits",
        href: "site-visits",
        icon: <CircleCheckBig />
    }
]

const TelemarketingTabBtn = () => {
    const [currenttab, setCurrentTab] = useState("Dashboard")
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2 my-2'>
                {
                    tabBtn.map(btn => (
                        <Link key={btn.btnName} to={btn.href}>
                            <Button onClick={() => setCurrentTab(btn.btnName)} variant={btn.btnName === currenttab ? "default" : "ghost"} >
                                {btn.icon} {btn.btnName}
                            </Button>
                        </Link>
                    ))
                }
            </div>
            <div className='flex items-center gap-2'>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant={"outline"} size={"icon"}>
                            <Play />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        Start autodial
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant={"outline"} size={"icon"}>
                            <Plus />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        Create new lead
                    </TooltipContent>
                </Tooltip>
            </div>
        </div>
    )
}

export default TelemarketingTabBtn