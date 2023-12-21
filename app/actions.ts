'use server'

const sleep = (t: number) => new Promise<void>((resolve) => setTimeout(() => {
    resolve()
}, t))

export async function updateUser(userId: number, formData: string) {
    // ...
    console.log("in server side:", {
        userId,
        formData
    })
    // await sleep(3000)
    return {
        message: "ok"
    }
}

export async function updateUser2(userId: number, formData: string) {
    // ...
    console.log("in server sid2e:", {
        userId,
        formData
    })
    // await sleep(3000)
    return {
        message: "ok"
    }
}