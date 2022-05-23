CREATE DATABASE IF NOT EXISTS comics;

USE comics;

CREATE TABLE `characters` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `cartoon` varchar(40) NOT NULL,
  `year` int(11) NOT NULL COMMENT 'Ano de lançamento',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO `characters`
(
`id`,
`name`,
`cartoon`,
`year`)
VALUES
(1, 'Abigail', 'KND - A Turma do Bairro', 1999),
(2, 'Corvo', 'Solar Opposites', 2010),
(3, 'Dexter', 'Labotatório de Dexter', 2020);


CREATE TABLE `creators` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `birth_date` datetime NOT NULL,
  `id_characters` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_idx` (`id_characters`),
  CONSTRAINT `FK` FOREIGN KEY (`id_characters`) REFERENCES `characters` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO `creators` (`name`, `birth_date`, `id_characters`) 
VALUES ( "Tom Warburton", "1968-07-23 00:00:00", 1),
 ( "Genndy Tartakovsky", "1970-01-17 00:00:00", 2),
 ( "Justin Roiland", "1980-02-21 00:00:00", 3),
 ( "Mike McMahan", "1983-10-21 00:00:00", 3);