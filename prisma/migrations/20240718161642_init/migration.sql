-- CreateTable
CREATE TABLE `chat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_str` VARCHAR(255) NOT NULL,
    `chat` BIGINT NOT NULL,
    `type` VARCHAR(255) NOT NULL DEFAULT '1',
    `bot` INTEGER NULL DEFAULT 0,
    `date` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `dateUnix` INTEGER NOT NULL,
    `ref` VARCHAR(255) NULL,
    `img1` TEXT NULL,
    `img2` TEXT NULL,
    `img3` TEXT NULL,
    `city` INTEGER NULL,
    `gender` INTEGER NULL,
    `active` INTEGER NOT NULL DEFAULT 0,
    `name` VARCHAR(255) NULL,
    `about` VARCHAR(255) NULL,
    `find` INTEGER NOT NULL DEFAULT 3,

    UNIQUE INDEX `unique_id`(`id`),
    UNIQUE INDEX `unique_idstr`(`id_str`),
    UNIQUE INDEX `unique_chat`(`chat`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `complaints` (
    `id` INTEGER NOT NULL,
    `type` INTEGER NOT NULL,
    `to` INTEGER NOT NULL,
    `from` INTEGER NOT NULL,
    `date` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `dateUnix` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `complaints_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `active` INTEGER NULL,
    `name` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,

    FULLTEXT INDEX `cities_name_idx`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `find_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `active` INTEGER NULL,
    `name` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `genders_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `active` INTEGER NULL,
    `name` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
