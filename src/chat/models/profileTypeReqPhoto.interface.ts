export type ProfileTypeReqPhoto = {
    data: {
        img1: Express.Multer.File | null,
        img2: Express.Multer.File | null,
        img3: Express.Multer.File | null
    }
}