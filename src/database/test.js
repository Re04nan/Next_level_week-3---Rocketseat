const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

Database.then(async db => {
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6555874",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vunerabilidade social.",
        whatsapp: "989855578787",
        images: [
            "https://images.unsplash.com/photo-1567791124560-c60b7d227623?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1597095556745-7bcd893840ac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha quando se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    });
    // await db.run(`
    //     INSERT INTO orphanages (
    //         lat,
    //         lng,
    //         name,
    //         about,
    //         whatsapp,
    //         images,
    //         instructions,
    //         opening_hours,
    //         open_on_weekends
    //     ) VALUES (
    //         "-27.222633",
    //         "-49.6555874",
    //         "Lar dos meninos",
    //         "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vunerabilidade social.",
    //         "989809876567",
    //         "https://images.unsplash.com/photo-1567791124560-c60b7d227623?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "Venha quando se sentir a vontade e traga muito amor e paciência para dar.",
    //         "Horário de visitas Das 18h até 8h",
    //         "0"
    //     );
    // `);
    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);
    // consutar somente 1 orfanato pelo id
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
    // console.log(orphanage);
    // // deletar dado da tabela
    // console.log(await db.run('DELETE FROM orphanages WHERE id = "4"'));
})