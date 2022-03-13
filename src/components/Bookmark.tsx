import { gray0 } from "../common/mixins"
import { Bookmark as BookmarkType } from "../common/types"
import { formatDate, secondsToHHMMSS } from "../common/utils"
import Timer from "./Timer"

interface BookmarkProps {
  bookmark: BookmarkType
  deleteBookmark: (url: string) => void
}

const Bookmark: React.FC<BookmarkProps> = ({ bookmark, deleteBookmark }) => {
  return (
    <div
      style={{
        backgroundColor: gray0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        minHeight: "200px",
        maxWidth: "500px",
        margin: "0 5px 5px 0",
        border: "solid 1px black",
        borderRadius: "10px",
        padding: "5px",
        overflowWrap: "break-word",
      }}
    >
      {bookmark.thumbnail_url ? (
        <img
          style={{
            alignSelf: "center",
            height: "150px",
            maxWidth: "100%",
          }}
          alt={`thumbnail de ${bookmark.title}`}
          src={bookmark.thumbnail_url}
        />
      ) : (
        <p>Pas de thumbnail disponible</p>
      )}
      <p>
        <span>URL: </span>
        <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
          {bookmark.url}
        </a>
      </p>
      <p>
        <span>Titre: </span>
        {bookmark.title}
      </p>
      <p>
        <span>Auteur: </span>
        {bookmark.author_name}
      </p>
      <p>
        Ajoutée il y a{" "}
        <span>
          <Timer />
        </span>
      </p>
      <p>
        {bookmark?.upload_date ? (
          <>
            <span>Date de publication sur {bookmark.provider_name}: </span>
            le {formatDate(bookmark?.upload_date!)}
          </>
        ) : (
          <>Date de publication inconnue</>
        )}
      </p>
      <p>
        {bookmark?.duration ? (
          <>
            <span>Durée: </span>
            {secondsToHHMMSS(bookmark.duration!)}
          </>
        ) : (
          <>
            <span>Largeur * Hauteur: </span>
            {`${bookmark?.width} * ${bookmark?.height}`}
          </>
        )}
      </p>
      <div style={{ alignSelf: "center" }}>
        <button
          onClick={() => deleteBookmark(bookmark.url)}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "5px",
            cursor: "pointer",
          }}
        >
          <img
            style={{ width: "20px", height: "20px", marginRight: "5px" }}
            src="delete.svg"
            alt="delete"
          />
          Supprimer
        </button>
      </div>
    </div>
  )
}

export default Bookmark
