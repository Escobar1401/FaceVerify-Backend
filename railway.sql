-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: crossover.proxy.rlwy.net    Database: railway
-- ------------------------------------------------------
-- Server version	9.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `asistencia`
--

DROP TABLE IF EXISTS `asistencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asistencia` (
  `id_asistencia` int NOT NULL AUTO_INCREMENT,
  `fecha_asistencia` date DEFAULT NULL,
  `hora_asistencia` time DEFAULT NULL,
  `id_estudiante` int DEFAULT NULL,
  PRIMARY KEY (`id_asistencia`),
  KEY `id_estudiante` (`id_estudiante`),
  CONSTRAINT `asistencia_ibfk_1` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiante` (`id_estudiante`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asistencia`
--

LOCK TABLES `asistencia` WRITE;
/*!40000 ALTER TABLE `asistencia` DISABLE KEYS */;
/*!40000 ALTER TABLE `asistencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `camara`
--

DROP TABLE IF EXISTS `camara`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `camara` (
  `id_captura` int NOT NULL AUTO_INCREMENT,
  `fecha_captura` date DEFAULT NULL,
  `hora_captura` time DEFAULT NULL,
  `id_estudiante` int DEFAULT NULL,
  `id_asistencia` int DEFAULT NULL,
  PRIMARY KEY (`id_captura`),
  KEY `id_estudiante` (`id_estudiante`),
  KEY `id_asistencia` (`id_asistencia`),
  CONSTRAINT `camara_ibfk_1` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiante` (`id_estudiante`),
  CONSTRAINT `camara_ibfk_2` FOREIGN KEY (`id_asistencia`) REFERENCES `asistencia` (`id_asistencia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `camara`
--

LOCK TABLES `camara` WRITE;
/*!40000 ALTER TABLE `camara` DISABLE KEYS */;
/*!40000 ALTER TABLE `camara` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudiante`
--

DROP TABLE IF EXISTS `estudiante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estudiante` (
  `id_estudiante` int NOT NULL AUTO_INCREMENT,
  `nombre_estudiante` varchar(30) DEFAULT NULL,
  `apellido_estudiante` varchar(30) DEFAULT NULL,
  `correo_estudiante` varchar(60) DEFAULT NULL,
  `contraseña_estudiante` varchar(60) DEFAULT NULL,
  `telefono_estudiante` varchar(15) DEFAULT NULL,
  `registro_facial` blob,
  `edad_estudiante` int DEFAULT NULL,
  PRIMARY KEY (`id_estudiante`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudiante`
--

LOCK TABLES `estudiante` WRITE;
/*!40000 ALTER TABLE `estudiante` DISABLE KEYS */;
INSERT INTO `estudiante` VALUES (1,'Edrian','cano escobar','edrianescobar31@gmail.com','123','1234567890',NULL,NULL);
/*!40000 ALTER TABLE `estudiante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudiante_grupo`
--

DROP TABLE IF EXISTS `estudiante_grupo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estudiante_grupo` (
  `id_estudiante` int NOT NULL,
  `id_grupo` int NOT NULL,
  PRIMARY KEY (`id_estudiante`,`id_grupo`),
  KEY `id_grupo` (`id_grupo`),
  CONSTRAINT `estudiante_grupo_ibfk_1` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiante` (`id_estudiante`),
  CONSTRAINT `estudiante_grupo_ibfk_2` FOREIGN KEY (`id_grupo`) REFERENCES `grupos` (`id_grupo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudiante_grupo`
--

LOCK TABLES `estudiante_grupo` WRITE;
/*!40000 ALTER TABLE `estudiante_grupo` DISABLE KEYS */;
/*!40000 ALTER TABLE `estudiante_grupo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudiante_materia`
--

DROP TABLE IF EXISTS `estudiante_materia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estudiante_materia` (
  `id_estudiante` int NOT NULL,
  `id_materia` int NOT NULL,
  PRIMARY KEY (`id_estudiante`,`id_materia`),
  KEY `id_materia` (`id_materia`),
  CONSTRAINT `estudiante_materia_ibfk_1` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiante` (`id_estudiante`),
  CONSTRAINT `estudiante_materia_ibfk_2` FOREIGN KEY (`id_materia`) REFERENCES `materias` (`id_materia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudiante_materia`
--

LOCK TABLES `estudiante_materia` WRITE;
/*!40000 ALTER TABLE `estudiante_materia` DISABLE KEYS */;
/*!40000 ALTER TABLE `estudiante_materia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudiante_tutor`
--

DROP TABLE IF EXISTS `estudiante_tutor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estudiante_tutor` (
  `id_estudiante` int NOT NULL,
  `id_tutorlegal` int NOT NULL,
  PRIMARY KEY (`id_estudiante`,`id_tutorlegal`),
  KEY `id_tutorlegal` (`id_tutorlegal`),
  CONSTRAINT `estudiante_tutor_ibfk_1` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiante` (`id_estudiante`),
  CONSTRAINT `estudiante_tutor_ibfk_2` FOREIGN KEY (`id_tutorlegal`) REFERENCES `tutores_legales` (`id_tutorlegal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudiante_tutor`
--

LOCK TABLES `estudiante_tutor` WRITE;
/*!40000 ALTER TABLE `estudiante_tutor` DISABLE KEYS */;
/*!40000 ALTER TABLE `estudiante_tutor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `excusas`
--

DROP TABLE IF EXISTS `excusas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `excusas` (
  `id_excusas` int NOT NULL AUTO_INCREMENT,
  `hora_excusa` time DEFAULT NULL,
  `fecha_excusa` date DEFAULT NULL,
  `correo_secretaria` varchar(60) DEFAULT NULL,
  `id_materia` int DEFAULT NULL,
  `id_profesor` int DEFAULT NULL,
  `id_estudiante` int DEFAULT NULL,
  `id_secretaria` int DEFAULT NULL,
  PRIMARY KEY (`id_excusas`),
  KEY `id_materia` (`id_materia`),
  KEY `id_profesor` (`id_profesor`),
  KEY `id_estudiante` (`id_estudiante`),
  KEY `id_secretaria` (`id_secretaria`),
  CONSTRAINT `excusas_ibfk_1` FOREIGN KEY (`id_materia`) REFERENCES `materias` (`id_materia`),
  CONSTRAINT `excusas_ibfk_2` FOREIGN KEY (`id_profesor`) REFERENCES `profesores` (`id_profesor`),
  CONSTRAINT `excusas_ibfk_3` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiante` (`id_estudiante`),
  CONSTRAINT `excusas_ibfk_4` FOREIGN KEY (`id_secretaria`) REFERENCES `secretarias` (`id_secretaria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `excusas`
--

LOCK TABLES `excusas` WRITE;
/*!40000 ALTER TABLE `excusas` DISABLE KEYS */;
/*!40000 ALTER TABLE `excusas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grupos`
--

DROP TABLE IF EXISTS `grupos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grupos` (
  `id_grupo` int NOT NULL AUTO_INCREMENT,
  `nombre_grupo` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`id_grupo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grupos`
--

LOCK TABLES `grupos` WRITE;
/*!40000 ALTER TABLE `grupos` DISABLE KEYS */;
/*!40000 ALTER TABLE `grupos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materias`
--

DROP TABLE IF EXISTS `materias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materias` (
  `id_materia` int NOT NULL AUTO_INCREMENT,
  `nombre_materia` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id_materia`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materias`
--

LOCK TABLES `materias` WRITE;
/*!40000 ALTER TABLE `materias` DISABLE KEYS */;
INSERT INTO `materias` VALUES (1,'Matematicas');
/*!40000 ALTER TABLE `materias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profesor_materia`
--

DROP TABLE IF EXISTS `profesor_materia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profesor_materia` (
  `id_profesor` int NOT NULL,
  `id_materia` int NOT NULL,
  PRIMARY KEY (`id_profesor`,`id_materia`),
  KEY `id_materia` (`id_materia`),
  CONSTRAINT `profesor_materia_ibfk_1` FOREIGN KEY (`id_profesor`) REFERENCES `profesores` (`id_profesor`),
  CONSTRAINT `profesor_materia_ibfk_2` FOREIGN KEY (`id_materia`) REFERENCES `materias` (`id_materia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesor_materia`
--

LOCK TABLES `profesor_materia` WRITE;
/*!40000 ALTER TABLE `profesor_materia` DISABLE KEYS */;
/*!40000 ALTER TABLE `profesor_materia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profesores`
--

DROP TABLE IF EXISTS `profesores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profesores` (
  `id_profesor` int NOT NULL AUTO_INCREMENT,
  `nombre_profesor` varchar(30) DEFAULT NULL,
  `apellido_profesor` varchar(30) DEFAULT NULL,
  `correo_profesor` varchar(60) DEFAULT NULL,
  `contraseña_profesor` varchar(60) DEFAULT NULL,
  `telefono_profesor` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id_profesor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesores`
--

LOCK TABLES `profesores` WRITE;
/*!40000 ALTER TABLE `profesores` DISABLE KEYS */;
/*!40000 ALTER TABLE `profesores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `secretarias`
--

DROP TABLE IF EXISTS `secretarias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `secretarias` (
  `id_secretaria` int NOT NULL AUTO_INCREMENT,
  `nombre_secretaria` varchar(30) DEFAULT NULL,
  `apellido_secretaria` varchar(30) DEFAULT NULL,
  `correo_secretaria` varchar(60) DEFAULT NULL,
  `contraseña_secretaria` varchar(60) DEFAULT NULL,
  `telefono_secretaria` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id_secretaria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `secretarias`
--

LOCK TABLES `secretarias` WRITE;
/*!40000 ALTER TABLE `secretarias` DISABLE KEYS */;
/*!40000 ALTER TABLE `secretarias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tutores_legales`
--

DROP TABLE IF EXISTS `tutores_legales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tutores_legales` (
  `id_tutorlegal` int NOT NULL AUTO_INCREMENT,
  `nombre_tutorlegal` varchar(30) DEFAULT NULL,
  `apellido_tutorlegal` varchar(30) DEFAULT NULL,
  `correo_tutorlegal` varchar(60) DEFAULT NULL,
  `contraseña_tutorlegal` varchar(60) DEFAULT NULL,
  `telefono_tutorlegal` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id_tutorlegal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tutores_legales`
--

LOCK TABLES `tutores_legales` WRITE;
/*!40000 ALTER TABLE `tutores_legales` DISABLE KEYS */;
/*!40000 ALTER TABLE `tutores_legales` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-03 16:49:35
