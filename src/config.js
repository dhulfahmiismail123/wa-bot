import 'dotenv/config';

export default {
    db_path: process.env.DB_PATH || './whatsapp.db',
    path_server: process.env.PATH_SERVER || 'public',
    port_server: process.env.PORT_SERVER || 3000
}