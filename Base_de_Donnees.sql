PGDMP     1                
    v            projet    11.1    11.1     6           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            7           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            8           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            9           1262    16384    projet    DATABASE     d   CREATE DATABASE projet WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C' LC_CTYPE = 'C';
    DROP DATABASE projet;
             postgres    false            �            1259    16385    objets    TABLE     �   CREATE TABLE public.objets (
    id integer NOT NULL,
    nom character varying(100),
    latitude double precision,
    longitude double precision,
    zoom integer,
    icone character varying(100)
);
    DROP TABLE public.objets;
       public         postgres    false            3          0    16385    objets 
   TABLE DATA               K   COPY public.objets (id, nom, latitude, longitude, zoom, icone) FROM stdin;
    public       postgres    false    196   ^       �           2606    16389    objets objets_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.objets
    ADD CONSTRAINT objets_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.objets DROP CONSTRAINT objets_pkey;
       public         postgres    false    196            3   ;   x�3�L�OK+J�44��53�445���e�sr&�^	��3II#�X:F��� \��     