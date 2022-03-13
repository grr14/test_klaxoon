type BookmarkBasis = {
  /* Noembed guarantees that all responses will have html, title, url, and provider_name fields. */
  html: string
  provider_name: string
  title: string
  url: string

  /* The fields are always present as well*/
  author_name: string
  author_url: string
  height: number
  provider_url: string
  thumbnail_height: number
  thumbnail_url: string
  thumbnail_width: number
  type: string
  version: string
  width: number
}

type Vimeo = {
  account_type?: string
  description?: string
  duration: number
  is_plus: string
  thumbnail_url_with_play_button?: string
  upload_date?: string
  uri?: string
  video_id?: string
}

type Flickr = {
  cache_age?: number
  flickr_type?: string
  license?: string
  license_id?: string
  license_url?: string
  media_url?: string
  web_page?: string
  web_page_short_url?: string
}

type BookmarkVimeo = BookmarkBasis & Vimeo
type BookmarkFlickr = BookmarkBasis & Flickr

export type Bookmark = BookmarkVimeo & BookmarkFlickr

export type ExemplesLink = {
  link: string
  description: string
}
