CREATE TABLE IF NOT EXISTS to_do(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  status VARCHAR(255) NOT NULL,
  description VARCHAR(500)
);