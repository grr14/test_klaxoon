import { MONTHS } from "./constants"

/**
 * Formatte une string en date au format DD MM YYYY
 *
 * @param date - String au format YYYY-MM-DD HH-MM-SS
 * @returns Date formattée
 */
export const formatDate = (date: string) => {
  const d = new Date(date)
  const day = d?.getDay()
  return `${day === 1 ? `${day}er` : `${day}`} ${
    MONTHS[d.getMonth() - 1]
  } ${d.getFullYear()}`
}

/**
 * Convertit le nombre de secondes au format HH:MM:SS
 * Ne display pas les plus grandes valeurs si nulles
 *
 * @param seconds
 * @returns String formattée
 */
export const secondsToHHMMSS = (seconds: number) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor(seconds / 60) % 60
  const s = seconds % 60

  return [hours, minutes, s]
    .map((el) => (el < 10 ? "0" + el : el))
    .filter((el, idx) => el !== "00" || idx > 0)
    .join(":")
}

/**
 * Determine s'il faut mettre au pluriel une string
 *
 * @param str la string a mettre au pluriel
 * @param value quantité
 * @param suffix terminaison du pluriel, 's' par défaut
 * @returns la string modifiée si besoin
 */
const pluralize = (str: string, value: number, suffix = "s") =>
  value > 1 ? str + suffix : str

/**
 * Convertit le nombre de secondes au format  X heure(s) Y minute(s) Z seconde(s)
 * Pas de display des secondes apres une minute
 *
 * @param seconds
 * @returns String formattée
 */
export const secondsToHMin = (seconds: number) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor(seconds / 60) % 60
  const s = seconds % 60

  if (hours === 0 && minutes === 0) {
    return `${s} ${pluralize("seconde", s)}`
  } else if (minutes > 0 && hours === 0) {
    return `${minutes} ${pluralize("minute", minutes)}`
  }
  return `${hours} ${pluralize("heure", hours)} ${
    minutes > 0 ? `${minutes} ${pluralize("minute", minutes)}` : ``
  }`
}

/**
 * Validation de l'input utilisateur
 * L'url doit impérativement commencer par "http"
 * Le reste des patterns trouvé sur stack-overflow
 *
 * @param url l'url saisie par l'utilisateur
 * @returns Vrai si un des tests est correct, faux sinon
 */
export const isValidUserInput = (url: string) => {
  const vimeoRegex = /(?:https?\:\/\/)(?:www\.)?(?:vimeo\.com\/)([0-9]+)/
  const flickrRegex =
    /(?:https?:\/\/)(?:www\.)?(?:flickr\.com\/photos\/)([\\@a-zA-Z0-9]+\/)?(?:user\/)?([0-9]+)/

  return vimeoRegex.test(url) || flickrRegex.test(url)
}
