-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 29 Mar 2020 pada 05.45
-- Versi Server: 10.1.13-MariaDB
-- PHP Version: 7.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `perpus`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `User`
--

CREATE TABLE `User` (
  `kd_User` int(10) NOT NULL,
  `nm_User` varchar(30) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(128) NOT NULL,
  `alamat` varchar(30) NOT NULL,
  `tlpn` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `User`
--

INSERT INTO `User` (`kd_User`, `nm_User`, `email`, `password`, `alamat`, `tlpn`) VALUES
(1, 'Hilmi A', 'helmyarkan@gmail.com', '$2b$10$qpgyF7M8DaCkTJiSlbPq7f4T0jpkp3de4nYXDXHqK2hX2KFdT/Hysn.', 'Blora', 08123456789);

-- --------------------------------------------------------

--
-- Struktur dari tabel `Books`
--

CREATE TABLE `Books` (
  `kd_Books` int(10) NOT NULL,
  `nm_Books` varchar(30) NOT NULL,
  `stok` int(20) NOT NULL,
  `pengarang` varchar(30) NOT NULL,
  `penerbit` varchar(30) NOT NULL,
  `tarif` int(10) NOT NULL,
  `durasi` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `Books`
--

INSERT INTO `Books` (`kd_Books`, `nm_Books`, `stok`, `pengarang`, `penerbit`, `tarif`, `durasi`) VALUES
(1, 'Interstellar', 20, 'Christopher Nolan', 'Gramedia Pustaka', 160000, '7');

-- --------------------------------------------------------

--
-- Struktur dari tabel `peminjam`
--

CREATE TABLE `peminjam` (
  `no_pinjam` int(10) NOT NULL,
  `kd_Books` int(10) NOT NULL,
  `kd_User` int(10) NOT NULL,
  `kd_petugas` int(10) NOT NULL,
  `tgl_pinjam` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `peminjam`
--

INSERT INTO `peminjam` (`no_pinjam`, `kd_Books`, `kd_User`, `kd_petugas`, `tgl_pinjam`) VALUES
(6, 1, 1, 1, '10/12/2002');

-- --------------------------------------------------------

--
-- Struktur dari tabel `petugas`
--

CREATE TABLE `petugas` (
  `kd_petugas` int(10) NOT NULL,
  `nm_petugas` varchar(30) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(128) NOT NULL,
  `jabatan` varchar(30) NOT NULL,
  `tlpn_petugas` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `petugas`
--

INSERT INTO `petugas` (`kd_petugas`, `nm_petugas`, `email`, `password`, `jabatan`, `tlpn_petugas`) VALUES
(1, 'Hilmi A', 'helmyarkan@gmail.com', '$2b$10$UgMi.PIqb7tTg/ByiNJBsghAfGdtcOEN5YjuI2cumWb8t1ldHCZmYMcFHr3nW', 'sekretaris', 08123456789);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`kd_User`);

--
-- Indexes for table `Books`
--
ALTER TABLE `Books`
  ADD PRIMARY KEY (`kd_Books`);

--
-- Indexes for table `peminjam`
--
ALTER TABLE `peminjam`
  ADD PRIMARY KEY (`no_pinjam`);

--
-- Indexes for table `petugas`
--
ALTER TABLE `petugas`
  ADD PRIMARY KEY (`kd_petugas`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
  MODIFY `kd_User` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `Books`
--
ALTER TABLE `Books`
  MODIFY `kd_Books` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `peminjam`
--
ALTER TABLE `peminjam`
  MODIFY `no_pinjam` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `petugas`
--
ALTER TABLE `petugas`
  MODIFY `kd_petugas` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
