INSERT INTO Usuarios 
	(Id, DataCriacao, DataAlteracao, Nome, Email, Senha, Tipo) VALUES 
	(NEWID(),GETDATE(), GETDATE(), 'Paulo Brand�o', 'email@email.com', '123456', 'admin');


SELECT * FROM Usuarios
