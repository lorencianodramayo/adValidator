-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 30, 2020 at 02:31 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `adValidator`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblZip`
--

CREATE TABLE `tblZip` (
  `zID` int(11) NOT NULL,
  `zipPath` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tblZip`
--

INSERT INTO `tblZip` (`zID`, `zipPath`) VALUES
(403, 'bbf94b34eb32268ada57a3be5062fe7d'),
(404, '4f4adcbf8c6f66dcfc8a3282ac2bf10a'),
(405, 'bbcbff5c1f1ded46c25d28119a85c6c2'),
(406, '8cb22bdd0b7ba1ab13d742e22eed8da2'),
(407, 'f4f6dce2f3a0f9dada0c2b5b66452017'),
(408, '0d0fd7c6e093f7b804fa0150b875b868'),
(409, 'a96b65a721e561e1e3de768ac819ffbb');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblZip`
--
ALTER TABLE `tblZip`
  ADD PRIMARY KEY (`zID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblZip`
--
ALTER TABLE `tblZip`
  MODIFY `zID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=410;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
