--
-- PostgreSQL database dump
--

-- Dumped from database version 11.1
-- Dumped by pg_dump version 11.1

-- Started on 2018-11-15 17:21:02 CET

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 196 (class 1259 OID 16395)
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
-- TOC entry 3122 (class 0 OID 16395)
-- Dependencies: 196
-- Data for Name: objets; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.objets (id, nom, latitude, longitude, zoom, icone, texte) VALUES (0, 'coffre', 16.2542438, -61.5709074, 15, 'coffre.png', 'Bravo, mais il te manque une clé pour ouvrir ce coffre !');
INSERT INTO public.objets (id, nom, latitude, longitude, zoom, icone, texte) VALUES (1, 'clé', 15.9268611, -61.6533417, 17, 'clé.png', 'Bravo, tu as trouvé la clé ! Utilise là pour ouvrir le coffre');


--
-- TOC entry 3000 (class 2606 OID 16399)
-- Name: objets objets_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.objets
    ADD CONSTRAINT objets_pkey PRIMARY KEY (id);


-- Completed on 2018-11-15 17:21:03 CET

--
-- PostgreSQL database dump complete
--

