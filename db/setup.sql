DROP DATABASE IF EXISTS mishnayos_db;
CREATE DATABASE mishnayos_db;

\c mishnayos_db;


CREATE TABLE sedarim_table
(
  seder_id SERIAL PRIMARY KEY,
  seder_name VARCHAR,
  seder_name_he VARCHAR,
  masechta_number NUMERIC,
  perakim_number NUMERIC,
  mishnayos_number NUMERIC
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
  perakim_number NUMERIC,
  mishnayos_number NUMERIC,
  FOREIGN KEY(seder_id) REFERENCES sedarim_table(seder_id)
);


CREATE TABLE mishna_table
(
  mishna_id SERIAL PRIMARY KEY,
  perek_number NUMERIC,
  mishna_number NUMERIC,
  masechta_id INT,
  mishna_text_he VARCHAR,
  mishna_text_eng VARCHAR,
 FOREIGN KEY(masechta_id) REFERENCES masechta_table(masechta_id)
);