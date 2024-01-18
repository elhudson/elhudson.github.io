import { default as spotify_api } from "spotify-web-api-node";
import _ from "lodash";
import 'iconify-icon'

var access =
  "BQBnro6hjd7Ewto71BYJfOHDW-FLwaBoy5qVrYNfOAiP1S4iwDusV09M7sijdgOoxqiRczBjafbahULrgXdODPdEU7LRekKGhMGb-dkTr4fHN99W5DdPz4vJu3kirnQjr_Vbdmc8LBAw2nlLCk4xXaXVPQUincyu8KcpOCxxxu2Vqw5w1AlJjAUdgaplK6AJm3iQ67auY6pWwmKREViMR39RVIT37bTaKjp8_azrKd9LrNOacihjh3g6qE0Yv1WSIn8Ir8Uv_W8yj_thOvVYgepXW6yL4vlJM-_XZ2Ld-TeD1sGr8M5dPf9nKHAdHhw";
const refresh =
  "AQCGg2IlbYapysy01UyGCNsDBQv4SAKb7SxI_T73aDQRaKJgeL9TO1xL60wwcuj2ZSG44DM5_-uSF2pFiwfVLg2C8W1jtxc7naw3pr7_kfGEc9GvFyr1CBxDQAstsxxkLvc";

let spotify = new spotify_api();
spotify.setAccessToken(access);

const songs = await spotify.getMyTopTracks().then((d) => d.body.items);

export default () => {
  return (
    <ul>
      {songs.map((s) => (
        <li>
          <div>{s.name}</div>
          <div class="metadata">
            <span>{s.artists.map((a) => a.name).join(" & ")}</span>
            <iconify-icon icon="mingcute:album-line" />
            <span>{s.album.name}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
