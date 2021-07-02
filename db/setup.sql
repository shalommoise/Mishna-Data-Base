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
  masechta_name VARCHAR,
  masechta_name_he VARCHAR,
  seder_name VARCHAR,
  number_of_perakim INT,
  number_of_misnayos INT,
  PRIMARY KEY (masechta_name),
  FOREIGN KEY(seder_name) REFERENCES sedarim_table(seder_name)
);


CREATE TABLE mishna_table
(
  mishna_id SERIAL PRIMARY KEY,
  perek_number INT,
  mishna_number INT,
  mishna_text_he VARCHAR,
  mishna_text_eng VARCHAR,
 FOREIGN KEY(masechta_name) REFERENCES masechta_table(masechta_name)
);


CREATE TABLE shiurim_table
(
  shiur_id SERIAL PRIMARY KEY,
  start_mishna INT,
  end_mishna INT,
  number_of_mishnayos INT,
  shiur_title VARCHAR,
  shiur_text VARCHAR,
   shiur_audio VARCHAR,
  FOREIGN KEY(start_mishna) REFERENCES mishna_table(mishna_id),
  FOREIGN KEY(end_mishna) REFERENCES mishna_table(mishna_id)

);
