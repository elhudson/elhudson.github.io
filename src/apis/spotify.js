import SpotifyWebApi from "spotify-web-api-node";
import _ from "lodash";
import "iconify-icon";
import { spotify as keys } from "../../env.json";

var spotifyApi = new SpotifyWebApi({
  clientId: keys.id,
  clientSecret: keys.secret
});

spotifyApi.setAccessToken(keys.access);
spotifyApi.setRefreshToken(keys.refresh);

function handleRefresh() {
  const url = "https://accounts.spotify.com/api/token";
  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(keys.id + ":" + keys.secret)
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: keys.refresh,
      client_id: keys.id
    })
  };
  return fetch(url, payload)
    .then((b) => b.json())
    .then((bo) => {
      spotifyApi.setAccessToken(bo["access_token"]);
    });
}

export async function getSongs() {
  return await spotifyApi
    .getMyTopTracks()
    .catch((err) => handleRefresh().then((r) => spotifyApi.getMyTopTracks()))
    .then((j) => j.body.items);
}

export async function getPods() {
  return await fetch("https://api.spotify.com/v1/me/shows", {
    headers: {
      Authorization: "Bearer " + spotifyApi.getAccessToken()
    }
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject();
      } else {
        return res;
      }
    })
    .catch((err) =>
      handleRefresh().then((r) =>
        fetch("https://api.spotify.com/v1/me/shows", {
          headers: {
            Authorization: "Bearer " + spotifyApi.getAccessToken()
          }
        })
      )
    )
    .then((res) => res.json())
    .then((res) => res.items);
}
