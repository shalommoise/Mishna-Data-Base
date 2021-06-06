DROP DATABASE IF EXISTS Mishnayos;


CREATE DATABASE Mishnayos;

/c Mishnayos;
CREATE TABLE Sedarim
(
  seder_id SERIAL
    PRIMARY KEY,
  seder_name VARCHAR,
  seder_name_he VARCHAR,
  masechta_number NUMERIC,
  perakim_number NUMERIC,
  mishnayos_number NUMERIC,
);

INSERT INTO Sedarim
  (seder_name,seder_name_he)
VALUES
  ('Zeraim', 'זרעים'),
  ('Moed', 'מועד'),
  ('Nashim', 'נשים'),
  ('Nezikin', 'נזיקין'),
  ('Zevachim', 'זבחים'),
  ('Taharos', 'טהרות')