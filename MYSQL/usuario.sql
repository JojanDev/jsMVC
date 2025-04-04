# Creación del usuario
create user 'johan_delgado_adso2894667'@'localhost' identified by 'wasm123456';

# Creación de la base de datos
create database node_adso2894667;

grant all on node_adso2894667.* to johan_delgado_adso2894667@localhost;

flush privileges;



