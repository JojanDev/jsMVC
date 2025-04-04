show databases;

use node_adso2894667;


drop table if exists productos;
drop table if exists categorias;

create table categorias(
id int auto_increment primary key,	
nombre varchar(255) not null,
descripcion text,
created_at timestamp default current_timestamp,
updated_at timestamp default current_timestamp on update current_timestamp
);

create table productos(
id int auto_increment primary key,
nombre varchar(255) not null,
descripcion text,
precio decimal (10,2),
categoria_id int,
created_at timestamp default current_timestamp,
updated_at timestamp default current_timestamp on update current_timestamp,
foreign key (categoria_id) references categorias(id) on delete set null
);

insert into categorias (nombre, descripcion) values
("Electronica", "Para productos electrónicos"),
("Ropa", "Para prendas de vestir"),
("Alimentos", "Para productos alimenticios");

INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES
("Smartphone Samsung", "Teléfono inteligente con pantalla AMOLED y 128GB de almacenamiento", 1800000, 1),
("Jeans de mezclilla", "Pantalón de mezclilla azul, ajuste slim fit", 120000, 2),
("Botella de miel", "Miel orgánica de abejas 100% pura, frasco de 500ml", 25000, 3);


select * from categorias;
select * from productos;
show tables;