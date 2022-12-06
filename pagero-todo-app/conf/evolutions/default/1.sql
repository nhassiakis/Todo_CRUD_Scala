# Todo schema

# --- !Ups
CREATE TABLE IF NOT EXISTS `todo` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `isComplete` TINYINT(4) NULL DEFAULT NULL,
  `createdAt` VARCHAR(45) NULL DEFAULT NULL,
  `completedAt` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
AUTO_INCREMENT = 2;

# --- !Downs
drop table 'todo';