const { Pool } = require('pg');

class PlaylistsService {
    constructor() {
        this._pool = new Pool();
    }

    async getPlaylist(playlistId) {
        const queryPlaylist = {
            text: 'SELECT id, name FROM playlists WHERE id = $1',
            values: [playlistId],
        };
        const resultPlaylist = await this._pool.query(queryPlaylist);
        return resultPlaylist.rows[0];
    }

    async getSongs(playlistId) {
        const querySongs = {
            text: `SELECT songs.id, songs.title, songs.performer
            FROM songs
            JOIN playlist_songs ON songs.id = playlist_songs.song_id
            WHERE playlist_songs.playlist_id = $1`,
            values: [playlistId],
        };
        const resultSongs = await this._pool.query(querySongs);
        return resultSongs.rows;
    }
}

module.exports = PlaylistsService;