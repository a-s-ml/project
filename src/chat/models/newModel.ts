export type ProfileChangeTypeRes = {
    target: number,
    about: string,
    education: string,
    work: string,
    private: PrivateStateInterface[],
    interests: InterestsStateInterface[]
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

export interface InterestsStateInterface {
    interest_id: number
}

export interface ProfileTypeRes {
    id: number,
    city: number,
    gender: number,
    status: number,
    name: string,
    about: string,
    find: number,
    birthday: number,
    target: number,
    work: string,
    education: string,
    private: PrivateStateInterface[],
    interests: InterestsStateInterface[]
}