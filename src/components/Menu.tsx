"use client"

import Image from "next/image"
import { useState } from "react"

export default function Menu() {
    const [open, setOpen] = useState(false)

    return (
        <div className="">
            <Image src="/menu.png" alt="" width={28} height={28} className="cursor-pointer" />
        </div>
    )
}