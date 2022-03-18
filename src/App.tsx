import "./App.css"
import { useEffect, useState } from "react"
import BookmarksGrid from "./components/BookmarksGrid"
import { Bookmark } from "./common/types"
import { API, HTTP_STATUS_CODE_OK } from "./common/constants"
import { gray1 } from "./common/mixins"
import LeftColumn from "./components/LeftColumn"

function App() {
  /* url saisie par l'utilisateur */
  const [url, setUrl] = useState("")

  /* True si la ressource est inexistante */
  const [isError, setIsError] = useState(false)

  /* Array contenant les bookmarks ajoutes par l'utilisateur */
  const [bookmarks, setBookmarks] = useState<Array<Bookmark>>([])

  /**
   * Fonction de suppression d'un bookmark de l'application
   *
   * @param url - url du bookmark a supprimer
   */
  const deleteBookmark = (url: string) => {
    const filtered = bookmarks.filter((bookmark) => bookmark.url !== url)

    setBookmarks(filtered)
  }

  /* Appel a l'API sera effectue a chaque fois que l'utilisateur submit le formulaire (si url valide) */
  useEffect(() => {
    fetch(`${API}${url}`)
      .then((response) => {
        if (response.status !== HTTP_STATUS_CODE_OK) {
          throw new Error(response.status as unknown as string)
        }
        return response.json()
      })
      .then((data: Bookmark) => {
        /* L'API renvoie 200 meme quand l'url est celui d'une ressource inexistante donc je gere ce cas ici */
        if (data.hasOwnProperty("error")) {
          setIsError(true)
          throw new Error("Ressource non trouvée")
        }
        setIsError(false)
        setBookmarks([...bookmarks, data])
      })
      .catch((error: Error) => {
        console.log("error: " + error.message)
      })
  }, [url])

  return (
    <div
      style={{
        minHeight: "100%",
        padding: "25px",
        display: "flex",
        backgroundColor: gray1,
      }}
    >
      {/* Partie Gauche */}
      <LeftColumn setUrl={setUrl} isError={isError} />

      {/* Partie droite*/}
      <BookmarksGrid bookmarks={bookmarks} deleteBookmark={deleteBookmark} />
    </div>
  )
}

export default App
