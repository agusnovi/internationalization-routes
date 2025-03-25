import { use } from "react"
import SelectLocale from "../components/SelectLocale"

export default function Page({
    params
}: {
    params: Promise<{locale: string}>
}) {
    const {locale} = use(params)
    return <>
        {`Locale ${locale}`}
        <div>
            <SelectLocale lang={locale}/>
        </div>
    </>
}