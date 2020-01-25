create database GestionCongees
use GestionCongees

create table Emploiyes(ID_Emploiye int primary key,nom varchar(30),
prenom varchar(30),
poste varchar(30),
username varchar(30),
passworld varchar (30),
tel varchar(20))

create table Admines(ID_Admine int primary key,
nom varchar(30),
premon varchar(30),
email varchar(30),
username varchar(30),
passworld varchar(30))

create table congees(ID_Conger int primary key,
DateDEbut date,
DateFin date,
statut varchar(30),
justification  varchar(360),
ID_Eploye int foreign key references Emploiyes(ID_Emploiye),
ID_Admine int foreign key references Admines(ID_Admine))

select* 
from Admines

select*
from Emploiyes