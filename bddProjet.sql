﻿CREATE TABLE classement (identifiant character varying(100),temps time without time zone);
CREATE TABLE classement (identifiant character varying(100),temps time without time zone);
ALTER TABLE classement OWNER TO postgres;
CREATE TABLE lienobjets (idbloque integer NOT NULL, idbloquant integer NOT NULL, textedebloque character varying(300));
CREATE TABLE codeobjets (idbloque integer NOT NULL, code character varying(16),  textedebloque character varying(300));
ALTER TABLE lienobjets OWNER TO postgres;
CREATE TABLE objets (id integer NOT NULL, nom character varying(100), latitude double precision, longitude double precision, zoom integer, icone character varying(100), texte character varying(300));
ALTER TABLE objets OWNER TO postgres;
INSERT INTO classement (identifiant, temps) VALUES ('michel23', '00:10:45');
INSERT INTO classement (identifiant, temps) VALUES ('robert64', '00:12:18');
INSERT INTO classement (identifiant, temps) VALUES ('jean-mich58', '00:13:02');
INSERT INTO classement (identifiant, temps) VALUES ('leopold03', '00:14:59');
INSERT INTO lienobjets (idbloque, idbloquant, textedebloque) VALUES (0, 1, 'Merci d''avoir retrouver ma valise. Voici une partie du code. Le scientifique de Port-Louis te donnera sûrement l''autre partie.');
INSERT INTO lienobjets (idbloque, idbloquant, textedebloque) VALUES (2, 3, 'Je te remercie de m''avoir apporter cette roche volcanique. Voici la dernière partie du code. Je suis que ce code te sera très utile lorsque tu voudras ouvrir le coffre contenant l''antidote. J''ai enterré ce coffre près du terrain de sport du Lycée Charles Coëffin.');
INSERT INTO lienobjets (idbloque, idbloquant, textedebloque) VALUES (4, 5, 'Ce coffre ne contient pas l''antidote, mais une carte. Sûrement un dernier indice pour trouver l''antidote !');
INSERT INTO codeobjets (idbloque, code, textedebloque) VALUES (5, '0000', 'Bravo ! Tu as débloqué la clé.');
INSERT INTO objets (id, nom, latitude, longitude, zoom, icone, texte) VALUES (0, 'touriste', 16.0156206, -61.7127824, 1, 'touriste.png', 'Il faut absolument de dépècher, la situation est critique ! Pour trouver l''antidote, tu vas avoir besoin d''un code. J''ai une partie de ce code dans ma valise, mais je crois que je l''ai oublié à l''aéoroport. Retrouve la et ramène la moi pour que je puisse t''aider.');
INSERT INTO objets (id, nom, latitude, longitude, zoom, icone, texte) VALUES (1, 'valise', 16.2688475, -61.5276478, 17, 'valise.png', 'Bravo ! C''est bien la valise que l''on cherchait. Dépèche toi de l''apporter à son propriétaire !');
INSERT INTO objets (id, nom, latitude, longitude, zoom, icone, texte) VALUES (2, 'scientifique', 16.4183556, -61.5307005, 15, 'scientifique.png', 'Je voie que vous avez déjà une partie du code. Très bien ! Je vous donnerai l''autre partie si vous m''aidez à trouver une roche volcanique pour finaliser le remède. Vous en trouverez sûrement près du volcan de la Souffrière.');
INSERT INTO objets (id, nom, latitude, longitude, zoom, icone, texte) VALUES (3, 'roche', 16.2458841, -61.1760043, 17, 'roche.png', 'Voilà une roche volcanique ! Il n''y a plus qu''à la rapporter au scientifique.');
INSERT INTO objets (id, nom, latitude, longitude, zoom, icone, texte) VALUES (4, 'coffre', 16.2668644, -61.5815298, 17, 'coffre.png', 'Vous avez enfin trouvé le coffre ! Mais un message inscrit sur le coffre dit "Ce coffre est verrouillé par une clé. Vous retrouverez celle-ci au port de Trois Rivières, mais ne vous laissera la prendre que si vous connaissez la bonne combinaison."');
INSERT INTO objets (id, nom, latitude, longitude, zoom, icone, texte) VALUES (5, 'clé', 15.968188, -61.6440768, 17, 'clé.png', 'Voici la clé ! Il ne reste plus qu''à donner le bon code.');
INSERT INTO objets (id, nom, latitude, longitude, zoom, icone, texte) VALUES (6, 'antidote', 16.2461143, -61.1724471, 17, 'antidote.png', 'Voilà enfin l''antidote ! Bravo !');

