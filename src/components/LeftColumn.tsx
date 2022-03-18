import React, { Dispatch, SetStateAction, useState } from "react"
import { exemples, GITHUB } from "../common/constants"
import { gray2, gray3 } from "../common/mixins"
import { isValidUserInput } from "../common/utils"

interface LeftColumnProps {
  setUrl: Dispatch<SetStateAction<string>>
  isError: boolean
}

/**
 * Composant contenant le formulaire ainsi que les eventuels messages d'erreurs et des liens exemples
 *
 * @param setUrl - fonction pour la gestion de la valeur de l'url saisie
 * @param isError - True si la ressource est trouvee, False sinon
 * @returns
 */
const LeftColumn: React.FC<LeftColumnProps> = ({ setUrl, isError }) => {
  const [userInput, setUserInput] = useState("")
  const [isUrlValid, setIsUrlValid] = useState(true)

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    /* on verifie si l'url saisie respecte le format attendu */
    if (isValidUserInput(userInput)) {
      setIsUrlValid(true)
      setUrl(userInput)
    } else {
      /* si ca n'est pas  le cas, on n'appelle pas l'API */
      setIsUrlValid(false)
      return
    }
  }

  const handleUserInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value)
  }

  return (
    <div
      style={{
        padding: "15px 15px 0",
        borderRadius: "10px",
        boxShadow: `5px 5px 5px ${gray3}`,
        width: "25%",
        backgroundColor: gray2,
        marginRight: "15px",
        color: "white",
        overflowWrap: "break-word",
      }}
    >
      <form
        onSubmit={handleFormSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <p>Veuillez saisir le lien Vimeo ou Flickr:</p>
        <input
          type="text"
          value={userInput}
          onChange={handleUserInputChange}
          style={{ marginBottom: "5px", padding: "2px" }}
        />
        <button style={{ cursor: "pointer" }} type="submit">
          Ajouter
        </button>
      </form>

      {!isUrlValid && (
        <div style={{ marginTop: "5px", color: "#9B2C2C" }}>
          L'URL saisie n'est pas valide !
        </div>
      )}

      {isError && (
        <div style={{ marginTop: "5px", color: "#9B2C2C" }}>
          La ressource demandée n'existe pas.
        </div>
      )}

      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
      >
        <h3 style={{ margin: 0 }}>
          <span>Exemples de liens</span>
        </h3>
        <dl>
          {exemples.map((ex, idx) => (
            <React.Fragment key={idx}>
              <dt style={{ marginTop: "5px" }}>
                <span>{ex.description}</span>
              </dt>
              <dd>{ex.link}</dd>
            </React.Fragment>
          ))}
        </dl>
      </div>

      <div>
        <p
          style={{ margin: "15px 0 0", fontSize: "1.2em", fontWeight: "bold" }}
        >
          Code disponible sur mon{" "}
          <a href={GITHUB} target="_blank" rel="noopener noreferrer">
            github
          </a>
        </p>
      </div>
    </div>
  )
}

export default LeftColumn
