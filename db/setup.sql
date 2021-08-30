DROP DATABASE IF EXISTS mishnayos_db;
CREATE DATABASE mishnayos_db;

\c mishnayos_db;


CREATE TABLE sedarim_table
(
  seder_name VARCHAR,
  seder_name_he VARCHAR,
  number_of_masechtos INT,
  number_of_perakim INT,
  number_of_misnayos INT,
  PRIMARY KEY (seder_name)
);

INSERT INTO sedarim_table
  (seder_name,seder_name_he)
VALUES
  ('Zeraim', 'זרעים'),
  ('Moed', 'מועד'),
  ('Nashim', 'נשים'),
  ('Nezikin', 'נזיקין'),
  ('Kodshim', 'קדשים'),
  ('Taharos', 'טהרות');

CREATE TABLE masechta_table
(
  masechta_id INT,
  masechta_name VARCHAR UNIQUE,
  masechta_name_he VARCHAR,
  seder_name VARCHAR,
  number_of_perakim INT,
  number_of_misnayos INT,
  summary VARCHAR,
  PRIMARY KEY (masechta_id),
  FOREIGN KEY(seder_name) REFERENCES sedarim_table(seder_name)
);


CREATE TABLE mishna_table
(
  mishna_id SERIAL PRIMARY KEY,
  perek_number INT,
  mishna_number INT,
  masechta_id INT,
  mishna_text_he VARCHAR,
  mishna_text_eng VARCHAR,
  masechta_name VARCHAR,
 FOREIGN KEY(masechta_id) REFERENCES masechta_table(masechta_id)
);


CREATE TABLE shiurim_table
(
  shiur_id SERIAL PRIMARY KEY,
  start_mishna INT,
  end_mishna INT,
  number_of_mishnayos INT,
  shiur_title VARCHAR,
  shiur_title_he VARCHAR,
  shiur_text VARCHAR,
   shiur_audio VARCHAR,
  FOREIGN KEY(start_mishna) REFERENCES mishna_table(mishna_id),
  FOREIGN KEY(end_mishna) REFERENCES mishna_table(mishna_id)

);

CREATE TABLE siyum_makers
(
  admin_id SERIAL PRIMARY KEY,
  admin_email VARCHAR NOT NULL,
  admin_fname VARCHAR NOT NULL,
  admin_sname VARCHAR NOT NULL,
  siyum_name VARCHAR NOT NULL,
  siyum_type VARCHAR DEFAULT 'Shloshim',
  date_made VARCHAR,
  finish_date VARCHAR NOT NULL,
  msg VARCHAR,
  isopen VARCHAR  DEFAULT 'true',
  heb_date VARCHAR
); 