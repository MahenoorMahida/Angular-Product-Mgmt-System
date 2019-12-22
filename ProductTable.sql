create table Product (
ProductID int Primary Key Not null,
ProductName varchar(20) not null,
ProductCategory varchar(20) not null,
ProductPrice numeric not null)

insert into Product values(3,'IceCreme','Food',50)

select * from Product