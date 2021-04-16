drop table if exists userscredentials, posts, projects;

create table userscredentials(
	id INT NOT NULL auto_increment,
    username varchar(32) UNIQUE,
    password varchar(256),
    primary key(id)
);

create table posts (
	id INT NOT NULL auto_increment,
    title varchar(128),
    text_content varchar(1024),
    project_ref_id int,
    project_ref_name varchar(32),
    media_ref varchar(256),
    likes int default 0,
    shares int default 0,
    views int default 0,
    insert_date timestamp default current_timestamp,
    primary key(id)
);

create table projects (
	id INT NOT NULL auto_increment,
    project_name varchar(128),
    discription varchar(1024),
    media_ref varchar(256),
    git_repo varchar(256),
    demo_link varchar(256),
    contributors varchar(1024),
    technologies varchar(1024),
	insert_date timestamp default current_timestamp,
    primary key(id)
);