DROP DATABASE IF EXISTS mishnayos_db;
CREATE DATABASE mishnayos_db;

\c mishnayos_db;


CREATE TABLE sedarim_table
(
  seder_id SERIAL PRIMARY KEY,
  seder_name VARCHAR,
  seder_name_he VARCHAR,
  masechta_number INT,
  perakim_number INT,
  mishnayos_number INT
);

INSERT INTO sedarim_table
  (seder_name,seder_name_he)
VALUES
  ('Zeraim', 'זרעים'),
  ('Moed', 'מועד'),
  ('Nashim', 'נשים'),
  ('Nezikin', 'נזיקין'),
  ('Zevachim', 'זבחים'),
  ('Taharos', 'טהרות');

CREATE TABLE masechta_table
(
  masechta_id SERIAL PRIMARY KEY,
  masechta_name VARCHAR,
  masechta_name_he VARCHAR,
  seder_id INT,
  perakim_number INT,
  mishnayos_number INT,
  FOREIGN KEY(seder_id) REFERENCES sedarim_table(seder_id)
);


CREATE TABLE mishna_table
(
  mishna_id SERIAL PRIMARY KEY,
  perek_number INT,
  mishna_number INT,
  masechta_id INT,
  mishna_text_he VARCHAR,
  mishna_text_eng VARCHAR,
 FOREIGN KEY(masechta_id) REFERENCES masechta_table(masechta_id)
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