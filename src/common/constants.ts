import { ExemplesLink } from "./types"

export const API = "http://noembed.com/embed?url="

export const HTTP_STATUS_CODE_OK = 200

export const MONTHS = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
]

export const exemples: Array<ExemplesLink> = [
  {
    link: "https://vimeo.com/565486457",
    description: "Lien Vimeo",
  },
  {
    link: "https://www.flickr.com/photos/feuilllu/45771361701/",
    description: "Lien Flickr",
  },
  {
    link: "https://www.flickr.com/photos/104601684@N07/23878804119",
    description: "Lien Flickr avec format différent",
  },
  {
    link: "www.vimeo.com/565486457",
    description: "Lien invalide car sans préfixe http",
  },
  {
    link: "https://www.youtube.com/watch?v=GWHTaILzS48",
    description: "Un autre lien invalide car ni Vimeo ni Flickr",
  },
]
