'use client'
import { useSearchParams } from "next/navigation"

const SelectLocale = ({lang}:{lang: string}) => {
    const search = useSearchParams()
    const handleChange = (e) => {
        const target = `${window.location.origin}/${e.target.value}`
        window.location.href = search.toString().length > 0 ? target.concat(`?${search.toString()}`) : target
    }
    return (
        <select value={lang} onChange={handleChange}>
            <option value="id">ID</option>
            <option value="en">EN</option>
        </select>
    )
}

export default SelectLocale