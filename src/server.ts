import app from './app';
import { AppDataSource } from './data-source';

AppDataSource.initialize()
    .then(() => {
        app.listen(3000, () =>
            console.log('Server is running http://localhost:3000')
        );
    })
    .catch((err) => console.log(err));

/*
(async () => {
    await AppDataSource.initialize().catch((err) => {
        console.error('Error during Data Source initialization', err);
    });

    app.listen(3000, () => {
        console.log('Servidor executando');
    });
})();
*/
