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

export interface ProfileTypeRes {
    id: number,
    id_str: string,
    chat: bigint,
    type: string,
    bot: number,
    date: Date,
    dateUnix: number,
    ref: string,
    img1: string | ArrayBuffer | null,
    img2: string | ArrayBuffer | null,
    img3: string | ArrayBuffer | null,
    city: number,
    gender: number,
    status: number,
    name: string,
    about: string,
    find: number,
    birthday: Date,
    target: number,
    work: string,
    education: string,
    private: PrivateStateInterface[],
    interests: number[]
}