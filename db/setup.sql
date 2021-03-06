DROP DATABASE IF EXISTS golden_shoe;

CREATE DATABASE golden_shoe;

\c golden_shoe;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    second_name VARCHAR(50) NOT NULL
);

CREATE TABLE productcategories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL
);

CREATE TABLE shoetypes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    category_id INT REFERENCES productcategories(id) NOT NULL,
    shoetype_id INT REFERENCES shoetypes(id) NOT NULL,
    product_name VARCHAR(250) NOT NULL,
    short_desc VARCHAR(250) NOT NULL,
    full_desc TEXT NOT NULL,
    price_pence INT NOT NULL,
    stock INT NOT NULL,
    in_carts INT NOT NULL DEFAULT 0,
    size INT NOT NULL
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) NOT NULL,
    total_price_pence INT NOT NULL,
    expected_delivery_date DATE,
    confirmed_delivery_date DATE
);

CREATE TABLE orderitems (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id) NOT NULL,
    product_id INT REFERENCES products(id) NOT NULL
);