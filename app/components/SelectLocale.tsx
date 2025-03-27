'use client'
import { useSearchParams } from "next/navigation"
import { cookie } from "../../lib/helper/cookie"
import { COOKIE_LANG } from "../../lib/cookie/cookie-keys"

const SelectLocale = ({lang}:{lang: string}) => {
    const search = useSearchParams()
    const handleChange = (e) => {
        cookie.set(COOKIE_LANG, e.target.value, 1000)
        const target = `${window.location.origin}/${e.target.value}`
        window.location.href = search.toString().length > 0 ? target.concat(`?${search.toString()}`) : target
    }
    return (
        <select 
            value={lang} 
            onChange={handleChange}
            style={{
                width: '200px',
                height: '30px'
            }}
        >
            <option value="id">ID</option>
            <option value="en">EN</option>
        </select>
    )
}

export default SelectLocale