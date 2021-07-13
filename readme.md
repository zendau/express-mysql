# Многие ко многим
Дання связь необходима когда каждая таблица из двух может ссылкаться на другую больше одного раза.
Для этой связи создается таблица посредник. В данной таблице происходит соединение с помощью  foreign key которые ссылаются на primary key или unique другой таблицы.

```sql

DROP TABLE IF EXISTS `employee`;
CREATE TABLE IF NOT EXISTS `employee` (
  `employeeId` int(11) NOT NULL AUTO_INCREMENT,
  `employeeName` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `employeeIdAge` int(11) DEFAULT '0',
  PRIMARY KEY (`employeeId`),
  UNIQUE KEY `employeeId` (`employeeId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `employeeidpositions`;
CREATE TABLE IF NOT EXISTS `employeeidpositions` (
  `positionId` int(11) NOT NULL,
  `employeeIdId` int(11) NOT NULL,
  PRIMARY KEY (`positionId`,`employeeIdId`),
  KEY `FK_employeeidpositions_employee` (`employeeIdId`),
  CONSTRAINT `FK_employeeidpositions_employee` FOREIGN KEY (`employeeIdId`) REFERENCES `employee` (`employeeId`),
  CONSTRAINT `FK_employeeidpositions_position` FOREIGN KEY (`positionId`) REFERENCES `position` (`postionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `person`;
CREATE TABLE IF NOT EXISTS `person` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `lastName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `age` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

```

![Many to Many](img/manyToMany.png)