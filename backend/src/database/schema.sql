
create table users
(
	id_user serial primary key,
	name text not null,
	email text not null,
	able boolean default 'false'
);

create table photo
(
	id_img serial primary key,
	url text not null,
	name varchar(25),
	description varchar(25),
	fecha TIMESTAMP,
	id_user int
)

alter table photo
add constraint fk_img_user
foreign key(id_user)
references users(id_user)

create table comentarios
(
	id_comment serial primary key,
	id_user int,
	id_img int,
	content text not null,
	likes int default 0
);

alter table comentarios
add constraint fk_user_comment
foreign key (id_user)
references users(id_user)

alter table comentarios
add constraint fk_comment_img
foreign key (id_img)
references photos(id_img)

