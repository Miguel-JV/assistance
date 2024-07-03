-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nocontrol` VARCHAR(20) NOT NULL,
    `contra` VARCHAR(191) NOT NULL,
    `f_creacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `f_modificacion` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_nocontrol_key`(`nocontrol`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
