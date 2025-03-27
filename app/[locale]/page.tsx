import { use } from "react"
import SelectLocale from "../components/SelectLocale"
import { getDictionary } from "./dictionaries"

export default function Page({
    params
}: {
    params: Promise<{locale: 'en' | 'id'}>
}) {
    const {locale} = use(params)
    const dict = use(getDictionary(locale))
    return <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div>
                {dict.select}
                <div>
                    <SelectLocale lang={locale}/>
                </div>
                {dict.selected}
            </div>
        </div>
}