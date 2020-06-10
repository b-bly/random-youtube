const { google } = require('googleapis');

export const getPlaylists = async (oauth2Client: any) => {
  return await new Promise((resolve, reject) => {
    google.youtube({
      version: 'v3',
      auth: oauth2Client
    }).playlists.list({
      part: 'snippet',
      mine: true,
      headers: {}
    }, (err: Error, playlists: any, response: any) => {
      if (response) { console.log(response.statusCode) }
      if (err) { reject(err); }
      if (playlists) { resolve(playlists); }
    });
  });
}

export const getVideosFromPlaylistId = async (oauth2Client: any, id: string) => {

  return await new Promise((resolve, reject) => {
    google.youtube({
      version: 'v3',
      auth: oauth2Client
    }).playlistItems.list({
      playlistId: id,
      part: 'snippet',
      mine: true,
      headers: {}
    }, (err: Error, data: any, response: any) => {
      if (response) { console.log(response.statusCode); }
      if (err) { reject(err); }
      if (data) {
        if (data.data && data.data.items) {
          resolve(data.data.items);
        } else resolve([]);
      }
    });
  });
}

export const getVideos = async (oauth2Client: any) => {

  // playlists
  return new Promise(async (resolve, reject) => {
    let playlists: any;
    try {
      playlists = await getPlaylists(oauth2Client);
      // TODO: replace slice with random selection
      if (playlists) {
        let videoArray: any[];
        try {
          const shortPlaylist = playlists.data.items.slice(1);
          videoArray = await Promise.all(shortPlaylist.map(async (item: any) => await getVideosFromPlaylistId(oauth2Client, item.id)));
          videoArray = videoArray.reduce((accumulator, value) => accumulator.concat(value), []);
          resolve(videoArray);
        } catch (err) {
          reject(err);
        }
      }
    } catch (err) {
      reject(err);
    }
  });
}