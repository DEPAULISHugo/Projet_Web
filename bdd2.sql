--
-- PostgreSQL database dump
--

-- Dumped from database version 11.1
-- Dumped by pg_dump version 11.1

-- Started on 2018-11-29 13:11:20 CET

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 16384)
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- TOC entry 3140 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 199 (class 1259 OID 16401)
-- Name: classement; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.classement (
    identifiant character varying(100),
    temps time without time zone
);


ALTER TABLE public.classement OWNER TO postgres;

--
-- TOC entry 198 (class 1259 OID 16396)
-- Name: lienobjets; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lienobjets (
    idbloque integer NOT NULL,
    idbloquant integer NOT NULL,
    textedebloque character varying(250)
);


ALTER TABLE public.lienobjets OWNER TO postgres;

--
-- TOC entry 197 (class 1259 OID 16393)
-- Name: objets; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.objets (
    id integer NOT NULL,
    nom character varying(100),
    latitude double precision,
    longitude double precision,
    zoom integer,
    icone character varying(100),
    texte character varying(250)
);


ALTER TABLE public.objets OWNER TO postgres;

--
-- TOC entry 3134 (class 0 OID 16401)
-- Dependencies: 199
-- Data for Name: classement; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.classement (identifiant, temps) VALUES ('numberone', '00:10:45');
INSERT INTO public.classement (identifiant, temps) VALUES ('numbertwo', '00:12:18');
INSERT INTO public.classement (identifiant, temps) VALUES ('numberthree', '00:13:02');


--
-- TOC entry 3133 (class 0 OID 16396)
-- Dependencies: 198
-- Data for Name: lienobjets; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.lienobjets (idbloque, idbloquant, textedebloque) VALUES (0, 1, 'Bravo ! Tu as ouvert le coffre.');


--
-- TOC entry 3132 (class 0 OID 16393)
-- Dependencies: 197
-- Data for Name: objets; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.objets (id, nom, latitude, longitude, zoom, icone, texte) VALUES (0, 'coffre', 16.2542438000000011, -61.570907400000003, 15, 'coffre.png', 'Bravo, mais il te manque une clé pour ouvrir ce coffre !');
INSERT INTO public.objets (id, nom, latitude, longitude, zoom, icone, texte) VALUES (1, 'clé', 15.9679245000000005, -61.6448145000000025, 17, 'clé.png', 'Bravo, tu as trouvé la clé ! Utilise là pour ouvrir le coffre.');
INSERT INTO public.objets (id, nom, latitude, longitude, zoom, icone, texte) VALUES (3, 'pelle', NULL, NULL, NULL, 'pelle.png', 'Bravo, vous avez trouvez la pelle, elle vous servira à déterrez le coffre.');
INSERT INTO public.objets (id, nom, latitude, longitude, zoom, icone, texte) VALUES (4, 'chercheur', 15.9909770000000009, -61.6816120000000012, 10, 'chercheur.png
', 'Voici la carte qui te mèneras vers le coffre.');


--
-- TOC entry 3010 (class 2606 OID 16400)
-- Name: objets objets_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.objets
    ADD CONSTRAINT objets_pkey PRIMARY KEY (id);


-- Completed on 2018-11-29 13:11:21 CET

--
-- PostgreSQL database dump complete
--

