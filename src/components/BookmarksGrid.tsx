import { Bookmark as BookmarkType } from "../common/types"
import Bookmark from "./Bookmark"

interface BookmarksGridProps {
  bookmarks: Array<BookmarkType>
  deleteBookmark: (url: string) => void
}

/**
 * Wrapper pour display tous les bookmarks ajoutes dqns l'appli
 *
 * @param bookmarks - un array de bookmarks
 * @param deleteBookmark - fonction de suppression
 */

const BookmarksGrid = ({ bookmarks, deleteBookmark }: BookmarksGridProps) => {
  return (
    <div
      style={{
        flex: 1,
      }}
    >
      {bookmarks.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
          }}
        >
          {bookmarks.map((bookmark, idx) => (
            <Bookmark
              key={idx}
              bookmark={bookmark}
              deleteBookmark={deleteBookmark}
            />
          ))}
        </div>
      ) : (
        <p>Aucun bookmark</p>
      )}
    </div>
  )
}

export default BookmarksGrid
