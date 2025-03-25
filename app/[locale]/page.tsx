import { use } from "react"
import SelectLocale from "../components/SelectLocale"
import { getDictionary } from "./dictionaries"

export default function Page({
    params
}: {
    params: Promise<{locale: string}>
}) {
    const {locale} = use(params)
    const dict = use(getDictionary(locale))
    return <>
        {`${dict.locale} ${locale}`}
        <div>
            <SelectLocale lang={locale}/>
        </div>
    </>
}