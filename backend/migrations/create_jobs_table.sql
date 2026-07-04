CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    company VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    status VARCHAR(20) NOT FULL,
    applied_date DATE,
    notes TEXT, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);