'use client'
export const cookie = {
    set: (name: string, value: string, exporedHour: number = 8760, path?: string) => {
        const d = new Date()
        d.setTime(d.getTime() + exporedHour * 60 * 60 * 1000)

        const expires = `;expires=${d.toUTCString()}`
        const cookiePath = `;path=${path ?? '/'}`
        const domain = `;domain=localhost`

        document.cookie = `${name}=${value + expires + cookiePath + domain}`
    }
}