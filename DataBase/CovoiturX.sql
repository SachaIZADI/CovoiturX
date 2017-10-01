-- phpMyAdmin SQL Dump
-- version 4.0.10.7
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Lun 31 Octobre 2016 à 09:10
-- Version du serveur: 5.0.95
-- Version de PHP: 5.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `CovoiturX`
--

-- --------------------------------------------------------

--
-- Structure de la table `covoiturage`
--

CREATE TABLE IF NOT EXISTS `covoiturage` (
  `id_covoit` int(11) NOT NULL auto_increment,
  `date` date NOT NULL,
  `heure` time NOT NULL,
  `lieu_depart` varchar(64) NOT NULL,
  `lieu_arrivee` varchar(64) NOT NULL,
  `statut` varchar(1) NOT NULL,
  `nb_places` int(11) NOT NULL default '4',
  `id_conducteur` int(11) NOT NULL,
  `commentaire` varchar(500) NOT NULL,
  `id_membre1` int(11) NOT NULL,
  `id_membre2` int(11) NOT NULL,
  `id_membre3` int(11) NOT NULL,
  `id_membre4` int(11) NOT NULL,
  `id_membre5` int(11) NOT NULL,
  `id_membre6` int(11) NOT NULL,
  PRIMARY KEY  (`id_covoit`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=22 ;

--
-- Contenu de la table `covoiturage`
--

INSERT INTO `covoiturage` (`id_covoit`, `date`, `heure`, `lieu_depart`, `lieu_arrivee`, `statut`, `nb_places`, `id_conducteur`, `commentaire`, `id_membre1`, `id_membre2`, `id_membre3`, `id_membre4`, `id_membre5`, `id_membre6`) VALUES
(1, '2016-10-31', '17:00:00', 'Polytechnique', 'Paris 7', 'C', 3, 1, 'PALC à la clé', 2, 3, 4, 0, 0, 0),
(2, '2016-11-01', '10:30:00', 'Paris', 'X', 'C', 5, 5, 'RAS', 4, 3, 1, 0, 0, 0),
(10, '2016-11-20', '19:00:00', 'Massy-Palaiseau (RER)', 'Cour Vaneau', 'D', 4, 0, '', 3, 0, 0, 0, 0, 0),
(4, '2016-11-03', '13:30:00', 'Lozere', 'Polytechnique', 'C', 4, 2, '', 1, 5, 0, 0, 0, 0),
(6, '2016-11-06', '20:45:00', 'Here', 'There', 'D', 4, 0, '', 2, 1, 0, 0, 0, 0),
(17, '2016-11-12', '00:00:00', 'Meudon', 'Polytechnique', 'C', 6, 5, '', 4, 3, 2, 1, 0, 0),
(16, '2016-11-09', '12:00:00', 'Ici', 'La', 'D', 5, 1, '', 2, 0, 0, 0, 0, 0),
(18, '0000-00-00', '00:00:00', 'now', 'de', 'C', 5, 1, '', 0, 0, 0, 0, 0, 0),
(20, '2016-10-31', '08:31:00', 'Avenue Chasles, 91120 Palaiseau, France', 'Avenue Chasles, 91120 Palaiseau, France', 'D', 4, 0, '', 1, 0, 0, 0, 0, 0),
(21, '0000-00-00', '08:08:00', 'Avenue Chasles, 91120 Palaiseau, France', 'Avenue Chasles, 91120 Palaiseau, France', 'C', 6, 1, 'PALC attendue', 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `membres`
--

CREATE TABLE IF NOT EXISTS `membres` (
  `id_membre` int(11) NOT NULL auto_increment,
  `password` varchar(256) NOT NULL,
  `photo` varchar(256) NOT NULL default 'http://temporal.polytechnique.fr/~sacha.izadi/CovoiturX/mondossierupload/test2.jpg',
  `nom` varchar(20) NOT NULL,
  `prenom` varchar(20) NOT NULL,
  `num_tel` varchar(10) NOT NULL,
  `promo` varchar(16) NOT NULL,
  `section` varchar(32) NOT NULL,
  `login` varchar(256) NOT NULL,
  PRIMARY KEY  (`id_membre`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Contenu de la table `membres`
--

INSERT INTO `membres` (`id_membre`, `password`, `photo`, `nom`, `prenom`, `num_tel`, `promo`, `section`, `login`) VALUES
(1, 'cd7f6d727b4f9ea465d517ca229e5798a21327b2', 'http://temporal.polytechnique.fr/~sacha.izadi/CovoiturX/mondossierupload/sacha.jpg', 'IZADI', 'Sacha', '0608067685', 'X15', 'Boxe', 'sacha.izadi'),
(2, '10ded5f1df4b1a31f8b2a7f312c96ba9e9180b39', 'http://temporal.polytechnique.fr/~sacha.izadi/CovoiturX/mondossierupload/elior.jpg', 'ILLOUZ', 'Elior', '0674639920', 'X15', 'Volley', 'elior.illouz'),
(3, '368f976940775c710aec525fe1e349f8a1fb9a39', 'http://temporal.polytechnique.fr/~sacha.izadi/CovoiturX/mondossierupload/spiderman.jpg', 'Man', 'Spider', '0601010101', 'X16', 'Foot', 'spider.man'),
(4, '5c6d9edc3a951cda763f650235cfc41a3fc23fe8', 'http://temporal.polytechnique.fr/~sacha.izadi/CovoiturX/mondossierupload/batman.jpg', 'Man', 'Bat', '0602020202', 'X14', 'Rugby', 'bat.man'),
(5, '18c28604dd31094a8d69dae60f1bcd347f1afc5a', 'http://temporal.polytechnique.fr/~sacha.izadi/CovoiturX/mondossierupload/superman.jpg', 'Man', 'Super', '0603030303', 'X13', 'Natation', 'super.man');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
