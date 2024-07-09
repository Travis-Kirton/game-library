CREATE TABLE game (
    id int not null auto_increment,
    title varchar(255),
    platform varchar(64),
    genre varchar(64),
    release_date DATE,
    num_players int,
    publisher varchar(255),
    description MEDIUMTEXT,
    image_url varchar(255),
    PRIMARY KEY (id)
);

INSERT into game (
    title,
    platform,
    genre,
    release_date,
    num_players,
    publisher,
    description,
    image_url
) values
('Grand Theft Auto 5', 'PS4/PS5', 'action-adventure', '2013-09-17', 1, 'Rockstar', 'Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008s Grand Theft Auto IV, and the fifteenth instalment overall', 'https://collider.com/wp-content/uploads/grand-theft-auto-5-box-art.jpg'),
('Horizon Forbidden West', 'PS4/PS5', 'action rpg', '2022-02-18', 1, 'Sony', 'Horizon Forbidden West is a 2022 action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The sequel to Horizon Zero Dawn (2017), the game is set in a post-apocalyptic version of the Western United States, recovering from the aftermath of an extinction event caused by a rogue robot swarm. The player, assuming control of Aloy, must venture into the Forbidden West to find the source of a mysterious plague that kills all it infects', 'https://d2lzb5v10mb0lj.cloudfront.net/darkhorse/blog/-2022/horizonforbiddenwestcover.jpg'),
('Spiderman 2', 'PS4/PS5', 'action-adventure', '2023-10-20', 1, 'Sony', 'Marvels Spider-Man 2 is a 2023 action-adventure game developed by Insomniac Games and published by Sony Interactive Entertainment. It is based on the Marvel Comics character Spider-Man, and features a narrative inspired by its long-running comic book mythology which is also derived from various adaptations in other media', 'https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg'),
('God Of War Ragnarok', 'PS4/PS5', 'action-adventure', '2023-10-20', 1, 'Sony', 'God of War Ragnarök is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment. It was released worldwide on November 9, 2022, for both the PlayStation 4 and PlayStation 5, marking the first cross-gen release in the God of War series', 'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png'),
('Hell Divers 2', 'PS5', 'coop fps', '2024-02-28', 4, 'Sony', 'Helldivers 2 is a 2024 cooperative third-person shooter game developed by Arrowhead Game Studios and published by Sony Interactive Entertainment. The game is the direct sequel to Helldivers, a 2015 top-down shooter. It was released for PlayStation 5 and Windows on 8 February 2024', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTALnZjPAgrD8oDGT3JdrHdB_-UKDzwuLbyLA&s'),
('Diablo IV', 'PS4/PS5', 'coop fps', '2023-06-05', 4, 'Blizzard Entertainment', 'Diablo IV is a 2023 online-only action role-playing dungeon crawling game developed and published by Blizzard Entertainment. It is the fourth main installment in the Diablo series. Announced at BlizzCon 2019, the game was released on June 5, 2023 for the PlayStation 4 and PlayStation 5, Xbox One and Xbox Series X and S, and Microsoft Windows', 'https://assetsio.gnwcdn.com/co69sm.png?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp'),
('Gran Turismo 7', 'PS4/PS5', 'racing', '2022-03-04', 4, 'Sony', 'Gran Turismo 7 is a 2022 racing simulation video game developed by Polyphony Digital and published by Sony Interactive Entertainment. The game is the eighth main installment and the thirteenth overall in the Gran Turismo series.[2] It was released for the PlayStation 4 and PlayStation 5. Gran Turismo 7 also features virtual reality support compatible with PlayStation VR2 through a free in-game update.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyb9t3NSIB6POkrYYubBKIYf75dKw8wGpKww&s'),
('Resident Evil Village', 'PS4/PS5', 'horror-survival', '2021-05-07', 1, 'Capcom', 'Resident Evil Village[a] is a 2021 survival horror game developed and published by Capcom. It is the sequel to Resident Evil 7: Biohazard (2017) and the tenth main game of the Resident Evil series. Players control Ethan Winters, who searches for his kidnapped daughter in a village filled with mutant creatures. Village maintains survival horror elements from previous games, with players scavenging environments for items and managing resources while adding more action-oriented gameplay, with higher enemy counts and a greater emphasis on combat.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24xOTQFiUOkj-WZmACwXu22gmsfI6ruz5lPUmIm48-ggNNXsxdp3EO83ymmel4O3qD9o&usqp=CAU');
