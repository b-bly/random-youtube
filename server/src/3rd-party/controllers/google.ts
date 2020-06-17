const { google } = require('googleapis');

export const getPlaylists = async (oauth2Client: any) => {
  return await new Promise((resolve, reject) => {
    google.youtube({
      version: 'v3',
      auth: oauth2Client
    }).playlists.list({
      part: 'id',
      mine: true,
      headers: {},
      maxResults: 50
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
      headers: {},
      maxResults: 30
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
      if (playlists) {
        let videoArray: any[];
        try {
          videoArray = await Promise.all(playlists.data.items.map( (item: any) =>  getVideosFromPlaylistId(oauth2Client, item.id)));
          videoArray = videoArray.reduce((accumulator, value) => accumulator.concat(value), []);
          const videoArrayRandomSelection = videoArray.length > 50 ? getRandomElementsFromArray(videoArray, 50) : videoArray;
          resolve(videoArrayRandomSelection);
        } catch (err) {
          reject(err);
        }
      }
    } catch (err) {
      reject(err);
    }
  });
}

function getRandomElementsFromArray(array: any[], numberOfSelections: number) {
  array = array.sort(() => Math.random() - 0.5);
  return array.slice(0, numberOfSelections);
}
