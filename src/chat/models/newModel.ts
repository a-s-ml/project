export type ProfileChangeTypeRes = {
    target: number,
    about: string,
    education: string,
    work: string,
    private: PrivateStateInterface[],
    interests: number[]
}

export type ProfileChangeTypeReq = {
    chat: number
    body: ProfileChangeTypeRes
}

export type ProfileChangeTypeBodyReq = {
    data: ProfileChangeTypeRes,
    images: (Express.Multer.File | null)[]
}

export interface PrivateStateInterface {
    type: number
    value: number
}