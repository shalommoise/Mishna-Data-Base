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
  ('Taharos', 'טהרות')

